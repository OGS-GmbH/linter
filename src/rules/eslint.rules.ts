/**
 * JavaScript preset rules for ESLint
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const ESLINT_RULES: Record<string, unknown> = {
  "array-callback-return": [ "error", {
    "allowImplicit": true,
    "checkForEach": true,
    "allowVoid": true
  } ],
  "constructor-super": "error",
  "for-direction": "error",
  "getter-return": [ "error", {
    "allowImplicit": true
  } ],
  "no-async-promise-executor": "error",
  "no-class-assign": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-const-assign": "error",
  "no-constant-binary-expression": "error",
  "no-constant-condition": "error",
  "no-constructor-return": "error",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-dupe-args": "error",
  "no-dupe-else-if": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-duplicate-imports": [ "error", {
    "includeExports": true
  } ],
  "no-empty-character-class": "error",
  "no-empty-pattern": "error",
  "no-ex-assign": "error",
  "no-fallthrough": "error",
  "no-func-assign": "error",
  "no-import-assign": "error",
  "no-inner-declarations": [ "error", "both", {
    "blockScopedFunctions": "disallow"
  } ],
  "no-invalid-regexp": [ "error", {
    "allowConstructorFlags": [
      "d", "g", "i", "m", "s", "u", "v", "y"
    ]
  } ],
  "no-irregular-whitespace": "error",
  "no-misleading-character-class": [ "error", {
    "allowEscape": true
  } ],
  "no-new-native-nonconstructor": "error",
  "no-obj-calls": "error",
  "no-promise-executor-return": [ "error", {
    "allowVoid": true
  } ],
  "no-prototype-builtins": "error",
  "no-self-assign": "error",
  "no-self-compare": "error",
  "no-setter-return": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "error",
  "no-this-before-super": "error",
  "no-undef": "error",
  "no-unexpected-multiline": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable": "error",
  "no-unreachable-loop": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unsafe-optional-chaining": [ "error", {
    "disallowArithmeticOperators": true
  } ],
  "no-unused-private-class-members": "error",
  "no-useless-assignment": "error",
  "no-useless-backreference": "error",
  "use-isnan": [ "error", {
    "enforceForSwitchCase": true,
    "enforceForIndexOf": true
  } ],
  "valid-typeof": [ "error", {
    "requireStringLiterals": true
  } ],
  "arrow-body-style": "error",
  "block-scoped-var": "error",
  "capitalized-comments": [ "error", "always", {
    "ignorePattern": "TODO|FIXME|HACK|NOTE|PERF|WARN|TEST"
  } ],
  "consistent-this": "error",
  "curly": [ "error", "multi-or-nest" ],
  "default-case-last": "error",
  "eqeqeq": [ "error", "always" ],
  "grouped-accessor-pairs": [ "error", "setBeforeGet" ],
  "logical-assignment-operators": [ "error", "always" ],
  "max-classes-per-file": "error",
  "no-alert": "error",
  "no-caller": "error",
  "no-console": "error",
  "no-delete-var": "error",
  "no-empty": [ "error", {
    "allowEmptyCatch": true
  } ],
  "no-empty-static-block": "error",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-boolean-cast": [ "error", {
    "enforceForInnerExpressions": true
  } ],
  "no-extra-label": "error",
  "no-global-assign": "error",
  "no-implicit-coercion": [ "error", {
    "disallowTemplateShorthand": true
  } ],
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "error",
  "no-negated-condition": "error",
  "no-nested-ternary": "off",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-object-constructor": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": "error",
  "no-proto": "error",
  "no-regex-spaces": "error",
  "no-restricted-exports": [ "error", {
    "restrictedNamedExports": [
      "default"
    ]
  } ],
  "no-return-assign": [ "error", "always" ],
  "no-script-url": "error",
  "no-sequences": "error",
  "no-shadow-restricted-names": "error",
  "no-unneeded-ternary": "error",
  "no-unused-labels": "error",
  "no-useless-call": "error",
  "no-useless-catch": "error",
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-escape": "error",
  "no-useless-rename": [ "error", {
    "ignoreImport": true,
    "ignoreExport": true,
    "ignoreDestructuring": true
  } ],
  "no-useless-return": "error",
  "no-var": "error",
  "no-with": "error",
  "object-shorthand": [ "error", "always" ],
  "operator-assignment": [ "error", "always" ],
  "prefer-const": [ "error", {
    "destructuring": "all"
  } ],
  "prefer-exponentiation-operator": "error",
  "prefer-named-capture-group": "error",
  "prefer-numeric-literals": "error",
  "prefer-object-has-own": "error",
  "prefer-object-spread": "error",
  "prefer-regex-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "radix": "error",
  "require-yield": "error",
  /* "sort-imports": "error", */
  "symbol-description": "error",
  "vars-on-top": "error",
  "yoda": "error"
};

/**
 * JavaScript preset rules for ESLint, that will be overridden by typescript-eslint
 * @readonly
 * @remarks Do not use in TypeScript code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const ESLINT_RULES_TS_EXTENDED: Record<string, unknown> = {
  "class-methods-use-this": "error",
  "default-param-last": "error",
  "dot-notation": [ "error", {
    "allowKeywords": false
  } ],
  "max-params": [ "error", {
    "max": 4
  } ],
  "no-array-constructor": "error",
  "no-dupe-class-members": "error",
  "no-empty-function": "error",
  "no-implied-eval": "error",
  "no-invalid-this": "error",
  "no-redeclare": "error",
  "no-shadow": [ "error", {
    "builtinGlobals": true,
    "hoist": "all"
  } ],
  "no-unused-expressions": [ "error", {
    "enforceForJSX": true,
    "allowShortCircuit": true,
    "allowTernary": true
  } ],
  "no-unused-vars": [ "error", {
    "args": "all",
    "argsIgnorePattern": "^_",
    "caughtErrors": "all",
    "caughtErrorsIgnorePattern": "^_",
    "destructuredArrayIgnorePattern": "^_",
    "varsIgnorePattern": "^_",
    "ignoreRestSiblings": true
  } ],
  "no-use-before-define": "error",
  "no-useless-constructor": "error",
  "no-throw-literal": "error",
  "prefer-promise-reject-errors": "error",
  "require-await": "error",
  "no-return-await": "error"
};

/**
 * Get ESLint rules based on filters
 * @param usageForTypescript - Whether the rules will be used for linting TypeScript or not
 * @returns Preset of ESLint rules
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const getEslintRules = (usageForTypescript?: boolean): Record<string, unknown> => usageForTypescript ? ESLINT_RULES : { ...ESLINT_RULES, ...ESLINT_RULES_TS_EXTENDED };

export {
  ESLINT_RULES,
  ESLINT_RULES_TS_EXTENDED,
  getEslintRules
};

