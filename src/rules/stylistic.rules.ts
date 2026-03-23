/**
 * Stylistic (ts) preset rules for ESLint
 * @category Rules
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLISTIC_RULES: Record<string, unknown> = {
  "@stylistic/array-bracket-newline": [ "error", "consistent" ],
  "@stylistic/array-bracket-spacing": [ "error", "always", {
    "singleValue": true,
    "objectsInArrays": true,
    "arraysInArrays": true
  } ],
  "@stylistic/array-element-newline": [ "error", {
    "consistent": true,
    "multiline": true,
  } ],
  "@stylistic/arrow-parens": [ "error", "always" ],
  "@stylistic/arrow-spacing": [ "error", {
    "before": true,
    "after": true
  } ],
  "@stylistic/block-spacing": [ "error", "always" ],
  "@stylistic/brace-style": "error",
  "@stylistic/comma-dangle": [ "error", "never" ],
  "@stylistic/comma-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/comma-style": [ "error", "last" ],
  "@stylistic/computed-property-spacing": [ "error", "always" ],
  "@stylistic/curly-newline": [ "error", {
    "multiline": true,
    "consistent": true
  } ],
  "@stylistic/dot-location": [ "error", "property" ],
  "@stylistic/eol-last": [ "error", "always" ],
  "@stylistic/function-call-argument-newline": [ "error", "consistent" ],
  "@stylistic/function-call-spacing": "error",
  "@stylistic/function-paren-newline": [ "error", "consistent" ],
  "@stylistic/generator-star-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/implicit-arrow-linebreak": [ "error", "beside" ],
  "@stylistic/indent": [ "error", 2 ],
  "@stylistic/indent-binary-ops": [ "error", 2 ],
  "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned" ],
  "@stylistic/jsx-closing-tag-location": [ "error", "line-aligned" ],
  "@stylistic/jsx-curly-brace-presence": [ "error", {
    "props": "never",
    "children": "never",
    "propElementValues": "never"
  } ],
  "@stylistic/jsx-curly-newline": [ "error", {
    "multiline": "require",
    "singleline": "consistent"
  } ],
  "@stylistic/jsx-curly-spacing": [ "error", {
    "when": "always",
    "children": true,
  } ],
  "@stylistic/jsx-equals-spacing": [ "error", "never" ],
  "@stylistic/jsx-first-prop-new-line": [ "error", "multiline-multiprop" ],
  "@stylistic/jsx-function-call-newline": [ "error", "multiline" ],
  "@stylistic/jsx-indent-props": [ "error", 2 ],
  "@stylistic/jsx-max-props-per-line": [ "error", {
    "when": "multiline",
    "maximum": 1 
  } ],
  "@stylistic/jsx-newline": [ "error", {
    "prevent": true
  } ],
  "@stylistic/jsx-one-expression-per-line": [ "error", {
    "allow": "single-line"
  } ],
  "@stylistic/jsx-pascal-case": [ "error", {
    "allowNamespace": true,
    "allowLeadingUnderscore": true
  } ],
  "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
  "@stylistic/jsx-self-closing-comp": [ "error", {
    "component": true,
    "html": true
  } ],
  "@stylistic/jsx-tag-spacing": [ "error", {
    "closingSlash": "never",
    "beforeSelfClosing": "always",
    "afterOpening": "never",
    "beforeClosing": "never",
  } ],
  "@stylistic/jsx-wrap-multilines": [ "error", {
    "declaration": "parens-new-line",
    "assignment": "ignore",
    "return": "parens-new-line",
    "arrow": "parens-new-line",
    "condition": "ignore",
    "logical": "ignore",
    "prop": "ignore",
    "propertyValue": "ignore"
  } ],
  "@stylistic/key-spacing": "error",
  "@stylistic/keyword-spacing": "error",
  "@stylistic/line-comment-position": "error",
  "@stylistic/linebreak-style": "error",
  "@stylistic/lines-around-comment": [ "error", {
    "beforeBlockComment": false
  } ],
  "@stylistic/lines-between-class-members": "error",
  "@stylistic/member-delimiter-style": [ "error", {
    "multiline": {
      "delimiter": "semi",
      "requireLast": true
    },
    "singleline": {
      "delimiter": "semi",
      "requireLast": true
    }
  } ],
  "@stylistic/multiline-comment-style": "error",
  "@stylistic/multiline-ternary": [ "error", "always-multiline" ],
  "@stylistic/new-parens": "error",
  "@stylistic/newline-per-chained-call": "error",
  "@stylistic/no-confusing-arrow": "error",
  "@stylistic/no-extra-semi": "error",
  "@stylistic/no-floating-decimal": "error",
  "@stylistic/no-mixed-spaces-and-tabs": "error",
  "@stylistic/no-multi-spaces": "error",
  "@stylistic/no-multiple-empty-lines": [ "error", {
    "max": 2,
    "maxEOF": 1,
    "maxBOF": 1
  } ],
  "@stylistic/no-tabs": "error",
  "@stylistic/no-trailing-spaces": "error",
  "@stylistic/no-whitespace-before-property": "error",
  "@stylistic/nonblock-statement-body-position": [ "error", "any" ],
  "@stylistic/object-curly-newline": [ "error", {
    "multiline": true,
    "consistent": true
  } ],
  "@stylistic/object-curly-spacing": [ "error", "always", {
    "arraysInObjects": true,
    "objectsInObjects": true,
    "emptyObjects": "never"
  } ],
  "@stylistic/one-var-declaration-per-line": "error",
  "@stylistic/operator-linebreak": [ "error", "before" ],
  "@stylistic/padded-blocks": [ "error", "never" ],
  "@stylistic/quote-props": [ "error", "as-needed", {
    "keywords": true,
    "unnecessary": true,
    "numbers": true
  } ],
  "@stylistic/quotes": [ "error", "double", {
    "avoidEscape": false,
    "allowTemplateLiterals": "always",
    "ignoreStringLiterals": false
  } ],
  "@stylistic/rest-spread-spacing": [ "error", "never" ],
  "@stylistic/semi": [ "error", "always" ],
  "@stylistic/semi-spacing": [ "error", {
    "before": false,
    "after": true
  } ],
  "@stylistic/semi-style": "error",
  "@stylistic/space-before-blocks": [ "error", "always" ],
  "@stylistic/space-before-function-paren": "error",
  "@stylistic/space-in-parens": "error",
  "@stylistic/space-infix-ops": "error",
  "@stylistic/space-unary-ops": [ "error", {
    "words": true,
    "nonwords": false,
  } ],
  "@stylistic/spaced-comment": [ "error", "always", {
    "markers": [ "/" ],
    "block": {
      "balanced": true
    }
  } ],
  "@stylistic/switch-colon-spacing": [ "error", {
    "after": true,
    "before": false
  } ],
  "@stylistic/template-curly-spacing": [ "error", "always" ],
  "@stylistic/template-tag-spacing": "error",
  "@stylistic/type-annotation-spacing": [ "error", {
    "before": false,
    "after": true
	}],
  "@stylistic/type-generic-spacing": "error",
  "@stylistic/type-named-tuple-spacing": "error",
  "@stylistic/wrap-iife": [ "error", "inside" ],
  "@stylistic/wrap-regex": "error",
  "@stylistic/yield-star-spacing": [ "error", "both" ]
};

export {
  STYLISTIC_RULES
};

