"use strict";

const CATEGORY_COMMON = "Common";

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.js
module.exports = {
  bracketSpacing: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: true,
    description: "Print spaces between brackets.",
    oppositeDescription: "Do not print spaces between brackets.",
  },
  singleQuote: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: false,
    description: "Use single quotes instead of double quotes.",
  },
  proseWrap: {
    since: "1.8.2",
    category: CATEGORY_COMMON,
    type: "choice",
    default: [
      { since: "1.8.2", value: true },
      { since: "1.9.0", value: "preserve" },
    ],
    description: "How to wrap prose.",
    choices: [
      {
        since: "1.9.0",
        value: "always",
        description: "Wrap prose if it exceeds the print width.",
      },
      {
        since: "1.9.0",
        value: "never",
        description: "Do not wrap prose.",
      },
      {
        since: "1.9.0",
        value: "preserve",
        description: "Wrap prose as-is.",
      },
    ],
  },
  bracketSameLine: {
    since: "2.4.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: false,
    description:
      "Put > of opening tags on the last line instead of on a new line.",
  },
  singleAttributePerLine: {
    since: "2.6.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: false,
    description: "Enforce single attribute per line in HTML, Vue and JSX.",
  },
  alignColumns: {
    since: "2.6.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: true,
    description: "Align markdown table columns.",
  },
};
