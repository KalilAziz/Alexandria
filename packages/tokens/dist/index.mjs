// src/colors.ts
import {
  tomato,
  tomatoDark,
  red,
  redDark,
  crimson,
  crimsonDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  violet,
  violetDark,
  indigo,
  indigoDark,
  blue,
  blueDark,
  cyan,
  cyanDark,
  teal,
  tealDark,
  green,
  greenDark,
  grass,
  grassDark,
  orange,
  orangeDark,
  brown,
  brownDark,
  sky,
  skyDark,
  mint,
  mintDark,
  lime,
  limeDark,
  yellow,
  yellowDark,
  amber,
  amberDark,
  gray,
  grayDark,
  mauve,
  mauveDark,
  slate,
  slateDark,
  sage,
  sageDark,
  olive,
  oliveDark,
  sand,
  sandDark,
  gold,
  goldDark,
  bronze,
  bronzeDark,
  blackA,
  whiteA
} from "@radix-ui/colors";
var colorsWhite = {
  ...tomato,
  ...red,
  ...crimson,
  ...pink,
  ...plum,
  ...purple,
  ...violet,
  ...indigo,
  ...blue,
  ...cyan,
  ...teal,
  ...green,
  ...grass,
  ...orange,
  ...brown,
  ...sky,
  ...mint,
  ...lime,
  ...yellow,
  ...amber,
  ...gray,
  ...mauve,
  ...slate,
  ...sage,
  ...olive,
  ...sand,
  ...gold,
  ...bronze,
  ...blackA,
  ...whiteA
};
var colorsDark = {
  ...tomatoDark,
  ...redDark,
  ...crimsonDark,
  ...pinkDark,
  ...plumDark,
  ...purpleDark,
  ...violetDark,
  ...indigoDark,
  ...blueDark,
  ...cyanDark,
  ...tealDark,
  ...greenDark,
  ...grassDark,
  ...orangeDark,
  ...brownDark,
  ...skyDark,
  ...mintDark,
  ...limeDark,
  ...yellowDark,
  ...amberDark,
  ...grayDark,
  ...mauveDark,
  ...slateDark,
  ...sageDark,
  ...oliveDark,
  ...sandDark,
  ...goldDark,
  ...bronzeDark
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
export {
  colorsDark,
  colorsWhite,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
};
