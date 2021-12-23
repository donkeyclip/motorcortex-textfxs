import MotorCortex from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
import { fontFamilyHelper } from "../helpers";
import loadIncidents from "./IncidentTree";

const Anime = MotorCortex.loadPlugin(AnimeDefinition);

export default class Shadow extends MotorCortex.HTMLClip {
  get fonts() {
    const font = [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=${fontFamilyHelper(
          this.attrs.fontFamily,
          this.attrs.fontWeight
        )}&display=swap`,
      },
    ];
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
    this.colorsRGB = this.attrs.colors.map((c) => hexToRGB(c));

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
    const incidents = loadIncidents(Anime, this.colorsRGB, 500);
    const length = this.attrs.reverse ? incidents.length : incidents.length / 2;
    for (let i = 0; i < length; i++) {
      this.addIncident(incidents[i], i * 500);
    }
  }
}
