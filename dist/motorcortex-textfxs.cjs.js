'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

function fontFamilyHelper(fontFamily, fontWeight) {
  let wordlist = fontFamily.split(" ").join("+");
  if (fontWeight) {
    wordlist += `:wght@${fontWeight}`;
  }
  return wordlist;
}

class SvgExplosion extends motorcortex.HTMLClip {
  get fonts() {
    const family = fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight);
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=${family}&display=swap`
    }];
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
      const style = `color : ${colors[i % colors.length]};`;
      const singleChar = text.slice(i, i + 1);
      const singleCharElement = `<span
          id="text"
          style="${style}"
          class="letter letter-${i}"
        >
            ${singleChar}
        </span>`;
      allCharElements += singleCharElement;
      for (let j = 0; j < 8; j++) {
        const point1 = this.textSize * 0.1 * 2;
        const point2 = this.textSize * 0.1;
        const point3 = this.textSize * 0.1 * 2;
        polygons += `
          <polygon
            class="poligon-${i}-${j} poligon"
            points="0,0 ${point1},0 ${point2},${point3}"
            style="fill: ${colors[i % colors.length]};"
          ></polygon>`;
        circles += `
          <circle
            r="${this.textSize * 0.052}"
            class="circ circ-${i}-${j}"
            style="fill:rgb(238, 238, 238);"
          ></circle>`;
      }
    }
    return `
      <div class="wrapper">
        <div class="container">
          <p
            id="text"
            style="font-size:${this.textSize}px"
            class="text"
          >${allCharElements}</p>
          <svg id="svg">
          ${polygons}
          ${circles}
          </svg>
        </div>
      </div>
      `;
  }
  get css() {
    return `
      svg {
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 0;
        top: 50%;
        transform: translateY(-50%);
        overflow: overlay;
      }

      .text, .offscreen-text {
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        margin: 0;
        text-align: center;
        font-family: ${this.attrs.fontFamily}
      }

      .offscreen-text {
        text-align: center;
        top: -9999px;
      }

      .letter{
        display:inline-block;
        font-weight: 800;
      }

      .poligon{
        opacity:0
      }

      .container{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        overflow: hidden;
        background: ${this.attrs.background};
        display: flex;
        align-content: center;
        align-items: center;
        position: relative;
      }

      .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
      }
  `;
  }
  buildTree() {
    let polyPosition = this.textSize * this.attrs.text.length / 2;
    for (let i = 0; i < this.attrs.text.length; i++) {
      const rotation = -50 + Math.random() * 100;
      const textAnimation = new motorcortex.CSSEffect({
        animatedAttrs: {
          width: `${this.textSize}px`,
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
      const polyMcGrou = new motorcortex.Group();
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
        const polyAnimationOp = new motorcortex.CSSEffect({
          animatedAttrs: {
            opacity: 1
          },
          initialValues: {
            opacity: 0
          }
        }, {
          duration: 1,
          selector: `.poligon-${i}-${j},.circ-${i}-${j}`,
          easing: "easeOutExpo"
        });
        const circAnimation = new motorcortex.CSSEffect({
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
          selector: `.circ-${i}-${j}`,
          easing: "easeOutQuint"
        });
        const polyAnimation = new motorcortex.CSSEffect({
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
          selector: `.poligon-${i}-${j}`,
          easing: "easeOutQuint"
        });
        polyMcGrou.addIncident(polyAnimationOp, 0);
        polyMcGrou.addIncident(polyAnimation, 1);
        polyMcGrou.addIncident(circAnimation, 1);
      }
      polyPosition += this.textSize / 2;
      const textAnimation2 = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            translateY: "50%",
            rotate: "0deg"
          }
        },
        initialValues: {
          transform: {
            translateY: "0%"

            // rotate: rotation+"deg"
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

class SvgLines extends motorcortex.HTMLClip {
  get fonts() {
    const font = [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=${fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight)}&display=swap`
    }];
    return font;
  }
  get html() {
    const y = this.attrs.verticalAlign || "50%";
    return `
        <div class="container">
          <svg>
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="${y}" class="text--line">${this.attrs.text}</text>
            </symbol>
            <g class="g-ants">
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
            </g>
          </svg> 
        </div>
    `;
  }
  get css() {
    return `
    .container{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      overflow: hidden;
      background: ${this.attrs.background};
      display: flex;
      align-content: center;
      align-items: center;
      position: relative;
    }
    .g-ants{
      position: relative;
    }
    .text--line {
      font-size: ${this.attrs.fontSize}px;
      font-family: ${this.attrs.fontFamily}
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .text-copy {
      fill: none;
      stroke: white;
      stroke-dasharray: 100% 28%;
      stroke-width: ${this.attrs.strokeWidth}px;
    }
    .text-copy:nth-child(1) {
      stroke: ${this.attrs.colors[0]};
      stroke-dashoffset: 7%;
    }
    .text-copy:nth-child(2) {
      stroke: ${this.attrs.colors[1]};
      stroke-dashoffset: 14%;
    }
    .text-copy:nth-child(3) {
      stroke: ${this.attrs.colors[2]};
      stroke-dashoffset: 21%;
    }
    .text-copy:nth-child(4) {
      stroke: ${this.attrs.colors[3]};
      stroke-dashoffset: 28%;
    }
    .text-copy:nth-child(5) {
      stroke: ${this.attrs.colors[4]};
      stroke-dashoffset: 35%;
    }
  `;
  }
  buildTree() {
    const svgline = new motorcortex.CSSEffect({
      animatedAttrs: {
        strokeDashoffset: "35%",
        strokeDasharray: " 0 87.5%"
      }
    }, {
      duration: 4000,
      selector: `.text-copy`
    });
    this.addIncident(svgline, 0);
  }
}

