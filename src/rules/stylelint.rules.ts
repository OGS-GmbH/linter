/**
 * CSS preset rules for Stylelint
 * @readonly
 * @remarks Use it inside CSS or CSS-Preprocessor code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLELINT_RULES: Record<string, unknown> = {
	"declaration-block-no-duplicate-custom-properties": true,
	"declaration-block-no-duplicate-properties": true,
	"font-family-no-duplicate-names": true,
	"keyframe-block-no-duplicate-selectors": true,
	"no-duplicate-at-import-rules": true,
	"no-duplicate-selectors": true,
	"color-no-invalid-hex": true,
	"function-calc-no-unspaced-operator": true,
	"keyframe-declaration-no-important": true,
	"media-query-no-invalid": true,
	"named-grid-areas-no-invalid": true,
	"no-invalid-position-at-import-rule": true,
	"string-no-newline": true,
	"no-irregular-whitespace": true,
	"custom-property-no-missing-var-function": true,
	"declaration-block-no-shorthand-property-overrides": true,
	"selector-anb-no-unmatchable": true,
	"annotation-no-unknown": true,
	"at-rule-no-unknown": null,
	"function-no-unknown": null,
	"media-feature-name-no-unknown": true,
	"selector-pseudo-class-no-unknown": true,
	"selector-type-no-unknown": true,
	"unit-no-unknown": true,
	"length-zero-no-unit": true,
	"media-feature-name-no-vendor-prefix": true,
	"property-no-vendor-prefix": true,
	"selector-no-vendor-prefix": true,
	"value-no-vendor-prefix": true,
	"font-family-name-quotes": "always-unless-keyword"
};

export {
  STYLELINT_RULES
};
