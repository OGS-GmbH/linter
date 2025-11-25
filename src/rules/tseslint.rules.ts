/**
 * @readonly
 * @description typescript-eslint preset rules for ESLint
 *
 * @since 1.0.0
 */
const TSESLINT_RULES: Record<string, unknown> = {
  "@tseslint/adjacent-overload-signatures": "error",
  "@tseslint/array-type": [ "error", {
    "default": "array-simple"
  } ],
  "@tseslint/await-thenable": "error",
  "@tseslint/ban-ts-comment": "error",
  "@tseslint/ban-tslint-comment": "error",
  "@tseslint/class-methods-use-this": "error",
  "@tseslint/consistent-generic-constructors": [ "error", "constructor" ],
  "@tseslint/consistent-indexed-object-style": [ "error", "record" ],
  "@tseslint/consistent-type-assertions": [ "error", {
    "assertionStyle": "as"
  } ],
  "@tseslint/default-param-last": "error",
  "@tseslint/dot-notation": [ "error", {
    "allowKeywords": false
  } ],
  "@tseslint/explicit-function-return-type": "error",
  "@tseslint/explicit-module-boundary-types": "error",
  "@tseslint/max-params": [ "error", {
    "max": 4
  } ],
  "@tseslint/member-ordering": [ "error", {
    "default": [
      "field",
      "constructor",
      "method",
      "signature"
    ]
  } ],
  "@tseslint/method-signature-style": ["error", "method"],
  "@tseslint/no-array-constructor": "error",
  "@tseslint/no-array-delete": "error",
  "@tseslint/no-confusing-void-expression": [ "error", {
    "ignoreArrowShorthand": true,
    "ignoreVoidOperator": true
  } ],
  "@tseslint/no-deprecated": "error",
  "@tseslint/no-duplicate-enum-values": "error",
  "@tseslint/no-duplicate-type-constituents": "error",
  "@tseslint/no-dynamic-delete": "error",
  "@tseslint/no-empty-function": "error",
  "@tseslint/no-empty-object-type": "error",
  "@tseslint/no-explicit-any": "error",
  "@tseslint/no-extra-non-null-assertion": "error",
  "@tseslint/no-extraneous-class": "error",
  "@tseslint/no-floating-promises": "error",
  "@tseslint/no-for-in-array": "error",
  "@tseslint/no-implied-eval": "error",
  "@tseslint/no-invalid-void-type": "error",
  "@tseslint/no-misused-new": "error",
  "@tseslint/no-misused-promises": "error",
  "@tseslint/no-mixed-enums": "error",
  "@tseslint/no-non-null-asserted-nullish-coalescing": "error",
  "@tseslint/no-non-null-asserted-optional-chain": "error",
  "@tseslint/no-non-null-assertion": "error",
  "@tseslint/no-redundant-type-constituents": "error",
  "@tseslint/no-require-imports": [ "error", {
    "allowAsImport": true
  } ],
  "@tseslint/no-shadow": [ "error", {
    "builtinGlobals": true,
    "hoist": "all"
  } ],
  "@tseslint/no-this-alias": "error",
  "@tseslint/no-unnecessary-boolean-literal-compare": [ "error", {
    "allowComparingNullableBooleansToFalse": false,
    "allowComparingNullableBooleansToTrue": false
  } ],
  "@tseslint/no-unnecessary-condition": "error",
  "@tseslint/no-unnecessary-parameter-property-assignment": "error",
  "@tseslint/no-unnecessary-qualifier": "error",
  "@tseslint/no-unnecessary-template-expression": "error",
  "@tseslint/no-unnecessary-type-arguments": "error",
  "@tseslint/no-unnecessary-type-assertion": "error",
  "@tseslint/no-unnecessary-type-constraint": "error",
  "@tseslint/no-unnecessary-type-parameters": "error",
  "@tseslint/no-unsafe-argument": "error",
  "@tseslint/no-unsafe-assignment": "error",
  "@tseslint/no-unsafe-call": "error",
  "@tseslint/no-unsafe-declaration-merging": "error",
  "@tseslint/no-unsafe-enum-comparison": "error",
  "@tseslint/no-unsafe-function-type": "error",
  "@tseslint/no-unsafe-member-access": "error",
  "@tseslint/no-unsafe-return": "error",
  "@tseslint/no-unsafe-unary-minus": "error",
  "@tseslint/no-unused-expressions": [ "error", {
    "enforceForJSX": true,
    "allowShortCircuit": true,
    "allowTernary": true
  } ],
  "@tseslint/no-unused-vars": [ "error", {
    "args": "all",
    "argsIgnorePattern": "^_",
    "caughtErrors": "all",
    "caughtErrorsIgnorePattern": "^_",
    "destructuredArrayIgnorePattern": "^_",
    "varsIgnorePattern": "^_",
    "ignoreRestSiblings": true
  } ],
  "@tseslint/no-use-before-define": "error",
  "@tseslint/no-useless-constructor": "error",
  "@tseslint/no-useless-empty-export": "error",
  "@tseslint/no-wrapper-object-types": "error",
  "@tseslint/non-nullable-type-assertion-style": "error",
  "@tseslint/only-throw-error": "error",
  "@tseslint/typedef": [ "error", {
    "arrayDestructuring": true,
    "arrowParameter": true,
    "memberVariableDeclaration": true,
    "objectDestructuring": true,
    "parameter": true,
    "propertyDeclaration": true,
    "variableDeclaration": true,
    "variableDeclarationIgnoreFunction": true
  } ],
  "@tseslint/prefer-as-const": "error",
  "@tseslint/prefer-for-of": "error",
  "@tseslint/prefer-function-type": "error",
  "@tseslint/prefer-includes": "error",
  "@tseslint/prefer-literal-enum-member": "error",
  "@tseslint/prefer-namespace-keyword": "error",
  "@tseslint/prefer-nullish-coalescing": "error",
  "@tseslint/prefer-optional-chain": "error",
  "@tseslint/prefer-promise-reject-errors": "error",
  "@tseslint/prefer-reduce-type-parameter": "error",
  "@tseslint/prefer-regexp-exec": "error",
  "@tseslint/prefer-return-this-type": "error",
  "@tseslint/prefer-string-starts-ends-with": "error",
  "@tseslint/promise-function-async": "error",
  "@tseslint/require-array-sort-compare": "error",
  "@tseslint/require-await": "error",
  "@tseslint/restrict-plus-operands": "error",
  "@tseslint/restrict-template-expressions": "error",
  "@tseslint/return-await": [ "error", "always" ],
  "@tseslint/switch-exhaustiveness-check": [ "error", {
    "considerDefaultExhaustiveForUnions": true
  } ],
  "@tseslint/triple-slash-reference": "error",
  "@tseslint/unbound-method": "error",
  "@tseslint/unified-signatures": "error",
  "@tseslint/use-unknown-in-catch-callback-variable": "error"
};

export {
  TSESLINT_RULES
};

