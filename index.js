// Consts
const backgroundColor = '#111';
const foregroundColor = '#fff';
const borderColor = backgroundColor;
const darkerBlack = '#000';

// Colors
const colorRed = '#ff0000';
const colorBlack = backgroundColor;
const colorGreen = '#33ff00';
const colorYellow = '#ffff00';
const colorBlue = '#0066ff';
const colorMagenta = '#cc00ff';
const colorCyan = '#00ffff';
const colorWhite = '#d0d0d0';
const lightBlack = '#808080';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#0066ff';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

const colors = {
  black: colorBlack,
  red: colorRed,
  blue: colorBlue,
  green: colorGreen,
  yellow: colorYellow,
  magenta: colorMagenta,
  cyan: colorCyan,
  white: colorWhite,
  lightBlue: lightBlue,
  lightBlack: lightBlack,
  lightCyan: lightCyan,
  lightWhite: lightWhite,
  lightMagenta: lightMagenta,
  lightGreen: lightGreen,
  lightYellow: lightYellow,
  darkerBlack: darkerBlack
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: borderColor,
    cursorColor: lightYellow,
    fontSize: 14,
    cursorShape: 'BLOCK',
    colors,
    css: `
    ${config.css || ''}
    .terms_term x-row{
      height: 24px;
    }

    .tabs_list {
      background-color: ${darkerBlack} !important;
    }
    .tab_tab {
      background-color: #000 !important;
      background-color: ${darkerBlack} !important;
      border: 0 !important;
      border-right: 1px solid transparent !important;
      border-right: 1px solid transparent !important;
      border-left: 1px solid transparent !important;
    }
    .tab_active {
      background-color: ${backgroundColor} !important;
      height: calc(100% + 1px);
    }
    .tab_tab:last-child {
      border-right: 1px solid transparent !important;
    }
    .header_i1rech{
      top:0px !important;
    }
    .tabs_borderShim{
      border: none !important;
    }
    .tab_active::before {
      content: '';
      display: inline-block;
      top: 0px;
      width: auto;
      height: 5px;
      margin-left: 15px;
      position: relative;
      border-radius: 20px;
      background: #ffff00 !important;
      border-bottom: none !important;
    }
    .tab_text {
      float: right !important;
      border-color: transparent !important;
    }
    .text_12ra3t4 {
      width: 93% !important;
    }
    .tab_icon {
      background-color: rgba(255, 255, 255, .025);
      opacity: 1;
    }
  `
  })
};

// Development middleware for HMR
exports.middleware = () => (next) => (action) => {
  /* eslint-disable no-param-reassign, default-case */
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor;
      action.config.backgroundColor = backgroundColor;
      action.config.cursorColor = lightYellow;
      action.config.colors = colors;
  }
  next(action);
};
