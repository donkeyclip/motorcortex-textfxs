# MotorCortex-Textfxs

**Table of Contents**

- [MotorCortex-Textfxs](#motorcortex-textfxs)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [SvgLines](#svglines)
  - [SvgExplosion](#svgexplosion)
  - [Shadow](#shadow)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-textfxs/demo/index.html)

# Intro / Features
Using MotorCortex-Textfxs you can create stunning text animations.

This Plugin exposes three Incidents:
- SvgLines
- SvgExplosion
- Shadow

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-textfxs
# OR
$ yarn add @donkeyclip/motorcortex-textfxs
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import textfx from "@donkeyclip/motorcortex-textfxs";
const Plugin = loadPlugin(textfx);
```

# Creating Incidents

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

#### IMPORTANT

If like to change the font family you need to include it in to root clip properties

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

#### IMPORTANT

If like to change the font family you need to include it in to root clip properties

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

#### IMPORTANT

If like to change the font family you need to include it in to root clip properties

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
