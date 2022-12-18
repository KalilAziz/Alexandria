var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/SectionPanel.tsx
import PanelManager, { Panel } from "react-panel-system";

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";

// ../../node_modules/@radix-ui/colors/index.mjs
var amber$1 = {
  amber1: "hsl(36, 100%, 6.1%)",
  amber2: "hsl(35, 100%, 7.6%)",
  amber3: "hsl(32, 100%, 10.2%)",
  amber4: "hsl(32, 100%, 12.4%)",
  amber5: "hsl(33, 100%, 14.6%)",
  amber6: "hsl(35, 100%, 17.1%)",
  amber7: "hsl(35, 91.0%, 21.6%)",
  amber8: "hsl(36, 100%, 25.5%)",
  amber9: "hsl(39, 100%, 57.0%)",
  amber10: "hsl(43, 100%, 64.0%)",
  amber11: "hsl(39, 90.0%, 49.8%)",
  amber12: "hsl(39, 97.0%, 93.2%)"
};
var blue$1 = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};
var bronze$1 = {
  bronze1: "hsl(17, 10.0%, 8.8%)",
  bronze2: "hsl(15, 14.8%, 10.6%)",
  bronze3: "hsl(15, 16.3%, 14.3%)",
  bronze4: "hsl(16, 17.1%, 17.2%)",
  bronze5: "hsl(16, 17.6%, 19.6%)",
  bronze6: "hsl(16, 18.1%, 22.9%)",
  bronze7: "hsl(17, 18.8%, 28.8%)",
  bronze8: "hsl(17, 19.6%, 38.0%)",
  bronze9: "hsl(17, 20.0%, 54.0%)",
  bronze10: "hsl(18, 24.0%, 59.0%)",
  bronze11: "hsl(18, 35.0%, 68.5%)",
  bronze12: "hsl(18, 57.0%, 94.1%)"
};
var brown$1 = {
  brown1: "hsl(22, 15.0%, 8.7%)",
  brown2: "hsl(20, 28.3%, 10.4%)",
  brown3: "hsl(20, 28.0%, 14.0%)",
  brown4: "hsl(21, 28.4%, 16.5%)",
  brown5: "hsl(22, 28.7%, 18.9%)",
  brown6: "hsl(23, 29.0%, 22.3%)",
  brown7: "hsl(25, 29.5%, 27.8%)",
  brown8: "hsl(27, 30.1%, 35.9%)",
  brown9: "hsl(28, 34.0%, 51.0%)",
  brown10: "hsl(28, 41.4%, 55.8%)",
  brown11: "hsl(28, 60.0%, 64.5%)",
  brown12: "hsl(30, 67.0%, 94.0%)"
};
var crimson$1 = {
  crimson1: "hsl(335, 20.0%, 9.6%)",
  crimson2: "hsl(335, 32.2%, 11.6%)",
  crimson3: "hsl(335, 42.5%, 16.5%)",
  crimson4: "hsl(335, 47.2%, 19.3%)",
  crimson5: "hsl(335, 50.9%, 21.8%)",
  crimson6: "hsl(335, 55.7%, 25.3%)",
  crimson7: "hsl(336, 62.9%, 30.8%)",
  crimson8: "hsl(336, 74.9%, 39.0%)",
  crimson9: "hsl(336, 80.0%, 57.8%)",
  crimson10: "hsl(339, 84.1%, 62.6%)",
  crimson11: "hsl(341, 90.0%, 67.3%)",
  crimson12: "hsl(332, 87.0%, 96.0%)"
};
var cyan$1 = {
  cyan1: "hsl(192, 60.0%, 7.2%)",
  cyan2: "hsl(192, 71.4%, 8.2%)",
  cyan3: "hsl(192, 75.9%, 10.8%)",
  cyan4: "hsl(192, 79.3%, 12.8%)",
  cyan5: "hsl(192, 82.5%, 14.6%)",
  cyan6: "hsl(192, 86.6%, 16.9%)",
  cyan7: "hsl(192, 92.6%, 20.1%)",
  cyan8: "hsl(192, 100%, 24.5%)",
  cyan9: "hsl(190, 95.0%, 39.0%)",
  cyan10: "hsl(188, 100%, 40.0%)",
  cyan11: "hsl(186, 100%, 42.2%)",
  cyan12: "hsl(185, 73.0%, 93.2%)"
};
var gold$1 = {
  gold1: "hsl(44, 9.0%, 8.3%)",
  gold2: "hsl(43, 14.3%, 9.6%)",
  gold3: "hsl(42, 15.5%, 13.0%)",
  gold4: "hsl(41, 16.4%, 15.6%)",
  gold5: "hsl(41, 16.9%, 17.8%)",
  gold6: "hsl(40, 17.6%, 20.8%)",
  gold7: "hsl(38, 18.5%, 26.4%)",
  gold8: "hsl(36, 19.6%, 35.1%)",
  gold9: "hsl(36, 20.0%, 49.5%)",
  gold10: "hsl(36, 22.3%, 54.5%)",
  gold11: "hsl(35, 30.0%, 64.0%)",
  gold12: "hsl(49, 52.0%, 93.8%)"
};
var grass$1 = {
  grass1: "hsl(146, 30.0%, 7.4%)",
  grass2: "hsl(136, 33.3%, 8.8%)",
  grass3: "hsl(137, 36.0%, 11.4%)",
  grass4: "hsl(137, 37.6%, 13.7%)",
  grass5: "hsl(136, 38.7%, 16.0%)",
  grass6: "hsl(135, 39.6%, 19.1%)",
  grass7: "hsl(134, 40.3%, 23.8%)",
  grass8: "hsl(131, 40.1%, 30.8%)",
  grass9: "hsl(131, 41.0%, 46.5%)",
  grass10: "hsl(131, 39.0%, 52.1%)",
  grass11: "hsl(131, 43.0%, 57.2%)",
  grass12: "hsl(137, 72.0%, 94.0%)"
};
var gray$1 = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};
var green$1 = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};
var indigo$1 = {
  indigo1: "hsl(229, 24.0%, 10.0%)",
  indigo2: "hsl(230, 36.4%, 12.9%)",
  indigo3: "hsl(228, 43.3%, 17.5%)",
  indigo4: "hsl(227, 47.2%, 21.0%)",
  indigo5: "hsl(227, 50.0%, 24.1%)",
  indigo6: "hsl(226, 52.9%, 28.2%)",
  indigo7: "hsl(226, 56.0%, 34.5%)",
  indigo8: "hsl(226, 58.2%, 44.1%)",
  indigo9: "hsl(226, 70.0%, 55.5%)",
  indigo10: "hsl(227, 75.2%, 61.6%)",
  indigo11: "hsl(228, 100%, 75.9%)",
  indigo12: "hsl(226, 83.0%, 96.3%)"
};
var lime$1 = {
  lime1: "hsl(75, 55.0%, 6.0%)",
  lime2: "hsl(74, 56.8%, 7.3%)",
  lime3: "hsl(78, 50.2%, 9.9%)",
  lime4: "hsl(79, 50.3%, 12.1%)",
  lime5: "hsl(79, 52.6%, 14.2%)",
  lime6: "hsl(78, 55.7%, 16.7%)",
  lime7: "hsl(77, 59.7%, 20.1%)",
  lime8: "hsl(75, 64.8%, 24.5%)",
  lime9: "hsl(81, 67.0%, 50.0%)",
  lime10: "hsl(75, 85.0%, 60.0%)",
  lime11: "hsl(81, 70.0%, 43.8%)",
  lime12: "hsl(84, 79.0%, 92.6%)"
};
var mint$1 = {
  mint1: "hsl(173, 50.0%, 6.6%)",
  mint2: "hsl(176, 73.0%, 7.3%)",
  mint3: "hsl(175, 79.3%, 8.9%)",
  mint4: "hsl(174, 84.8%, 10.3%)",
  mint5: "hsl(174, 90.2%, 11.9%)",
  mint6: "hsl(173, 96.0%, 13.8%)",
  mint7: "hsl(172, 100%, 16.8%)",
  mint8: "hsl(170, 100%, 21.4%)",
  mint9: "hsl(167, 65.0%, 66.0%)",
  mint10: "hsl(163, 80.0%, 77.0%)",
  mint11: "hsl(167, 70.0%, 48.0%)",
  mint12: "hsl(165, 80.0%, 94.8%)"
};
var olive$1 = {
  olive1: "hsl(110, 5.0%, 8.6%)",
  olive2: "hsl(105, 7.4%, 10.6%)",
  olive3: "hsl(106, 6.4%, 13.1%)",
  olive4: "hsl(106, 5.8%, 15.3%)",
  olive5: "hsl(107, 5.3%, 17.4%)",
  olive6: "hsl(107, 4.9%, 19.9%)",
  olive7: "hsl(108, 4.4%, 23.6%)",
  olive8: "hsl(110, 3.8%, 30.6%)",
  olive9: "hsl(110, 6.0%, 42.5%)",
  olive10: "hsl(111, 4.8%, 48.2%)",
  olive11: "hsl(110, 5.0%, 61.8%)",
  olive12: "hsl(110, 6.0%, 93.0%)"
};
var orange$1 = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};
var pink$1 = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};
var plum$1 = {
  plum1: "hsl(301, 20.0%, 9.4%)",
  plum2: "hsl(300, 29.8%, 11.2%)",
  plum3: "hsl(298, 34.4%, 15.3%)",
  plum4: "hsl(297, 36.8%, 18.3%)",
  plum5: "hsl(296, 38.5%, 21.1%)",
  plum6: "hsl(295, 40.4%, 24.7%)",
  plum7: "hsl(294, 42.7%, 30.6%)",
  plum8: "hsl(292, 45.1%, 40.0%)",
  plum9: "hsl(292, 45.0%, 51.0%)",
  plum10: "hsl(295, 50.0%, 55.4%)",
  plum11: "hsl(300, 60.0%, 62.0%)",
  plum12: "hsl(296, 74.0%, 95.7%)"
};
var purple$1 = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};
var mauve$1 = {
  mauve1: "hsl(246, 6.0%, 9.0%)",
  mauve2: "hsl(240, 5.1%, 11.6%)",
  mauve3: "hsl(241, 5.0%, 14.3%)",
  mauve4: "hsl(242, 4.9%, 16.5%)",
  mauve5: "hsl(243, 4.9%, 18.8%)",
  mauve6: "hsl(244, 4.9%, 21.5%)",
  mauve7: "hsl(245, 4.9%, 25.4%)",
  mauve8: "hsl(247, 4.8%, 32.5%)",
  mauve9: "hsl(252, 4.0%, 45.2%)",
  mauve10: "hsl(247, 3.4%, 50.7%)",
  mauve11: "hsl(253, 4.0%, 63.7%)",
  mauve12: "hsl(256, 6.0%, 93.2%)"
};
var red$1 = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};
var sage$1 = {
  sage1: "hsl(155, 7.0%, 8.4%)",
  sage2: "hsl(150, 7.4%, 10.6%)",
  sage3: "hsl(150, 6.7%, 13.1%)",
  sage4: "hsl(150, 6.4%, 15.3%)",
  sage5: "hsl(150, 6.1%, 17.4%)",
  sage6: "hsl(150, 5.8%, 19.9%)",
  sage7: "hsl(150, 5.5%, 23.6%)",
  sage8: "hsl(150, 5.1%, 30.6%)",
  sage9: "hsl(155, 6.0%, 42.5%)",
  sage10: "hsl(153, 4.8%, 48.2%)",
  sage11: "hsl(155, 5.0%, 61.8%)",
  sage12: "hsl(155, 6.0%, 93.0%)"
};
var sand$1 = {
  sand1: "hsl(61, 2.0%, 8.3%)",
  sand2: "hsl(60, 3.7%, 10.6%)",
  sand3: "hsl(58, 3.7%, 13.1%)",
  sand4: "hsl(57, 3.6%, 15.3%)",
  sand5: "hsl(56, 3.7%, 17.4%)",
  sand6: "hsl(55, 3.7%, 19.9%)",
  sand7: "hsl(53, 3.7%, 23.6%)",
  sand8: "hsl(50, 3.8%, 30.6%)",
  sand9: "hsl(50, 4.0%, 42.7%)",
  sand10: "hsl(52, 3.1%, 48.3%)",
  sand11: "hsl(50, 4.0%, 61.8%)",
  sand12: "hsl(56, 4.0%, 92.8%)"
};
var sky$1 = {
  sky1: "hsl(205, 45.0%, 8.6%)",
  sky2: "hsl(202, 71.4%, 9.6%)",
  sky3: "hsl(201, 74.6%, 12.2%)",
  sky4: "hsl(201, 77.4%, 14.4%)",
  sky5: "hsl(200, 80.3%, 16.5%)",
  sky6: "hsl(200, 84.1%, 18.9%)",
  sky7: "hsl(199, 90.2%, 22.1%)",
  sky8: "hsl(198, 100%, 26.1%)",
  sky9: "hsl(193, 98.0%, 70.0%)",
  sky10: "hsl(192, 100%, 77.0%)",
  sky11: "hsl(192, 85.0%, 55.8%)",
  sky12: "hsl(198, 98.0%, 95.8%)"
};
var slate$1 = {
  slate1: "hsl(200, 7.0%, 8.8%)",
  slate2: "hsl(195, 7.1%, 11.0%)",
  slate3: "hsl(197, 6.8%, 13.6%)",
  slate4: "hsl(198, 6.6%, 15.8%)",
  slate5: "hsl(199, 6.4%, 17.9%)",
  slate6: "hsl(201, 6.2%, 20.5%)",
  slate7: "hsl(203, 6.0%, 24.3%)",
  slate8: "hsl(207, 5.6%, 31.6%)",
  slate9: "hsl(206, 6.0%, 43.9%)",
  slate10: "hsl(206, 5.2%, 49.5%)",
  slate11: "hsl(206, 6.0%, 63.0%)",
  slate12: "hsl(210, 6.0%, 93.0%)"
};
var teal$1 = {
  teal1: "hsl(168, 48.0%, 6.5%)",
  teal2: "hsl(169, 77.8%, 7.1%)",
  teal3: "hsl(170, 76.1%, 9.2%)",
  teal4: "hsl(171, 75.8%, 11.0%)",
  teal5: "hsl(171, 75.7%, 12.8%)",
  teal6: "hsl(172, 75.8%, 15.1%)",
  teal7: "hsl(172, 76.7%, 18.6%)",
  teal8: "hsl(173, 80.2%, 23.7%)",
  teal9: "hsl(173, 80.0%, 36.0%)",
  teal10: "hsl(174, 83.9%, 38.2%)",
  teal11: "hsl(174, 90.0%, 40.7%)",
  teal12: "hsl(166, 73.0%, 93.1%)"
};
var tomato$1 = {
  tomato1: "hsl(10, 23.0%, 9.4%)",
  tomato2: "hsl(9, 44.8%, 11.4%)",
  tomato3: "hsl(8, 52.0%, 15.3%)",
  tomato4: "hsl(7, 56.3%, 18.0%)",
  tomato5: "hsl(7, 60.1%, 20.6%)",
  tomato6: "hsl(8, 64.8%, 24.0%)",
  tomato7: "hsl(8, 71.2%, 29.1%)",
  tomato8: "hsl(10, 80.2%, 35.7%)",
  tomato9: "hsl(10, 78.0%, 54.0%)",
  tomato10: "hsl(10, 81.7%, 59.0%)",
  tomato11: "hsl(10, 85.0%, 62.8%)",
  tomato12: "hsl(10, 89.0%, 96.0%)"
};
var violet$1 = {
  violet1: "hsl(250, 20.0%, 10.2%)",
  violet2: "hsl(255, 30.3%, 12.9%)",
  violet3: "hsl(253, 37.0%, 18.4%)",
  violet4: "hsl(252, 40.1%, 22.5%)",
  violet5: "hsl(252, 42.2%, 26.2%)",
  violet6: "hsl(251, 44.3%, 31.1%)",
  violet7: "hsl(250, 46.8%, 38.9%)",
  violet8: "hsl(250, 51.8%, 51.2%)",
  violet9: "hsl(252, 56.0%, 57.5%)",
  violet10: "hsl(251, 63.2%, 63.2%)",
  violet11: "hsl(250, 95.0%, 76.8%)",
  violet12: "hsl(252, 87.0%, 96.4%)"
};
var yellow$1 = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};
var amber = {
  amber1: "hsl(39, 70.0%, 99.0%)",
  amber2: "hsl(40, 100%, 96.5%)",
  amber3: "hsl(44, 100%, 91.7%)",
  amber4: "hsl(43, 100%, 86.8%)",
  amber5: "hsl(42, 100%, 81.8%)",
  amber6: "hsl(38, 99.7%, 76.3%)",
  amber7: "hsl(36, 86.1%, 67.1%)",
  amber8: "hsl(35, 85.2%, 55.1%)",
  amber9: "hsl(39, 100%, 57.0%)",
  amber10: "hsl(35, 100%, 55.5%)",
  amber11: "hsl(30, 100%, 34.0%)",
  amber12: "hsl(20, 80.0%, 17.0%)"
};
var blue = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};
var bronze = {
  bronze1: "hsl(15, 30.0%, 99.1%)",
  bronze2: "hsl(17, 63.6%, 97.8%)",
  bronze3: "hsl(17, 42.1%, 95.2%)",
  bronze4: "hsl(17, 35.2%, 92.1%)",
  bronze5: "hsl(17, 31.5%, 88.2%)",
  bronze6: "hsl(17, 29.0%, 83.0%)",
  bronze7: "hsl(17, 26.9%, 75.6%)",
  bronze8: "hsl(17, 25.1%, 66.5%)",
  bronze9: "hsl(17, 20.0%, 54.0%)",
  bronze10: "hsl(17, 18.1%, 50.1%)",
  bronze11: "hsl(15, 20.0%, 43.1%)",
  bronze12: "hsl(12, 22.0%, 21.5%)"
};
var brown = {
  brown1: "hsl(30, 40.0%, 99.1%)",
  brown2: "hsl(30, 50.0%, 97.6%)",
  brown3: "hsl(30, 52.5%, 94.6%)",
  brown4: "hsl(30, 53.0%, 91.2%)",
  brown5: "hsl(29, 52.9%, 86.8%)",
  brown6: "hsl(29, 52.5%, 80.9%)",
  brown7: "hsl(29, 51.5%, 72.8%)",
  brown8: "hsl(28, 50.0%, 63.1%)",
  brown9: "hsl(28, 34.0%, 51.0%)",
  brown10: "hsl(27, 31.8%, 47.6%)",
  brown11: "hsl(25, 30.0%, 41.0%)",
  brown12: "hsl(20, 30.0%, 19.0%)"
};
var crimson = {
  crimson1: "hsl(332, 100%, 99.4%)",
  crimson2: "hsl(330, 100%, 98.4%)",
  crimson3: "hsl(331, 85.6%, 96.6%)",
  crimson4: "hsl(331, 78.1%, 94.2%)",
  crimson5: "hsl(332, 72.1%, 91.1%)",
  crimson6: "hsl(333, 67.0%, 86.7%)",
  crimson7: "hsl(335, 63.5%, 80.4%)",
  crimson8: "hsl(336, 62.3%, 72.9%)",
  crimson9: "hsl(336, 80.0%, 57.8%)",
  crimson10: "hsl(336, 73.7%, 53.5%)",
  crimson11: "hsl(336, 75.0%, 47.2%)",
  crimson12: "hsl(340, 65.0%, 14.5%)"
};
var cyan = {
  cyan1: "hsl(185, 60.0%, 98.7%)",
  cyan2: "hsl(185, 73.3%, 97.1%)",
  cyan3: "hsl(186, 70.2%, 94.4%)",
  cyan4: "hsl(186, 63.8%, 90.6%)",
  cyan5: "hsl(187, 58.3%, 85.4%)",
  cyan6: "hsl(188, 54.6%, 78.4%)",
  cyan7: "hsl(189, 53.7%, 68.7%)",
  cyan8: "hsl(189, 60.3%, 52.5%)",
  cyan9: "hsl(190, 95.0%, 39.0%)",
  cyan10: "hsl(191, 91.2%, 36.8%)",
  cyan11: "hsl(192, 85.0%, 31.0%)",
  cyan12: "hsl(192, 88.0%, 12.5%)"
};
var gold = {
  gold1: "hsl(50, 20.0%, 99.1%)",
  gold2: "hsl(47, 52.9%, 96.7%)",
  gold3: "hsl(46, 38.2%, 93.7%)",
  gold4: "hsl(44, 32.7%, 90.1%)",
  gold5: "hsl(43, 29.9%, 85.7%)",
  gold6: "hsl(41, 28.3%, 79.8%)",
  gold7: "hsl(39, 27.6%, 71.9%)",
  gold8: "hsl(36, 27.2%, 61.8%)",
  gold9: "hsl(36, 20.0%, 49.5%)",
  gold10: "hsl(36, 19.8%, 45.7%)",
  gold11: "hsl(36, 20.0%, 39.0%)",
  gold12: "hsl(36, 16.0%, 20.0%)"
};
var grass = {
  grass1: "hsl(116, 50.0%, 98.9%)",
  grass2: "hsl(120, 60.0%, 97.1%)",
  grass3: "hsl(120, 53.6%, 94.8%)",
  grass4: "hsl(121, 47.5%, 91.4%)",
  grass5: "hsl(122, 42.6%, 86.5%)",
  grass6: "hsl(124, 39.0%, 79.7%)",
  grass7: "hsl(126, 37.1%, 70.2%)",
  grass8: "hsl(131, 38.1%, 56.3%)",
  grass9: "hsl(131, 41.0%, 46.5%)",
  grass10: "hsl(132, 43.1%, 42.2%)",
  grass11: "hsl(133, 50.0%, 32.5%)",
  grass12: "hsl(130, 30.0%, 14.9%)"
};
var gray = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};
var green = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};
var indigo = {
  indigo1: "hsl(225, 60.0%, 99.4%)",
  indigo2: "hsl(223, 100%, 98.6%)",
  indigo3: "hsl(223, 98.4%, 97.1%)",
  indigo4: "hsl(223, 92.9%, 95.0%)",
  indigo5: "hsl(224, 87.1%, 92.0%)",
  indigo6: "hsl(224, 81.9%, 87.8%)",
  indigo7: "hsl(225, 77.4%, 82.1%)",
  indigo8: "hsl(226, 75.4%, 74.5%)",
  indigo9: "hsl(226, 70.0%, 55.5%)",
  indigo10: "hsl(226, 58.6%, 51.3%)",
  indigo11: "hsl(226, 55.0%, 45.0%)",
  indigo12: "hsl(226, 62.0%, 17.0%)"
};
var lime = {
  lime1: "hsl(85, 50.0%, 98.7%)",
  lime2: "hsl(85, 66.7%, 96.5%)",
  lime3: "hsl(85, 76.0%, 92.3%)",
  lime4: "hsl(84, 75.3%, 87.5%)",
  lime5: "hsl(84, 71.5%, 81.9%)",
  lime6: "hsl(82, 65.0%, 74.6%)",
  lime7: "hsl(79, 53.2%, 61.8%)",
  lime8: "hsl(76, 61.7%, 45.1%)",
  lime9: "hsl(81, 67.0%, 50.0%)",
  lime10: "hsl(80, 68.3%, 46.9%)",
  lime11: "hsl(75, 80.0%, 26.0%)",
  lime12: "hsl(78, 70.0%, 11.5%)"
};
var mint = {
  mint1: "hsl(165, 80.0%, 98.8%)",
  mint2: "hsl(164, 88.2%, 96.7%)",
  mint3: "hsl(164, 76.6%, 93.3%)",
  mint4: "hsl(165, 68.8%, 89.5%)",
  mint5: "hsl(165, 60.6%, 84.5%)",
  mint6: "hsl(165, 53.5%, 76.9%)",
  mint7: "hsl(166, 50.7%, 66.1%)",
  mint8: "hsl(168, 52.8%, 51.0%)",
  mint9: "hsl(167, 65.0%, 66.0%)",
  mint10: "hsl(167, 59.3%, 63.1%)",
  mint11: "hsl(172, 72.0%, 28.5%)",
  mint12: "hsl(172, 70.0%, 12.0%)"
};
var olive = {
  olive1: "hsl(110, 20.0%, 99.0%)",
  olive2: "hsl(120, 16.7%, 97.6%)",
  olive3: "hsl(119, 10.1%, 95.2%)",
  olive4: "hsl(118, 8.1%, 93.0%)",
  olive5: "hsl(117, 7.1%, 90.8%)",
  olive6: "hsl(115, 6.4%, 88.5%)",
  olive7: "hsl(114, 5.9%, 85.4%)",
  olive8: "hsl(110, 5.2%, 77.3%)",
  olive9: "hsl(110, 3.5%, 55.5%)",
  olive10: "hsl(111, 2.8%, 51.7%)",
  olive11: "hsl(110, 3.0%, 43.0%)",
  olive12: "hsl(110, 25.0%, 9.5%)"
};
var orange = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};
var pink = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};
var plum = {
  plum1: "hsl(292, 90.0%, 99.4%)",
  plum2: "hsl(300, 100%, 98.6%)",
  plum3: "hsl(299, 71.2%, 96.4%)",
  plum4: "hsl(299, 62.0%, 93.8%)",
  plum5: "hsl(298, 56.1%, 90.5%)",
  plum6: "hsl(296, 51.3%, 85.8%)",
  plum7: "hsl(295, 48.2%, 78.9%)",
  plum8: "hsl(292, 47.7%, 70.8%)",
  plum9: "hsl(292, 45.0%, 51.0%)",
  plum10: "hsl(292, 50.2%, 46.9%)",
  plum11: "hsl(292, 60.0%, 42.5%)",
  plum12: "hsl(291, 66.0%, 14.0%)"
};
var purple = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};
var mauve = {
  mauve1: "hsl(300, 20.0%, 99.0%)",
  mauve2: "hsl(300, 7.7%, 97.5%)",
  mauve3: "hsl(294, 5.5%, 95.3%)",
  mauve4: "hsl(289, 4.7%, 93.3%)",
  mauve5: "hsl(283, 4.4%, 91.3%)",
  mauve6: "hsl(278, 4.1%, 89.1%)",
  mauve7: "hsl(271, 3.9%, 86.3%)",
  mauve8: "hsl(255, 3.7%, 78.8%)",
  mauve9: "hsl(252, 4.0%, 57.3%)",
  mauve10: "hsl(253, 3.5%, 53.5%)",
  mauve11: "hsl(252, 4.0%, 44.8%)",
  mauve12: "hsl(260, 25.0%, 11.0%)"
};
var red = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};
var sage = {
  sage1: "hsl(155, 30.0%, 98.8%)",
  sage2: "hsl(150, 16.7%, 97.6%)",
  sage3: "hsl(151, 10.6%, 95.2%)",
  sage4: "hsl(151, 8.8%, 93.0%)",
  sage5: "hsl(151, 7.8%, 90.8%)",
  sage6: "hsl(152, 7.2%, 88.4%)",
  sage7: "hsl(153, 6.7%, 85.3%)",
  sage8: "hsl(154, 6.1%, 77.5%)",
  sage9: "hsl(155, 3.5%, 55.5%)",
  sage10: "hsl(154, 2.8%, 51.7%)",
  sage11: "hsl(155, 3.0%, 43.0%)",
  sage12: "hsl(155, 24.0%, 9.0%)"
};
var sand = {
  sand1: "hsl(50, 20.0%, 99.0%)",
  sand2: "hsl(60, 7.7%, 97.5%)",
  sand3: "hsl(59, 6.5%, 95.1%)",
  sand4: "hsl(58, 6.1%, 92.9%)",
  sand5: "hsl(57, 6.0%, 90.7%)",
  sand6: "hsl(56, 5.9%, 88.4%)",
  sand7: "hsl(55, 5.9%, 85.2%)",
  sand8: "hsl(51, 6.0%, 77.1%)",
  sand9: "hsl(50, 2.0%, 55.7%)",
  sand10: "hsl(55, 1.7%, 51.9%)",
  sand11: "hsl(50, 2.0%, 43.1%)",
  sand12: "hsl(50, 6.0%, 10.0%)"
};
var sky = {
  sky1: "hsl(193, 100%, 98.8%)",
  sky2: "hsl(193, 100%, 97.3%)",
  sky3: "hsl(193, 99.0%, 94.7%)",
  sky4: "hsl(193, 91.4%, 91.4%)",
  sky5: "hsl(194, 82.0%, 86.6%)",
  sky6: "hsl(194, 74.1%, 79.5%)",
  sky7: "hsl(194, 72.3%, 69.6%)",
  sky8: "hsl(193, 77.9%, 53.9%)",
  sky9: "hsl(193, 98.0%, 70.0%)",
  sky10: "hsl(193, 87.0%, 66.5%)",
  sky11: "hsl(195, 100%, 31.5%)",
  sky12: "hsl(195, 100%, 13.0%)"
};
var slate = {
  slate1: "hsl(206, 30.0%, 98.8%)",
  slate2: "hsl(210, 16.7%, 97.6%)",
  slate3: "hsl(209, 13.3%, 95.3%)",
  slate4: "hsl(209, 12.2%, 93.2%)",
  slate5: "hsl(208, 11.7%, 91.1%)",
  slate6: "hsl(208, 11.3%, 88.9%)",
  slate7: "hsl(207, 11.1%, 85.9%)",
  slate8: "hsl(205, 10.7%, 78.0%)",
  slate9: "hsl(206, 6.0%, 56.1%)",
  slate10: "hsl(206, 5.8%, 52.3%)",
  slate11: "hsl(206, 6.0%, 43.5%)",
  slate12: "hsl(206, 24.0%, 9.0%)"
};
var teal = {
  teal1: "hsl(165, 60.0%, 98.8%)",
  teal2: "hsl(169, 64.7%, 96.7%)",
  teal3: "hsl(169, 59.8%, 94.0%)",
  teal4: "hsl(169, 53.1%, 90.2%)",
  teal5: "hsl(170, 47.1%, 85.0%)",
  teal6: "hsl(170, 42.6%, 77.9%)",
  teal7: "hsl(170, 39.9%, 68.1%)",
  teal8: "hsl(172, 42.1%, 52.5%)",
  teal9: "hsl(173, 80.0%, 36.0%)",
  teal10: "hsl(173, 83.4%, 32.5%)",
  teal11: "hsl(174, 90.0%, 25.2%)",
  teal12: "hsl(170, 50.0%, 12.5%)"
};
var tomato = {
  tomato1: "hsl(10, 100%, 99.4%)",
  tomato2: "hsl(8, 100%, 98.4%)",
  tomato3: "hsl(8, 100%, 96.6%)",
  tomato4: "hsl(8, 100%, 94.3%)",
  tomato5: "hsl(8, 92.8%, 91.0%)",
  tomato6: "hsl(9, 84.7%, 86.3%)",
  tomato7: "hsl(10, 77.3%, 79.5%)",
  tomato8: "hsl(10, 71.6%, 71.0%)",
  tomato9: "hsl(10, 78.0%, 54.0%)",
  tomato10: "hsl(10, 71.5%, 50.0%)",
  tomato11: "hsl(10, 82.0%, 43.5%)",
  tomato12: "hsl(10, 50.0%, 13.5%)"
};
var violet = {
  violet1: "hsl(255, 65.0%, 99.4%)",
  violet2: "hsl(252, 100%, 99.0%)",
  violet3: "hsl(252, 96.9%, 97.4%)",
  violet4: "hsl(252, 91.5%, 95.5%)",
  violet5: "hsl(252, 85.1%, 93.0%)",
  violet6: "hsl(252, 77.8%, 89.4%)",
  violet7: "hsl(252, 71.0%, 83.7%)",
  violet8: "hsl(252, 68.6%, 76.3%)",
  violet9: "hsl(252, 56.0%, 57.5%)",
  violet10: "hsl(251, 48.1%, 53.5%)",
  violet11: "hsl(250, 43.0%, 48.0%)",
  violet12: "hsl(254, 60.0%, 18.5%)"
};
var yellow = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};
var blackA = {
  blackA1: "hsla(0, 0%, 0%, 0.012)",
  blackA2: "hsla(0, 0%, 0%, 0.027)",
  blackA3: "hsla(0, 0%, 0%, 0.047)",
  blackA4: "hsla(0, 0%, 0%, 0.071)",
  blackA5: "hsla(0, 0%, 0%, 0.090)",
  blackA6: "hsla(0, 0%, 0%, 0.114)",
  blackA7: "hsla(0, 0%, 0%, 0.141)",
  blackA8: "hsla(0, 0%, 0%, 0.220)",
  blackA9: "hsla(0, 0%, 0%, 0.439)",
  blackA10: "hsla(0, 0%, 0%, 0.478)",
  blackA11: "hsla(0, 0%, 0%, 0.565)",
  blackA12: "hsla(0, 0%, 0%, 0.910)"
};
var whiteA = {
  whiteA1: "hsla(0, 0%, 100%, 0)",
  whiteA2: "hsla(0, 0%, 100%, 0.013)",
  whiteA3: "hsla(0, 0%, 100%, 0.034)",
  whiteA4: "hsla(0, 0%, 100%, 0.056)",
  whiteA5: "hsla(0, 0%, 100%, 0.086)",
  whiteA6: "hsla(0, 0%, 100%, 0.124)",
  whiteA7: "hsla(0, 0%, 100%, 0.176)",
  whiteA8: "hsla(0, 0%, 100%, 0.249)",
  whiteA9: "hsla(0, 0%, 100%, 0.386)",
  whiteA10: "hsla(0, 0%, 100%, 0.446)",
  whiteA11: "hsla(0, 0%, 100%, 0.592)",
  whiteA12: "hsla(0, 0%, 100%, 0.923)"
};

