import MotorCortex from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";

const Anime = MotorCortex.loadPlugin(AnimeDefinition);
const { fontFamilyHelper } = require("./helpers");

export default class SvgLines extends MotorCortex.HTMLClip {
  get fonts() {
    const font = [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=${fontFamilyHelper(
          this.attrs.fontFamily,
          this.attrs.fontWeight
        )}&display=swap`
      }
    ];
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
    const svgline = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: "35%",
          strokeDasharray: " 0 87.5%"
        }
      },
      {
        duration: 4000,
        selector: `.text-copy`
      }
    );
    this.addIncident(svgline, 0);
  }
}
