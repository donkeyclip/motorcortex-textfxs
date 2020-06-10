const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class SvgLines extends MotorCortex.API.Clip {
  get html() {
    this.speed = this.attrs.speed ? this.attrs.speed : 1;
    return `
    <div class="wrapper">
    <div class="container">
    <svg viewBox="0 0 ${this.attrs.width} ${this.attrs.height}">
  <symbol id="s-text">

    <text text-anchor="middle" x="50%" y="68%" class="text--line">Text</text>
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
    .wrapper{
      width: 100%;
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
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
    const textSadow1 = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: "35%",
          strokeDasharray: " 0 87.5%"
        }
      },
      {
        duration: 2000 * this.speed,
        selector: `.text-copy`
      }
    );

    this.addIncident(textSadow1, 0);
  }
}

module.exports = SvgLines;
