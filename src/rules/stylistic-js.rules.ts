const STYLISTIC_JS_RULES: Record<string, unknown> = {
  "@stylistic/js/array-bracket-newline": [ "error", "consistent" ],
  "@stylistic/js/array-bracket-spacing": [ "error", "always", {
    "singleValue": true,
    "objectsInArrays": true,
    "arraysInArrays": true
  } ],
  "@stylistic/js/array-element-newline": [ "error", {
    "consistent": true,
    "multiline": true,
  } ],
  "@stylistic/js/arrow-parens": [ "error", "always" ],
  "@stylistic/js/arrow-spacing": [ "error", {
    "before": true,
    "after": true
  } ],
  "@stylistic/js/comma-style": [ "error", "last" ],
  "@stylistic/js/computed-property-spacing": [ "error", "always" ],
  "@stylistic/js/dot-location": [ "error", "property" ],
  "@stylistic/js/eol-last": [ "error", "always" ],
  "@stylistic/js/function-paren-newline": [ "error", "consistent" ],
  "@stylistic/js/generator-star-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/js/jsx-quotes": [ "error", "prefer-double" ],
  "@stylistic/js/line-comment-position": "error",
  "@stylistic/js/linebreak-style": "error",
  "@stylistic/js/multiline-comment-style": "error",
  "@stylistic/js/multiline-ternary": [ "error", "always-multiline" ],
  "@stylistic/js/new-parens": "error",
  "@stylistic/js/newline-per-chained-call": "error",
  "@stylistic/js/no-confusing-arrow": "error",
  "@stylistic/js/no-floating-decimal": "error",
  "@stylistic/js/no-mixed-spaces-and-tabs": "error",
  "@stylistic/js/no-multi-spaces": "error",
  "@stylistic/js/no-multiple-empty-lines": [ "error", {
    "max": 2,
    "maxEOF": 1,
    "maxBOF": 1
  } ],
  "@stylistic/js/no-tabs": "error",
  "@stylistic/js/no-trailing-spaces": "error",
  "@stylistic/js/no-whitespace-before-property": "error",
  "@stylistic/js/nonblock-statement-body-position": [ "error", "any" ],
  "@stylistic/js/one-var-declaration-per-line": "error",
  "@stylistic/js/operator-linebreak": [ "error", "before" ],
  "@stylistic/js/padded-blocks": [ "error", "never" ],
  "@stylistic/js/rest-spread-spacing": [ "error", "never" ],
  "@stylistic/js/semi-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/js/semi-style": "error",
  "@stylistic/js/space-in-parens": "error",
  "@stylistic/js/space-unary-ops": [ "error", {
    "words": true,
    "nonwords": false,
  } ],
  "@stylistic/js/spaced-comment": [ "error", "always", {
    "markers": [ "/" ],
    "block": {
      "balanced": true
    }
  } ],
  "@stylistic/js/switch-colon-spacing": [ "error", {
    "after": true,
    "before": false
  } ],
  "@stylistic/js/template-curly-spacing": [ "error", "always" ],
  "@stylistic/js/template-tag-spacing": "error",
  "@stylistic/js/wrap-iife": [ "error", "inside" ],
  "@stylistic/js/wrap-regex": "error",
  "@stylistic/js/yield-star-spacing": [ "error", "both" ]
}

