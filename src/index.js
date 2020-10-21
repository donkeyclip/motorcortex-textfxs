const SvgExplosion = require("./SvgExplosion");
const SvgLines = require("./SvgLines");
const Shadow = require("./Shadow");
const FontWeight = require("./FontWeight");
const compositeAttributes = require("./compoAttributes");
const attrs = require("./validation");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-textfxs",
  incidents: [
    {
      exportable: SvgExplosion,
      name: "SvgExplosion"
      // attributesValidationRules: attrs.SvgExplosionValidation
    },
    {
      exportable: SvgLines,
      name: "SvgLines"
      // attributesValidationRules: attrs.SvgLineValidation
    },
    {
      exportable: Shadow,
      name: "Shadow"
      // attributesValidationRules: attrs.ShadowValidation
    },
    {
      exportable: FontWeight,
      name: "FontWeight"
      // attributesValidationRules: attrs.ShadowValidation
    }
  ],
  compositeAttributes
};