// ../tokens/dist/index.mjs
var colorsWhite = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, tomato), red), crimson), pink), plum), purple), violet), indigo), blue), cyan), teal), green), grass), orange), brown), sky), mint), lime), yellow), amber), gray), mauve), slate), sage), olive), sand), gold), bronze), blackA), whiteA);
var colorsDark = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, tomato$1), red$1), crimson$1), pink$1), plum$1), purple$1), violet$1), indigo$1), blue$1), cyan$1), teal$1), green$1), grass$1), orange$1), brown$1), sky$1), mint$1), lime$1), yellow$1), amber$1), gray$1), mauve$1), slate$1), sage$1), olive$1), sand$1), gold$1), bronze$1);
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
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
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
var fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "150%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme
} = createStitches({
  theme: {
    colors: colorsWhite,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  },
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "space",
    height: "space"
  }),
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)"
  }
});
var darkTheme = createTheme("dark-theme", {
  colors: colorsDark
});

// src/components/SectionPanel.tsx
import { jsx } from "react/jsx-runtime";
var Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  height: "90vh",
  flexGrow: 1,
  flexBasis: 1,
  "& > div": {
    display: "flex",
    border: "1px solid darkblue",
    height: "100%",
    width: "100%"
  },
  ".left-edge, .right-edge, .top-edge, .bottom-edge": {
    backgroundColor: "gray",
    margin: "auto"
  },
  ".left-edge": {
    height: "40px",
    width: "3px",
    borderRadius: " 0 4px 4px 0 "
  },
  ".right-edge": {
    height: "40px",
    width: "3px",
    borderRadius: " 4px 0 0 4px "
  },
  ".top-edge": {
    width: "40px",
    height: "3px",
    borderRadius: " 0 0 4px 4px "
  },
  ".bottom-edge": {
    width: "40px",
    height: "3px",
    borderRadius: "4px 4px 0 0 "
  }
});
var Root = (_a) => {
  var _b = _a, { children, height = 80 } = _b, props = __objRest(_b, ["children", "height"]);
  return /* @__PURE__ */ jsx(Container, { css: { height: `${height}vh` }, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    PanelManager,
    __spreadProps(__spreadValues({}, props), {
      leftEdgeClassName: "left-edge",
      rightEdgeClassName: "right-edge",
      topEdgeClassName: "top-edge",
      bottomEdgeClassName: "bottom-edge",
      children
    })
  ) }) });
};
Root.displayName = "Root";
var Item = styled("div", {
  display: "flex",
  flexGrow: 1,
  overflow: "hidden",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover"
  }
});
var Items = (_a) => {
  var _b = _a, { children, css: css2 } = _b, props = __objRest(_b, ["children", "css"]);
  return /* @__PURE__ */ jsx(Panel, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx(Item, { css: css2, children }) }));
};
var SectionPanel = {
  root: Root,
  items: Items
};

// src/components/Panel.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PanelTest = () => {
  return /* @__PURE__ */ jsx2("div", {});
};
export {
  PanelTest,
  SectionPanel
};
