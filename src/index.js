import SvgExplosion from "./SvgExplosion";
import SvgLines from "./SvgLines";
import Shadow from "./Shadow/index.js";
import FontWeight from "./FontWeight";
import {
  ShadowValidation,
  SvgExplosionValidation,
  SvgLineValidation,
  FontWeightValidation,
} from "./validation";

import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: SvgExplosion,
      name: "SvgExplosion",
      attributesValidationRules: SvgExplosionValidation,
    },
    {
      exportable: SvgLines,
      name: "SvgLines",
      attributesValidationRules: SvgLineValidation,
    },
    {
      exportable: Shadow,
      name: "Shadow",
      attributesValidationRules: ShadowValidation,
    },
    {
      exportable: FontWeight,
      name: "FontWeight",
      attributesValidationRules: FontWeightValidation,
    },
  ],
};
