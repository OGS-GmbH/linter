/**
 * @readonly
 * @description Preset rules for JSDoc comments
 *
 * @since 1.0.0
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
 * @readonly
 * @description JSDoc preset rules for ESLint, that won't be used in TypeScript code bases
 * @remark Do not use in TypeScript code bases
 *
 * @since 1.0.0
 */
const JSDOC_RULES_TS_INCLUDED: Record<string, unknown> = {
  "@jsdoc/no-types": "error"
}

/**
 * @readonly
 * @description JSDoc preset rules for ESLint, that will be used in TypeScript code bases
 * @remark Do not use in no TypeScript code bases
 *
 * @since 1.0.0
 */
const JSDOC_RULES_TS_EXCLUDED: Record<string, unknown> = {
  "@jsdoc/no-undefined-types": [ "error", {
    "checkUsedTypedefs": true
  } ],
}

export {
  JSDOC_RULES,
  JSDOC_RULES_TS_INCLUDED,
  JSDOC_RULES_TS_EXCLUDED
};
