import { HTMLClip, CSSEffect, Group, Combo } from '@donkeyclip/motorcortex';

function fontFamilyHelper(fontFamily, fontWeight) {
  let wordlist = fontFamily.split(" ").join("+");

  if (fontWeight) {
    wordlist += ":wght@".concat(fontWeight);
  }

  return wordlist;
}

class SvgExplosion extends HTMLClip {
  get fonts() {
    const family = fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight);
    const font = [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=".concat(family, "&display=swap")
    }];
    return font;
  }

  get html() {
    const {
      text,
      colors,
      width
    } = this.attrs;
    this.textSize = width / text.length;
    let allCharElements = "";
    let polygons = "";
    let circles = "";

    for (let i = 0; i < text.length; i++) {
      const style = "color : ".concat(colors[i % colors.length], ";");
      const singleChar = text.slice(i, i + 1);
      const singleCharElement = "<span \n          id=\"text\"\n          style=\"".concat(style, "\"\n          class=\"letter letter-").concat(i, "\"\n        >\n            ").concat(singleChar, "\n        </span>");
      allCharElements += singleCharElement;

      for (let j = 0; j < 8; j++) {
        const point1 = this.textSize * 0.1 * 2;
        const point2 = this.textSize * 0.1;
        const point3 = this.textSize * 0.1 * 2;
        polygons += "\n          <polygon \n            class=\"poligon-".concat(i, "-").concat(j, " poligon\"\n            points=\"0,0 ").concat(point1, ",0 ").concat(point2, ",").concat(point3, "\"\n            style=\"fill: ").concat(colors[i % colors.length], ";\"\n          ></polygon>");
        circles += "\n          <circle \n            r=\"".concat(this.textSize * 0.052, "\"\n            class=\"circ circ-").concat(i, "-").concat(j, "\"\n            style=\"fill:rgb(238, 238, 238);\"\n          ></circle>");
      }
    }

    const html = "\n      <div class=\"wrapper\">\n        <div class=\"container\">\n          <p \n            id=\"text\"\n            style=\"font-size:".concat(this.textSize, "px\"\n            class=\"text\"\n          >").concat(allCharElements, "</p>\n          <svg id=\"svg\">\n          ").concat(polygons, "\n          ").concat(circles, "\n          </svg>\n        </div>\n      </div>\n      ");
    return html;
  }

  get css() {
    return "\n      svg {\n        width: 100%;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        z-index: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        overflow: overlay;\n      }\n      \n      .text, .offscreen-text {\n        width: 100%;\n        top: 50%;\n        transform: translateY(-50%);\n        display: block;\n        margin: 0;\n        text-align: center;\n        font-family: ".concat(this.attrs.fontFamily, "\n      }\n      \n      .offscreen-text {\n        text-align: center;\n        top: -9999px;\n      }\n      \n      .letter{\n        display:inline-block;\n        font-weight: 800;\n      }\n\n      .poligon{\n        opacity:0\n      }\n\n      .container{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        overflow: hidden;\n        background: ").concat(this.attrs.background, ";\n        display: flex;\n        align-content: center;\n        align-items: center;\n        position: relative;\n      }\n\n      .wrapper{\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        align-items: center;\n      }\n  ");
  }

  buildTree() {
    let polyPosition = this.textSize * this.attrs.text.length / 2;

    for (let i = 0; i < this.attrs.text.length; i++) {
      const rotation = -50 + Math.random() * 100;
      const textAnimation = new CSSEffect({
        animatedAttrs: {
          width: "".concat(this.textSize, "px"),
          opacity: 1,
          transform: {
            translateY: "0%",
            scale: 1,
            rotate: rotation + "deg"
          }
        },
        initialValues: {
          width: "0px",
          opacity: 0,
          transform: {
            translateY: "100%",
            scale: 0
          }
        }
      }, {
        duration: 200,
        selector: ".letter-" + i,
        easing: "easeOutExpo"
      });
      const polyMcGrou = new Group();
      let waitTIme = 0;

      for (let j = 0; j < 8; j++) {
        const a = Math.random();
        const a2 = a + (-0.2 + Math.random() * 0.4);
        const r = this.textSize * 0.52;
        const r2 = r + this.textSize * Math.random() * 0.2;
        const x = polyPosition + r * Math.cos(2 * Math.PI * a);
        const y = 50 + r * Math.sin(2 * Math.PI * a);
        const x2 = polyPosition + r2 * Math.cos(2 * Math.PI * a2);
        const y2 = 50 + r2 * Math.sin(2 * Math.PI * a2);
        const triSize = this.textSize * 0.1;
        const scale = 0.3 + Math.random() * 0.7;
        const offset = triSize * scale;
        const circSize = this.textSize * 0.05 * Math.random();
        const polyAnimationOp = new CSSEffect({
          animatedAttrs: {
            opacity: 1
          },
          initialValues: {
            opacity: 0
          }
        }, {
          duration: 1,
          selector: ".poligon-".concat(i, "-").concat(j, ",.circ-").concat(i, "-").concat(j),
          easing: "easeOutExpo"
        });
        const circAnimation = new CSSEffect({
          animatedAttrs: {
            transform: {
              rotate: Math.random() * 360 + "deg",
              translateX: x2 - circSize + "px",
              translateY: y2 - circSize + "px"
            },
            opacity: 0
          },
          initialValues: {
            transform: {
              scale: circSize * 0.15,
              rotate: Math.random() * 360 + "deg",
              translateX: x - offset + "px",
              translateY: y - offset + "px"
            },
            opacity: 1
          }
        }, {
          duration: 600,
          selector: ".circ-".concat(i, "-").concat(j),
          easing: "easeOutQuint"
        });
        const polyAnimation = new CSSEffect({
          animatedAttrs: {
            transform: {
              rotate: Math.random() * 360 + "deg",
              translateX: x2 - offset + "px",
              translateY: y2 - offset + "px"
            },
            opacity: 0
          },
          initialValues: {
            transform: {
              scale: scale,
              rotate: Math.random() * 360 + "deg",
              translateX: x - offset + "px",
              translateY: y - offset + "px"
            },
            opacity: 1
          }
        }, {
          duration: 600,
          selector: ".poligon-".concat(i, "-").concat(j),
          easing: "easeOutQuint"
        });
        polyMcGrou.addIncident(polyAnimationOp, 0);
        polyMcGrou.addIncident(polyAnimation, 1);
        polyMcGrou.addIncident(circAnimation, 1);
      }

      polyPosition += this.textSize / 2;
      const textAnimation2 = new CSSEffect({
        animatedAttrs: {
          transform: {
            translateY: "50%",
            rotate: "0deg"
          }
        },
        initialValues: {
          transform: {
            translateY: "0%" // rotate: rotation+"deg"

          }
        }
      }, {
        duration: 200,
        selector: ".letter-" + i,
        easing: "easeOutExpo"
      });
      this.addIncident(textAnimation, 200 * (i + 1) + waitTIme);
      this.addIncident(polyMcGrou, 200 * (i + 1) + waitTIme);
      this.addIncident(textAnimation2, this.duration - 200);
      waitTIme = 200 * (i + 1);
    }
  }

}

