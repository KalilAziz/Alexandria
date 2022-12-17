"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colorsDark: () => colorsDark,
  colorsWhite: () => colorsWhite,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var import_colors = require("@radix-ui/colors");
var colorsWhite = {
  ...import_colors.tomato,
  ...import_colors.red,
  ...import_colors.crimson,
  ...import_colors.pink,
  ...import_colors.plum,
  ...import_colors.purple,
  ...import_colors.violet,
  ...import_colors.indigo,
  ...import_colors.blue,
  ...import_colors.cyan,
  ...import_colors.teal,
  ...import_colors.green,
  ...import_colors.grass,
  ...import_colors.orange,
  ...import_colors.brown,
  ...import_colors.sky,
  ...import_colors.mint,
  ...import_colors.lime,
  ...import_colors.yellow,
  ...import_colors.amber,
  ...import_colors.gray,
  ...import_colors.mauve,
  ...import_colors.slate,
  ...import_colors.sage,
  ...import_colors.olive,
  ...import_colors.sand,
  ...import_colors.gold,
  ...import_colors.bronze,
  ...import_colors.blackA,
  ...import_colors.whiteA
};
var colorsDark = {
  ...import_colors.tomatoDark,
  ...import_colors.redDark,
  ...import_colors.crimsonDark,
  ...import_colors.pinkDark,
  ...import_colors.plumDark,
  ...import_colors.purpleDark,
  ...import_colors.violetDark,
  ...import_colors.indigoDark,
  ...import_colors.blueDark,
  ...import_colors.cyanDark,
  ...import_colors.tealDark,
  ...import_colors.greenDark,
  ...import_colors.grassDark,
  ...import_colors.orangeDark,
  ...import_colors.brownDark,
  ...import_colors.skyDark,
  ...import_colors.mintDark,
  ...import_colors.limeDark,
  ...import_colors.yellowDark,
  ...import_colors.amberDark,
  ...import_colors.grayDark,
  ...import_colors.mauveDark,
  ...import_colors.slateDark,
  ...import_colors.sageDark,
  ...import_colors.oliveDark,
  ...import_colors.sandDark,
  ...import_colors.goldDark,
  ...import_colors.bronzeDark
};

// src/space.ts
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "150%",
  base: "160%",
  tall: "180%"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colorsDark,
  colorsWhite,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
