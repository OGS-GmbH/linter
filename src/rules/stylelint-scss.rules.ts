/**
 * SCSS preset rules for Stylelint
 * @readonly
 * @remarks Don't use it inside CSS-only code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLELINT_SCSS_RULES: Record<string, unknown> = {
	"scss/at-rule-no-unknown": true,
	"scss/selector-no-redundant-nesting-selector": true,
	"scss/at-mixin-parentheses-space-before": "never",
	"scss/dollar-variable-colon-space-after": "always",
	"scss/dollar-variable-colon-space-before": "never",
	"scss/dollar-variable-no-missing-interpolation": true,
	"scss/block-no-redundant-nesting": true,
	"scss/comment-no-empty": true,
	"scss/function-no-unknown": null,
	"scss/function-quote-no-quoted-strings-inside": true,
	"scss/property-no-unknown": true,
	"scss/no-duplicate-dollar-variables": [ true, {
    "ignoreInside": [ "at-rule" ],
    "ignoreInsideAtRules": [
      "each",
      "function",
      "at-root",
      "use",
      "forward",
      "import",
      "include",
      "extend",
      "error",
      "warn",
      "debug",
      "if",
      "for",
      "while"
    ]
  } ],
	"scss/no-duplicate-mixins": true
};

export {
  STYLELINT_SCSS_RULES
};