class SvgLines extends HTMLClip {
  get fonts() {
    const font = [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=".concat(fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight), "&display=swap")
    }];
    return font;
  }

  get html() {
    const y = this.attrs.verticalAlign || "50%";
    return "\n        <div class=\"container\">\n          <svg>\n            <symbol id=\"s-text\">\n              <text text-anchor=\"middle\" x=\"50%\" y=\"".concat(y, "\" class=\"text--line\">").concat(this.attrs.text, "</text>\n            </symbol>\n            <g class=\"g-ants\">\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n              <use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n            </g>\n          </svg> \n        </div>\n    ");
  }

  get css() {
    return "\n    .container{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      overflow: hidden;\n      background: ").concat(this.attrs.background, ";\n      display: flex;\n      align-content: center;\n      align-items: center;\n      position: relative;\n    }\n    .g-ants{\n      position: relative;\n    }\n    .text--line {\n      font-size: ").concat(this.attrs.fontSize, "px;\n      font-family: ").concat(this.attrs.fontFamily, "\n    }\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n    .text-copy {\n      fill: none;\n      stroke: white;\n      stroke-dasharray: 100% 28%;\n      stroke-width: ").concat(this.attrs.strokeWidth, "px;\n    }\n    .text-copy:nth-child(1) {\n      stroke: ").concat(this.attrs.colors[0], ";\n      stroke-dashoffset: 7%;\n    }\n    .text-copy:nth-child(2) {\n      stroke: ").concat(this.attrs.colors[1], ";\n      stroke-dashoffset: 14%;\n    }\n    .text-copy:nth-child(3) {\n      stroke: ").concat(this.attrs.colors[2], ";\n      stroke-dashoffset: 21%;\n    }\n    .text-copy:nth-child(4) {\n      stroke: ").concat(this.attrs.colors[3], ";\n      stroke-dashoffset: 28%;\n    }\n    .text-copy:nth-child(5) {\n      stroke: ").concat(this.attrs.colors[4], ";\n      stroke-dashoffset: 35%;\n    }\n  ");
  }

  buildTree() {
    const svgline = new CSSEffect({
      animatedAttrs: {
        strokeDashoffset: "35%",
        strokeDasharray: " 0 87.5%"
      }
    }, {
      duration: 4000,
      selector: ".text-copy"
    });
    this.addIncident(svgline, 0);
  }

}

