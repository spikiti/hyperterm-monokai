'use strict';
const backgroundColor = '#282828';
const foregroundColor = '#F8F8F0';

const colors = [
  backgroundColor,
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  '#49483E', // brown gray
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  foregroundColor
];

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: 'rgba(248, 248, 240, 0.5)',
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
      .tab_active:before {
        border-bottom-color: #E6DB74 !important;
      }
    `
  })
);
