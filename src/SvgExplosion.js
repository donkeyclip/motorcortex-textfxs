import MotorCortex from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
const { fontFamilyHelper } = require("./helpers");

export default class SvgExplosion extends MotorCortex.HTMLClip {
  get fonts() {
    const family = fontFamilyHelper(
      this.attrs.fontFamily,
      this.attrs.fontWeight
    );
    const font = [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=${family}&display=swap`
      }
    ];
    return font;
  }

  get html() {
    const { text, colors, width } = this.attrs;
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
    const html = `
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
    return html;
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
    let polyPosition = (this.textSize * this.attrs.text.length) / 2;
    for (let i = 0; i < this.attrs.text.length; i++) {
      const rotation = -50 + Math.random() * 100;
      const textAnimation = new Anime.Anime(
        {
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
        },
        {
          duration: 200,
          selector: ".letter-" + i,
          easing: "easeOutExpo"
        }
      );
      const polyMcGrou = new MotorCortex.Group();
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

        const polyAnimationOp = new Anime.Anime(
          {
            animatedAttrs: {
              opacity: 1
            },
            initialValues: {
              opacity: 0
            }
          },
          {
            duration: 1,
            selector: `.poligon-${i}-${j},.circ-${i}-${j}`,
            easing: "easeOutExpo"
          }
        );

        const circAnimation = new Anime.Anime(
          {
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
          },
          {
            duration: 600,
            selector: `.circ-${i}-${j}`,
            easing: "easeOutQuint"
          }
        );

        const polyAnimation = new Anime.Anime(
          {
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
          },
          {
            duration: 600,
            selector: `.poligon-${i}-${j}`,
            easing: "easeOutQuint"
          }
        );
        polyMcGrou.addIncident(polyAnimationOp, 0);
        polyMcGrou.addIncident(polyAnimation, 1);
        polyMcGrou.addIncident(circAnimation, 1);
      }
      polyPosition += this.textSize / 2;

      const textAnimation2 = new Anime.Anime(
        {
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
        },
        {
          duration: 200,
          selector: ".letter-" + i,
          easing: "easeOutExpo"
        }
      );

      this.addIncident(textAnimation, 200 * (i + 1) + waitTIme);
      this.addIncident(polyMcGrou, 200 * (i + 1) + waitTIme);
      this.addIncident(textAnimation2, 200 + 200 * (i + 1) + waitTIme);
      waitTIme = 200 * (i + 1);
    }
  }
}