var loadIncidents = ((CSSEffect, colorsRGB, duration) => [new CSSEffect({
  animatedAttrs: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",0), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 1), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 1), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 1), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 1)")
  },
  initialValues: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), ///REVERSE
new CSSEffect({
  animatedAttrs: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 1), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 1), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 1), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 1)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 1), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 1), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 1), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 1), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
}), new CSSEffect({
  animatedAttrs: {
    textShadow: "5px 5px 0px rgba(".concat(colorsRGB[0], ",0), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  },
  initialValues: {
    textShadow: " 5px 5px 0px rgba(".concat(colorsRGB[0], ",1), \n          10px 10px 0px rgba(").concat(colorsRGB[1], ", 0), \n          15px 15px 0px rgba(").concat(colorsRGB[2], ", 0), \n          20px 20px 0px rgba(").concat(colorsRGB[3], ", 0), \n          25px 25px 0px rgba(").concat(colorsRGB[4], ", 0), \n          30px 30px 0px rgba(").concat(colorsRGB[5], ", 0), \n          35px 35px 0px rgba(").concat(colorsRGB[5], ", 0), \n          40px 40px 0px rgba(").concat(colorsRGB[5], ", 0), \n          45px 45px 0px rgba(").concat(colorsRGB[5], ", 0)")
  }
}, {
  duration,
  selector: ".text"
})]);

class Shadow extends HTMLClip {
  get fonts() {
    const font = [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=".concat(fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight), "&display=swap")
    }];
    return font;
  }

  get html() {
    return "\n        <div class=\"container\">\n          <div class=\"text\">".concat(this.attrs.text, "</div>\n        </div>\n    ");
  }

  get css() {
    function hexToRGB(h) {
      let r = 0,
          g = 0,
          b = 0; // 3 digits

      if (h.length === 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3]; // 6 digits
      } else if (h.length === 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }

      return "".concat(+r, ",").concat(+g, ",").concat(+b);
    }

    this.colorsRGB = this.attrs.colors.map(c => hexToRGB(c));
    return "\n      .container {\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        color: ").concat(this.attrs.textColor, ";\n      }\n\n      .text{\n        font-size: ").concat(this.attrs.fontSize, "px;\n        text-align: center;\n        width: 100%;\n        color: ").concat(this.attrs.textColor, ";\n        background: ").concat(this.attrs.background, ";\n        font-family: ").concat(this.attrs.fontFamily, ", cursive;\n        font-weight: 700;\n        height:100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    ");
  }

  buildTree() {
    const incidents = loadIncidents(CSSEffect, this.colorsRGB, 500);
    const length = this.attrs.reverse ? incidents.length : incidents.length / 2;

    for (let i = 0; i < length; i++) {
      this.addIncident(incidents[i], i * 500);
    }
  }

}

