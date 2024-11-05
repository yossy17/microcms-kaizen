// ==UserScript==
// @name                microCMS Kaizen
// @description         Enhance MicroCMS functionality and styling
// @version             0.9
// @author              Yos_sy
// @match               *://*.microcms.io/*
// @exclude             *://microcms.io/
// @exclude             *://blog.microcms.io/*
// @exclude             *://files.blog.microcms.io/*
// @exclude             *://document.microcms.io/*
// @exclude             *://status.microcms.io/*
// @exclude             *://templates.microcms.io/*
// @namespace           http://tampermonkey.net/
// @icon                https://www.google.com/s2/favicons?sz=64&domain=microcms.io
// @license             MIT
// @run-at              document-start
// @require             https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js
// @grant               GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Create a style element to override the CSS variables
  GM_addStyle(`
    :root {
      --color-bg-white: #464957; /* Main Bg */
      --color-bg-white-rgb: 70, 73, 87; /* Main Bg rgba */
      --color-bg-purple-light: #2d2f38; /* Secondary Bg ( e.g. Sidebar ) */
      --color-effect-blue: #383a46; /* Hover Bg */
      --color-bg-info: #383a46; /* Info Bg */
      --color-bg-caution: #383a46; /* Caution Bg */
      --color-bg-purple: #383a46;
      --color-bg-purple: #383a46; /* Repeat Add Button */
    
      --color-text-main: #e2e2dd; /* Main Text */
      --color-text-main-rgb: 226, 226, 221; /* Main Text rgba */
      --color-text-sub: #e8e8e4; /* Secondary Text ( e.g. Headline ) */
      --color-text-off: #eeeeeb; /* Off Text */
      --color-text-link: #f9f9f8; /* Link Text */
    
      --color-text-current: #eec968; /* Current Text */
      --color-bg-current: #383a46; /* Current Bg */
    
      --color-bg-disabled: #5a5a66; /* Disabled Bg */
    
      --color-bg-error: #da363233; /* Error Bg */
      --color-bg-success: #00921b33; /* Success Bg */
    
      --color-accent-purple: #c29523; /* Accent */
    
      --color-primary: #c29523; /* Accent */
    
      --color-text-codeblock: #abb2bf; /* Code Block Text */
      --color-bg-codeblock: #22272e; /* Code Block Bg */
    
      --color-scrollbar-track: #ecdcb2;
    
      --color-twitter: #1da1f2;
      /* --color-bg-caution: #faf6da; */
    }

    html {
      scrollbar-color: var(--color-accent-purple) var(--color-scrollbar-track) !important;
      background-color: var(--color-bg-white) !important;
    }

    /* --- */

    #richEditor-v2-editorWrapper,
    ._main_1ve44_21 {
      scrollbar-width: none !important;
    }

    ._thead_1r8jv_53 {
      background-color: transparent !important;
    }

    /* --- */

    path.recharts-rectangle,
    path.recharts-curve.recharts-area-area,
    path._asc_1ehid_18._on_1ehid_21,
    path._desc_1ehid_26._on_1ehid_21 {
      fill: var(--color-text-current) !important;
    }

    path.recharts-curve.recharts-area-curve {
      stroke: var(--color-primary);
    }

    i._typeButton_wckqw_420._active_wckqw_433 {
      fill: var(--color-text-current) !important;
    }

    tspan {
      fill: rgba(var(--color-text-main-rgb), 0.75) !important;
    }

    .recharts-default-tooltip {
      background-color: var(--color-bg-white) !important;
    }

    .recharts-tooltip-label {
      color: rgba(var(--color-text-main-rgb), 0.75) !important;
    }

    select,
    .recharts-tooltip-item {
      color: var(--color-text-main) !important;
    }

    a[data-testid="link-settings"] > i,
    button._trigger_1tmzz_6[aria-haspopup="dialog"]
      span.material-icons._small_1n56o_1,
    a._link_3s15a_1 > i,
    ._labelButton_1ypco_13 span.material-icons._small_1n56o_1,
    button._labelButton_1fhag_1 > i.material-icons {
      transition-duration: 100ms !important;
    }

    a[data-testid="link-settings"] > i:hover,
    button._trigger_1tmzz_6[aria-haspopup="dialog"]:hover
      span.material-icons._small_1n56o_1,
    a._link_3s15a_1:hover > i,
    ._labelButton_1ypco_13:hover span.material-icons._small_1n56o_1,
    button._labelButton_1fhag_1:hover > i.material-icons {
      transform: rotateZ(30deg) !important;
    }

    /* --- */



    /* --- */

    ul._lists_1miyw_85[data-testid="announcement-list"] *[style] {
      color: var(--color-text-main) !important;
      background-color: transparent !important;
    }

    /* --- */

    button._createServiceCard_102av_36,
    button._createApiCard_sdvuw_36 {
      background-color: transparent !important;
      border: 1px solid var(--color-border) !important;
    }

    button._createServiceCard_102av_36:hover,
    button._createApiCard_sdvuw_36:hover {
      border: 1px solid var(--color-accent-purple) !important;
    }

    ._code_d4vhq_178 > pre {
      color: var(--color-text-codeblock) !important;
      background: var(--color-bg-codeblock) !important;
    }

    ._button_1ru2j_1._x_1ru2j_31._outline_1ru2j_34 {
      color: var(--color-twitter) !important;
      border: 1px solid var(--color-twitter) !important;
    }

    ._sns_1miyw_78 > ._button_1ru2j_1._outline_1ru2j_34._x_1ru2j_31 > svg > path {
      d: path(
        "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
      ) !important;
      fill: var(--color-twitter) !important;
    }

    /* primary: '#eec968',
    secondary: '#c29523',
    tertiary: '#ecdcb2', */
  `);
})();
{
  /* <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesStatus" style="width: 16px;height: 16px;display: block;fill: #e8e8e4;flex-shrink: 0;"><path d="M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z"></path></svg> */
}
