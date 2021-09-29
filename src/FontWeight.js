import MotorCortex from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

export default class FontWeight extends MotorCortex.HTMLClip {
  get fonts() {
    let wordlist = this.attrs.fontFamily.split(" ").join("+");
    wordlist += `:wght@${this.attrs.fontWeightList.join(";")}`;
    const font = [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=${wordlist}&display=swap`
      }
    ];
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
    const fontWeight = new MotorCortex.Combo(
      {
        incidents: [
          {
            incidentClass: Anime.Anime,
            attrs: {
              animatedAttrs: {
                fontWeight: "900"
              }
            },
            props: {
              duration: 300
            },
            position: 0
          },
          {
            incidentClass: Anime.Anime,
            attrs: {
              animatedAttrs: {
                fontWeight: "100"
              }
            },
            props: {
              duration: 300
            },
            position: 300
          }
        ]
      },
      {
        selector: `.text-item`,
        delay: `@expression(index * 20)`
      }
    );
    this.addIncident(fontWeight, 0);
  }
}