class FontWeight extends HTMLClip {
  get fonts() {
    let wordlist = this.attrs.fontFamily.split(" ").join("+");
    wordlist += ":wght@".concat(this.attrs.fontWeightList.join(";"));
    const font = [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=".concat(wordlist, "&display=swap")
    }];
    return font;
  }

  get html() {
    const textList = [];

    for (let i = 1; i <= this.attrs.repeats; i++) {
      textList.push("<div class=\"text-item\">".concat(this.attrs.text, "</div>"));
    }

    return "\n    <div class=\"wrapper\">\n      <div class=\"text\">\n      ".concat(textList.join(""), "\n      </div>\n    </div>\n    ");
  }

  get css() {
    return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display: flex;\n      align-content: center;\n      justify-content: center;\n      align-items: center;\n    }\n    .text{\n      font-size:").concat(this.attrs.fontSize, "px;\n      color:").concat(this.attrs.textColor, ";\n      text-transform:uppercase;\n      font-family: ").concat(this.attrs.fontFamily, ";\n      position: absolute;\n      font-weight: 100;\n      transform:rotate(").concat(this.attrs.rotate || 0, "deg);\n    }\n   \n  ");
  }

  buildTree() {
    const fontWeight = new Combo({
      incidents: [{
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            fontWeight: "900"
          }
        },
        props: {
          duration: 300
        },
        position: 0
      }, {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            fontWeight: "100"
          }
        },
        props: {
          duration: 300
        },
        position: 300
      }]
    }, {
      selector: ".text-item",
      delay: "@expression(index * 20)"
    });
    this.addIncident(fontWeight, 0);
  }

}

const SvgExplosionValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  height: {
    type: "number"
  },
  background: {
    optional: true,
    type: "color"
  },
  fontFamily: {
    type: "string"
  }
};
const SvgLineValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  strokeWidth: {
    type: "number"
  },
  height: {
    type: "number"
  },
  background: {
    optional: true,
    type: "color"
  },
  fontFamily: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  }
};
const ShadowValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  fontFamily: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  height: {
    type: "number"
  },
  background: {
    optional: true,
    type: "color"
  },
  reverse: {
    type: "boolean"
  }
};
const FontWeightValidation = {
  text: {
    type: "string"
  },
  fontWeightList: {
    type: "array",
    items: {
      type: "number"
    }
  },
  repeats: {
    type: "number",
    min: 1
  },
  width: {
    type: "number"
  },
  height: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  fontFamily: {
    type: "string"
  },
  textColor: {
    type: "color"
  }
};

