# motorcortex-textfxs

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-textfxs/demo/index.html)

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-textfxs
# OR
$ yarn add @donkeyclip/motorcortex-textfxs
```

## Loading

```javascript
const MotorCortex = require("@donkeyclip/motorcortex/");
const textfx = require("@donkeyclip/motorcortex-textfxs");
const Plugin = MotorCortex.loadPlugin(textfx);
```

# Create incident

## SvgLines

```javascript
const SvgLines = new Plugin.SvgLines(
  {
    text: "SvgLines",
    width: 1728,
    height: 300,
    background: "#22292C",
    colors: ["#64d3ce", "#2a92ce82", "#ff003c", "#2a92ce2e", "#2a92ce1c"],
    strokeWidth: 3,
    fontSize: 250,
    fontFamily: "Rubik Mono One",
  },
  {
    selector: ".container3",
  }
);
```

### SvgLines Attrs

| Name       |               Are                |                                            Values |
| ---------- | :------------------------------: | ------------------------------------------------: |
| text       |               text               |                                            string |
| width      |  total width of clip container   |                              all positive numbers |
| height     |  total height of clip container  |                              all positive numbers |
| background |     the color of background      | hex values or RGB(A) or text ("blue", "red", etc) |
| colors     | the list colors of svg elementes | hex values or RGB(A) or text ("blue", "red", etc) |
| fontFamily |           font family            |                                            string |
| fontSize   |         size of the font         |                                            number |
| fontWeight |      the Weight of the font      |                                            number |

## SvgExplosion

```javascript
const SvgExplosion = new Plugin.SvgExplosion(
  {
    text: "SvgExplosion",
    width: 1728,
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
  },
  {
    selector: ".container1",
  }
);
```

### SvgExplosion Attrs

| Name       |              Are               |                                            Values |
| ---------- | :----------------------------: | ------------------------------------------------: |
| text       |              text              |                                            string |
| width      | total width of clip container  |                              all positive numbers |
| height     | total height of clip container |                              all positive numbers |
| background |    the color of background     | hex values or RGB(A) or text ("blue", "red", etc) |
| colors     |    list of colors for leter    | hex values or RGB(A) or text ("blue", "red", etc) |
| fontFamily |          font family           |                                            string |
| fontSize   |        size of the font        |                                            number |
| fontWeight |     the Weight of the font     |                                            number |

## Shadow

```javascript
const Shadow = new Plugin.Shadow(
  {
    text: "Shadow",
    width: 1728,
    height: 300,
    background: "#d52e3f",
    colors: ["#e942f5", "#efa032", "#46b59b", "#017e7f", "#052939", "#c11a2b"],
    fontSize: 250,
    textColor: "#fcedd8",
    fontFamily: "Pacifico",
    reverce: false,
  },
  {
    selector: ".container2",
  }
);
```

### Shadow Attrs

| Name       |                Are                 |                                            Values |
| ---------- | :--------------------------------: | ------------------------------------------------: |
| text       |                text                |                                            string |
| width      |   total width of clip container    |                              all positive numbers |
| height     |   total height of clip container   |                              all positive numbers |
| background |      the color of background       | hex values or RGB(A) or text ("blue", "red", etc) |
| colors     |  the list colors of svg elementes  |                                        hex values |
| speed      |   animation speed. Defaults to 1   |                                        num, min:0 |
| textColor  |       the main color of text       | hex values or RGB(A) or text ("blue", "red", etc) |
| fontFamily |            font family             |                                            string |
| fontSize   |          size of the font          |                                            number |
| reverce    | reverse tha animation after finish |                                           boolean |
| fontWeight |       the Weight of the font       |                                            number |

## Font

if like to change the font you need to include it in to root clip properties

# Just add your incident to any clip

```javascript
anyClip.addIncident(SvgLines, 0);
```

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