var loadIncidents = ((CSSEffect, colorsRGB, duration) => [new CSSEffect({
  animatedAttrs: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},0), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 1), 
          35px 35px 0px rgba(${colorsRGB[5]}, 1), 
          40px 40px 0px rgba(${colorsRGB[5]}, 1), 
          45px 45px 0px rgba(${colorsRGB[5]}, 1)`
  },
  initialValues: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}),
///REVERSE

new CSSEffect({
  animatedAttrs: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 1), 
          35px 35px 0px rgba(${colorsRGB[5]}, 1), 
          40px 40px 0px rgba(${colorsRGB[5]}, 1), 
          45px 45px 0px rgba(${colorsRGB[5]}, 1)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
}), new CSSEffect({
  animatedAttrs: {
    textShadow: `5px 5px 0px rgba(${colorsRGB[0]},0), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  },
  initialValues: {
    textShadow: ` 5px 5px 0px rgba(${colorsRGB[0]},1), 
          10px 10px 0px rgba(${colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${colorsRGB[5]}, 0)`
  }
}, {
  duration,
  selector: `.text`
})]);

class Shadow extends motorcortex.HTMLClip {
  get fonts() {
    const font = [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=${fontFamilyHelper(this.attrs.fontFamily, this.attrs.fontWeight)}&display=swap`
    }];
    return font;
  }
  get html() {
    return `
        <div class="container">
          <div class="text">${this.attrs.text}</div>
        </div>
    `;
  }
  get css() {
    function hexToRGB(h) {
      let r = 0,
        g = 0,
        b = 0;

      // 3 digits
      if (h.length === 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
      } else if (h.length === 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }
      return `${+r},${+g},${+b}`;
    }
    this.colorsRGB = this.attrs.colors.map(c => hexToRGB(c));
    return `
      .container {
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: ${this.attrs.textColor};
      }

      .text{
        font-size: ${this.attrs.fontSize}px;
        text-align: center;
        width: 100%;
        color: ${this.attrs.textColor};
        background: ${this.attrs.background};
        font-family: ${this.attrs.fontFamily}, cursive;
        font-weight: 700;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
  }
  buildTree() {
    const incidents = loadIncidents(motorcortex.CSSEffect, this.colorsRGB, 500);
    const length = this.attrs.reverse ? incidents.length : incidents.length / 2;
    for (let i = 0; i < length; i++) {
      this.addIncident(incidents[i], i * 500);
    }
  }
}

class FontWeight extends motorcortex.HTMLClip {
  get fonts() {
    let wordlist = this.attrs.fontFamily.split(" ").join("+");
    wordlist += `:wght@${this.attrs.fontWeightList.join(";")}`;
    const font = [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=${wordlist}&display=swap`
    }];
    return font;
  }
  get html() {
    const textList = [];
    for (let i = 1; i <= this.attrs.repeats; i++) {
      textList.push(`<div class="text-item">${this.attrs.text}</div>`);
    }
    return `
    <div class="wrapper">
      <div class="text">
      ${textList.join("")}
      </div>
    </div>
    `;
  }
  get css() {
    return `
    .wrapper{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .text{
      font-size:${this.attrs.fontSize}px;
      color:${this.attrs.textColor};
      text-transform:uppercase;
      font-family: ${this.attrs.fontFamily};
      position: absolute;
      font-weight: 100;
      transform:rotate(${this.attrs.rotate || 0}deg);
    }
   
  `;
  }
  buildTree() {
    const fontWeight = new motorcortex.Combo({
      incidents: [{
        incidentClass: motorcortex.CSSEffect,
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
        incidentClass: motorcortex.CSSEffect,
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
      selector: `.text-item`,
      delay: `@expression(index * 20)`
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
var module$1 = "dist/motorcortex-textfxs.esm.js";
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
	concurrently: "concurrently -c \"cyan.bold,magenta.bold\" --names \"JS,Styles\"",
	"lint:js": "eslint -c .eslintrc src/**/*.js",
	lint: "npm run lint:js",
	"lint:fix": "npm run lint:js -- --fix",
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
var peerDependencies = {
	"@donkeyclip/motorcortex": ">= 8 < 10"
};
var devDependencies = {
	"@babel/cli": "^7.19.3",
	"@babel/core": "^7.20.5",
	"@babel/eslint-parser": "^7.19.1",
	"@babel/preset-env": "^7.20.2",
	"@donkeyclip/motorcortex": "^9.5.0",
	"@donkeyclip/motorcortex-player": "^2.10.7",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "21.1.0",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.3.0",
	"babel-loader": "^9.1.0",
	browserslist: "^4.21.4",
	"caniuse-lite": "^1.0.30001439",
	concurrently: "^7.6.0",
	"core-js": "^3.26.1",
	eslint: "^8.29.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-config-standard": "^17.0.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "^4.2.1",
	"eslint-plugin-promise": "^6.1.1",
	husky: "^8.0.2",
	"lint-staged": "^13.1.0",
	prettier: "^2.8.1",
	rimraf: "3.0.2",
	rollup: "2.75.4",
	"rollup-plugin-terser": "7.0.2",
	webpack: "^5.75.0",
	"webpack-cli": "^5.0.1",
	"webpack-dev-server": "^4.11.1"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module$1,
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
		"prettier --write"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
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

module.exports = index;
