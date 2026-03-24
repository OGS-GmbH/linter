/**
 * CSS preset rules for Stylelint
 * @category Rules
 * @readonly
 * @remarks Use it inside CSS or CSS-Preprocessor code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLELINT_RULES: Record<string, unknown> = {
  "at-rule-no-deprecated": true,
  "declaration-property-value-keyword-no-deprecated": true,
  "media-type-no-deprecated": true,
  "property-no-deprecated": true,
  "no-descending-specificity": true,
  "declaration-block-no-duplicate-custom-properties": true,
  "declaration-block-no-duplicate-properties": true,
  "font-family-no-duplicate-names": true,
  "keyframe-block-no-duplicate-selectors": true,
  "no-duplicate-at-import-rules": true,
  "no-duplicate-selectors": true,
  "block-no-empty": true,
  "comment-no-empty": true,
  "no-empty-source": true,
  "at-rule-prelude-no-invalid": true,
  "color-no-invalid-hex": true,
  "function-calc-no-unspaced-operator": true,
  "keyframe-declaration-no-important": true,
  "media-query-no-invalid": true,
  "named-grid-areas-no-invalid": true,
  "no-invalid-double-slash-comments": true,
  "no-invalid-position-at-import-rule": true,
  "no-invalid-position-declaration": true,
  "string-no-newline": true,
  "syntax-string-no-invalid": true,
  "no-irregular-whitespace": true,
  "custom-property-no-missing-var-function": true,
  "font-family-no-missing-generic-family-keyword": true,
  "nesting-selector-no-missing-scoping-root": true,
  "declaration-block-no-shorthand-property-overrides": true,
  "selector-anb-no-unmatchable": true,
  "annotation-no-unknown": true,
  "at-rule-descriptor-no-unknown": true,
  "at-rule-descriptor-value-no-unknown": true,
  "declaration-property-value-no-unknown": true,
  "media-feature-name-no-unknown": true,
  "media-feature-name-value-no-unknown": true,
  "property-no-unknown": true,
  "selector-pseudo-class-no-unknown": true,
  "selector-pseudo-element-no-unknown": true,
  "selector-type-no-unknown": true,
  "at-rule-no-vendor-prefix": true,
  "color-named": "never",
  "length-zero-no-unit": true,
  "media-feature-name-no-vendor-prefix": true,
  "property-no-vendor-prefix": true,
  "selector-no-vendor-prefix": true,
  "value-no-vendor-prefix": true,
  "function-name-case": "lower",
  "selector-type-case": "lower",
  "value-keyword-case": "lower",
  "comment-empty-line-before": "always",
  "declaration-empty-line-before": "always",
  "rule-empty-line-before": "always",
  "number-max-precision": 2,
  "alpha-value-notation": "percentage",
  "color-function-notation": "modern",
  "color-hex-length": "long",
  "font-weight-notation": "numeric",
  "hue-degree-notation": "angle",
  "import-notation": "string",
  "lightness-notation": "percentage",
  "media-feature-range-notation": "context",
  "selector-not-notation": "complex",
  "selector-pseudo-element-colon-notation": "single",
  "font-family-name-quotes": "always-where-required",
  "function-url-quotes": "always",
  "selector-attribute-quotes": "always",
  "block-no-redundant-nested-style-rules": true,
  "declaration-block-no-redundant-longhand-properties": true,
  "shorthand-property-no-redundant-values": true,
  "comment-whitespace-inside": "always"
};

/**
 * CSS preset rules for Stylelint with SCSS support
 * @category Rules
 * @readonly
 * @remarks Use it inside CSS-Preprocessor code bases
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 */
const STYLELINT_RULES_WITH_SCSS: Record<string, unknown> = {
  "at-rule-no-unknown": null,
  "at-rule-empty-line-before": ["always", {
    "ignoreAtRules": [ "else" ]
  }]
}

/**
 * CSS preset rules for Stylelint with CSS-only support
 * @category Rules
 * @readonly
 * @remarks Use it inside CSS-only code bases
 *
 * @since 2.0.0
 * @author Simon Kovtyk
 */
const STYLELINT_RULES_WITHOUT_SCSS: Record<string, unknown> = {
  "at-rule-no-unknown": true,
  "at-rule-empty-line-before": "always",
  "function-no-unknown": true
};

export {
  STYLELINT_RULES,
  STYLELINT_RULES_WITH_SCSS,
  STYLELINT_RULES_WITHOUT_SCSS
};