var name = "@donkeyclip/motorcortex-textfxs";
var version = "0.3.0";
var description = "textfxs plugin for MotorCortex";
var main = "dist/motorcortex-textfxs.cjs.js";
var module = "dist/motorcortex-textfxs.esm.js";
var browser = "dist/motorcortex-textfxs.umd.js";
var author = "Donkeyclip (donkeyclip.com) <opensource@donkeyclip.com>";
var repository = {
	type: "git",
	url: "https://github.com/donkeyclip/motorcortex-textfxs.git"
};
var license = "MIT";
var engines = {
	node: ">=12"
};
var scripts = {
	"update-force:packages": "./node_modules/npm-check-updates/bin/ncu -u && npm i",
	"update:packages": "npm update --save/--save-dev",
	concurrently: "concurrently -c \"cyan.bold,magenta.bold\" --names \"JS,Styles\"",
	"lint:styles": "stylelint  \"src/**.css\" \"src/**/*.scss\" --config .stylelintrc.json",
	"lint:js": "eslint -c .eslintrc src/**/*.js",
	lint: "npm run concurrently \"npm run lint:js\" \"npm run lint:styles\"",
	"lint:fix": "npm run concurrently  \"npm run lint:js -- --fix\" \"npm run lint:styles -- --fix\"",
	build: "npm run build:lib && npm run build:demo",
	"build:lib": "rollup -c",
	start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
	"start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
	"build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
	test: "HERE GOES YOUR TEST TASK",
	"test:prod": "npm run lint",
	"report-coverage": "cat ./coverage/lcov.info | coveralls",
	commit: "git-cz",
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"animation"
];
var release = {
	verifyConditions: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/github",
		"@semantic-release/git"
	],
	prepare: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git"
	]
};
var config = {
	commitizen: {
		path: "cz-conventional-changelog"
	}
};
var peerDependencies = {
	"@donkeyclip/motorcortex": ">= 8 < 10"
};
var devDependencies = {
	"@babel/cli": "7.17.10",
	"@babel/core": "7.17.10",
	"@babel/eslint-parser": "7.17.0",
	"@babel/plugin-syntax-jsx": "7.16.7",
	"@babel/plugin-transform-react-jsx": "7.17.3",
	"@babel/preset-env": "7.17.10",
	"@commitlint/cli": "16.2.4",
	"@commitlint/config-conventional": "16.2.4",
	"@donkeyclip/motorcortex": "9.1.1",
	"@donkeyclip/motorcortex-player": "2.9.5",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "21.1.0",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.2.1",
	"@semantic-release/changelog": "6.0.1",
	"@semantic-release/git": "10.0.1",
	"@semantic-release/github": "8.0.4",
	"@semantic-release/npm": "9.0.1",
	"@size-limit/preset-big-lib": "6.0.4",
	"babel-loader": "8.2.5",
	browserslist: "4.20.3",
	"caniuse-lite": "1.0.30001334",
	commitizen: "4.2.4",
	concurrently: "7.1.0",
	"core-js": "3.22.3",
	"cz-conventional-changelog": "3.3.0",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-config-standard": "16.0.3",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.0.0",
	"eslint-plugin-promise": "5.2.0",
	husky: "7.0.4",
	"lint-staged": "12.4.1",
	prettier: "2.6.2",
	rimraf: "3.0.2",
	rollup: "2.70.2",
	"rollup-plugin-terser": "7.0.2",
	"semantic-release": "19.0.2",
	"size-limit": "6.0.4",
	webpack: "5.72.0",
	"webpack-cli": "4.9.2",
	"webpack-dev-server": "4.8.1"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module,
	browser: browser,
	author: author,
	repository: repository,
	license: license,
	engines: engines,
	scripts: scripts,
	keywords: keywords,
	"lint-staged": {
	"*.{json,md,yml,yaml}": [
		"prettier --write"
	],
	"*.css": [
		"prettier --write",
		"stylelint  \"src/**.css\" --config .stylelintrc.json --fix"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
	release: release,
	config: config,
	peerDependencies: peerDependencies,
	devDependencies: devDependencies
};

var index = {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [{
    exportable: SvgExplosion,
    name: "SvgExplosion",
    attributesValidationRules: SvgExplosionValidation
  }, {
    exportable: SvgLines,
    name: "SvgLines",
    attributesValidationRules: SvgLineValidation
  }, {
    exportable: Shadow,
    name: "Shadow",
    attributesValidationRules: ShadowValidation
  }, {
    exportable: FontWeight,
    name: "FontWeight",
    attributesValidationRules: FontWeightValidation
  }]
};

export { index as default };
