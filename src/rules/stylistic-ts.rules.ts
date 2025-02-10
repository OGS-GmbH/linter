const STYLISTIC_TS_RULES: Record<string, unknown> = {
  "@stylistic/ts/block-spacing": [ "error", "always" ],
  "@stylistic/ts/brace-style": "error",
  "@stylistic/ts/comma-dangle": [ "error", "never" ],
  "@stylistic/ts/comma-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/ts/function-call-spacing": "error",
  "@stylistic/ts/indent": [ "error", 2 ],
  "@stylistic/ts/key-spacing": "error",
  "@stylistic/ts/keyword-spacing": "error",
  "@stylistic/ts/lines-around-comment": [ "error", {
    "beforeBlockComment": false
  } ],
  "@stylistic/ts/lines-between-class-members": "error",
  "@stylistic/ts/member-delimiter-style": [ "error", {
    "multiline": {
      "delimiter": "semi",
      "requireLast": true
    },
    "singleline": {
      "delimiter": "semi",
      "requireLast": true
    }
  } ],
  "@stylistic/ts/no-extra-parens": [ "error", "all", {
    "conditionalAssign": false,
    "returnAssign": false,
    "enforceForArrowConditionals": false
  } ],
  "@stylistic/ts/no-extra-semi": "error",
  "@stylistic/ts/object-curly-newline": [ "error", {
    "consistent": true
  } ],
  "@stylistic/ts/object-curly-spacing": [ "error", "always", {
    "arraysInObjects": true,
    "objectsInObjects": true
  } ],
  "@stylistic/ts/object-property-newline": [ "error", {
    "allowAllPropertiesOnSameLine": true
  } ],
  "@stylistic/ts/padding-line-between-statements": [ "error",
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
    { "blankLine": "always", "prev": "*", "next": "enum" },
    { "blankLine": "always", "prev": "enum", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "interface" },
    { "blankLine": "always", "prev": "interface", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "type" },
    { "blankLine": "always", "prev": "type", "next": "*" },
    { "blankLine": "always", "prev": "*", "next": "function-overload" },
    { "blankLine": "always", "prev": "function-overload", "next": "*" },
    { "blankLine": "never", "prev": "function-overload", "next": "function" },

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
  "@stylistic/ts/quote-props": [ "error", "as-needed", {
    "keywords": true,
    "unnecessary": true,
    "numbers": true
  } ],
  "@stylistic/ts/quotes": [ "error", "double", {
    "avoidEscape": false,
    "allowTemplateLiterals": true,
    "ignoreStringLiterals": true
  } ],
  "@stylistic/ts/semi": [ "error", "always" ],
  "@stylistic/ts/space-before-blocks": [ "error", "always" ],
  "@stylistic/ts/space-before-function-paren": "error",
  "@stylistic/ts/space-infix-ops": "error",
  "@stylistic/ts/type-annotation-spacing": [ "error", {
    "before": false,
    "after": true,
    "overrides": {
      "arrow": {
        "before": true,
        "after": true,
      }
    }
  } ]
};

export {
  STYLISTIC_TS_RULES
};

