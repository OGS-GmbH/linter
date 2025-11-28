/**
 * Preset rules for JSDoc comments
 * @category Rules
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const JSDOC_RULES: Record<string, unknown> = {
  "@jsdoc/check-access": "error",
  "@jsdoc/check-indentation": "error",
  "@jsdoc/check-param-names": [ "error", {
    "checkRestProperty": true
  } ],
  "@jsdoc/check-property-names": "error",
  "@jsdoc/check-tag-names": "error",
  "@jsdoc/check-types": "error",
  "@jsdoc/check-values": "error",
  "@jsdoc/empty-tags": "error",
  "@jsdoc/escape-inline-tags": "error",
  "@jsdoc/no-multi-asterisks": [ "error", {
    "allowWhitespace": true,
    "preventAtEnd": true,
    "preventAtMiddleLines": true
  } ],
  "@jsdoc/reject-any-type": "error",
  "@jsdoc/require-asterisk-prefix": "error",
  "@jsdoc/require-hyphen-before-param-description": [ "error", "never" ],
  "@jsdoc/ts-method-signature-style": [ "error", "method" ],
  "@jsdoc/ts-no-empty-object-type": "error",
  "@jsdoc/valid-types": "error"
}

/**
 * Preset rules for JSDoc comments
 * @readonly
 * @category Rules
 * @description JSDoc preset rules for ESLint, that won't be used in TypeScript code bases
 * @remarks Do not use in TypeScript code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const JSDOC_RULES_TS_INCLUDED: Record<string, unknown> = {
  "@jsdoc/no-types": "error"
}

/**
 * Preset rules for JSDoc comments
 * @readonly
 * @category Rules
 * @description JSDoc preset rules for ESLint, that will be used in TypeScript code bases
 * @remarks Do not use in no TypeScript code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const JSDOC_RULES_TS_EXCLUDED: Record<string, unknown> = {
  "@jsdoc/no-undefined-types": [ "error", {
    "checkUsedTypedefs": true
  } ]
}

export {
  JSDOC_RULES,
  JSDOC_RULES_TS_INCLUDED,
  JSDOC_RULES_TS_EXCLUDED
};
