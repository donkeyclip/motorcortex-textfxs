import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import textfxs from "../src/index";

const Clip = loadPlugin(textfxs);

const clip = new HTMLClip({
  css: `
    body { 
      background-color : white; 
    }              
    .container {
      width: 1900px;
      height: 300px;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    .wrapper{
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: gainsboro;
    }
  `,
  html: ` 
    <div class="wrapper">
      <div class="container container1"></div>
      <div class="container container2"></div>
      <div class="container container3"></div>
      <div class="container container4"></div>
    </div> 
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1900px",
    height: "1200px",
  },
  id: "root",
});

const SvgExplosion = new Clip.SvgExplosion(
  {
    text: "SvgExplosion",
    width: 1920,
    height: 300,
    background: "#22292C",
    colors: [
      "#FBDB4A",
      "#F3934A",
      "#EB547D",
      "#9F6AA7",
      "#5476B3",
      "#2BB19B",
      "#70B984",
    ],
    fontFamily: "Rubik Mono One",
    fontWeight: 400,
  },
  {
    selector: ".container1",
  }
);

const Shadow = new Clip.Shadow(
  {
    text: "Shadow",
    width: 1920,
    height: 300,
    background: "#d52e3f",
    colors: ["#e942f5", "#efa032", "#46b59b", "#017e7f", "#052939", "#c11a2b"],
    fontSize: 130,
    textColor: "#fcedd8",
    fontFamily: "Arial",
    reverse: true,
  },
  {
    selector: ".container2",
  }
);

const SvgLines = new Clip.SvgLines(
  {
    text: "SvgLines",
    width: 1920,
    height: 300,
    background: "#22292C",
    colors: ["#64d3ce", "#2a92ce82", "#ff003c", "#2a92ce2e", "#2a92ce1c"],
    strokeWidth: 3,
    fontSize: 250,
    verticalAlign: "80%",
    fontFamily: "Rubik Mono One",
  },
  {
    selector: ".container3",
  }
);

const FontWeight = new Clip.FontWeight(
  {
    width: 1920,
    height: 300,
    text: "FontWeight Animation",
    textColor: "#ff0000",
    repeats: 70,
    fontSize: 20,
    fontFamily: "Commissioner",
    fontWeightList: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    rotate: 90,
  },
  {
    selector: ".container4",
  }
);

clip.addIncident(SvgExplosion, 0);
clip.addIncident(Shadow, 0);
clip.addIncident(SvgLines, 0);
clip.addIncident(FontWeight, 0);

new Player({ clip });