const STYLISTIC_JS_RULES_TS_EXTENDED: Record<string, unknown> = {
  "@stylistic/js/block-spacing": [ "error", "always" ],
  "@stylistic/js/brace-style": "error",
  "@stylistic/js/comma-dangle": [ "error", "never" ],
  "@stylistic/js/comma-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/js/function-call-spacing": "error",
  "@stylistic/js/indent": [ "error", 2 ],
  "@stylistic/js/key-spacing": "error",
  "@stylistic/js/keyword-spacing": "error",
  "@stylistic/js/lines-around-comment": [ "error", {
    "beforeBlockComment": false
  } ],
  "@stylistic/js/lines-between-class-members": "error",
  "@stylistic/js/no-extra-parens": [ "error", "all", {
    "conditionalAssign": false,
    "returnAssign": false,
    "enforceForArrowConditionals": false
  } ],
  "@stylistic/js/no-extra-semi": "error",
  "@stylistic/js/object-curly-newline": [ "error", {
    "consistent": true
  } ],
  "@stylistic/js/object-curly-spacing": [ "error", "always", {
    "arraysInObjects": true,
    "objectsInObjects": true
  } ],
  "@stylistic/js/object-property-newline": [ "error", {
    "allowAllPropertiesOnSameLine": true
  } ],
  "@stylistic/js/padding-line-between-statements": [ "error",
    /*
     * block
    */
    { "blankLine": "always", "prev": "case", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "case" },
    { "blankLine": "never", "prev": "switch", "next": "case" },
    { "blankLine": "always", "prev": "class", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "class" },
    { "blankLine": "always", "prev": "do", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "do" },
    { "blankLine": "always", "prev": "for", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "for" },
    { "blankLine": "always", "prev": "function", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "function" },
    { "blankLine": "always", "prev": "if", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "if" },
    { "blankLine": "always", "prev": "iife", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "iife" },
    { "blankLine": "always", "prev": "switch", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "switch" },
    { "blankLine": "always", "prev": "throw", "next": "*" },
    { "blankLine": "always", "prev": "try", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "try" },
    { "blankLine": "always", "prev": "while", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "while" },

    /*
     * expression
    */
    { "blankLine": "never", "prev": "import", "next": "import" },
    { "blankLine": "always", "prev": "import", "next": "*" },
    { "blankLine": "always", "prev": "break", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "break" },
    { "blankLine": "always", "prev": "*", "next": "cjs-export" },
    { "blankLine": "never", "prev": "cjs-export", "next": "cjs-export" },
    { "blankLine": "always", "prev": "cjs-import", "next": "*" },
    { "blankLine": "never", "prev": "cjs-import", "next": "cjs-import" },
    { "blankLine": "always", "prev": "const", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "const" },
    { "blankLine": "never", "prev": "const", "next": "const" },
    { "blankLine": "always", "prev": "continue", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "continue" },
    { "blankLine": "always", "prev": "debugger", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "debugger" },
    { "blankLine": "always", "prev": "default", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "default" },
    { "blankLine": "always", "prev": "*", "next": "directive" },
    { "blankLine": "always", "prev": "directive", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "empty" },
    { "blankLine": "always", "prev": "empty", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "export" },
    { "blankLine": "always", "prev": "export", "next": "*" },
    { "blankLine": "never", "prev": "export", "next": "export" },
    { "blankLine": "always", "prev": "expression", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "expression" },
    { "blankLine": "never", "prev": "expression", "next": "expression" },
    { "blankLine": "always", "prev": "import", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "import" },
    { "blankLine": "never", "prev": "import", "next": "import" },
    { "blankLine": "always", "prev": "let", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "let" },
    { "blankLine": "never", "prev": "let", "next": "let" },
    { "blankLine": "always", "prev": "return", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "return" },
    { "blankLine": "always", "prev": "*", "next": "throw" }
  ],
  "@stylistic/js/quote-props": [ "error", "as-needed", {
    "keywords": true,
    "unnecessary": true,
    "numbers": true
  } ],
  "@stylistic/js/quotes": [ "error", "double", {
    "avoidEscape": false,
    "allowTemplateLiterals": true,
    "ignoreStringLiterals": true
  } ],
  "@stylistic/js/semi": [ "error", "always" ],
  "@stylistic/js/space-before-blocks": [ "error", "always" ],
  "@stylistic/js/space-before-function-paren": "error",
  "@stylistic/js/space-infix-ops": "error"
};

const getStylisticJsRules = (usageForTypescript?: boolean): Record<string, unknown> => usageForTypescript ? STYLISTIC_JS_RULES : { ...STYLISTIC_JS_RULES, ...STYLISTIC_JS_RULES_TS_EXTENDED };

export {
  STYLISTIC_JS_RULES,
  STYLISTIC_JS_RULES_TS_EXTENDED,
  getStylisticJsRules
};

