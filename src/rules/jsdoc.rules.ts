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
  "@jsdoc/check-alignment": "error",
  "@jsdoc/check-indentation": "error",
  "@jsdoc/check-line-alignment": [ "error", "never" ],
  "@jsdoc/check-param-names": [ "error", {
    "checkRestProperty": true
  } ],
  "@jsdoc/check-property-names": "error",
  "@jsdoc/check-template-names": "error",
  "@jsdoc/check-types": "error",
  "@jsdoc/check-values": "error",
  "@jsdoc/empty-tags": "error",
  "@jsdoc/escape-inline-tags": "error",
  "@jsdoc/implements-on-classes": "error",
  "@jsdoc/imports-as-dependencies": "error",
  "@jsdoc/multiline-blocks": [ "error", {
    "allowMultipleTags": false,
    "multilineTags": ["*"]
  } ],
  "@jsdoc/no-bad-blocks": "error",
  "@jsdoc/no-blank-block-descriptions": "error",
  "@jsdoc/no-blank-blocks": [ "error", {
    "enableFixer": true
  } ],
  "@jsdoc/no-defaults": "error",
  "@jsdoc/no-types": "error",
  "@jsdoc/no-multi-asterisks": [ "error", {
    "allowWhitespace": true,
    "preventAtEnd": true,
    "preventAtMiddleLines": true
  } ],
  "@jsdoc/reject-any-type": "error",
  "@jsdoc/require-asterisk-prefix": "error",
  "@jsdoc/require-description": "error",
  "@jsdoc/require-hyphen-before-param-description": [ "error", "always" ],
  "@jsdoc/require-param": [ "error", {
    "checkDestructuredRoots": true,
    "checkGetters": true,
    "checkRestProperty": true,
    "checkSetters": true,
    "enableFixer": true,
    "enableRestElementFixer": true,
    "enableRootFixer": true
  } ],
  "@jsdoc/require-param-description": "error",
  "@jsdoc/require-param-name": "error",
  "@jsdoc/require-property": "error",
  "@jsdoc/require-property-description": "error",
  "@jsdoc/require-property-name": "error",
  "@jsdoc/require-returns": [ "error", {
    "enableFixer": true
  } ],
  "@jsdoc/require-template-description": "error",
  "@jsdoc/require-throws": "error",
  "@jsdoc/ts-method-signature-style": [ "error", "method" ],
  "@jsdoc/ts-no-empty-object-type": "error",
  "@jsdoc/valid-types": "error"
}

export {
  JSDOC_RULES
};
