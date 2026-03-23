/**
 * SCSS preset rules for Stylelint
 * @category Rules
 * @readonly
 * @remarks Don't use it inside CSS-only code bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLELINT_SCSS_RULES: Record<string, unknown> = {
  "scss/at-rule-no-unknown": true,
  "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
  "scss/at-else-closing-brace-space-after": "always-intermediate",
  "scss/at-else-empty-line-before": "never",
  "scss/at-else-if-parentheses-space-before": "always",
  "scss/at-function-named-arguments": "never",
  "scss/at-function-parentheses-space-before": "always",
  "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
  "scss/at-if-closing-brace-space-after": "always-intermediate",
  "scss/at-mixin-argumentless-call-parentheses": "always",
  "scss/at-mixin-named-arguments": "never",
  "scss/at-mixin-parentheses-space-before": "always",
  "scss/at-rule-conditional-no-parentheses": null,
  "scss/at-use-no-redundant-alias": true,
  "scss/dollar-variable-colon-newline-after": "always-multi-line",
  "scss/dollar-variable-colon-space-after": "always",
  "scss/dollar-variable-colon-space-before": "never",
  "scss/dollar-variable-empty-line-after": [ "always", {
			"except": ["last-nested", "before-dollar-variable"],
			"ignore": ["inside-single-line-block"]
  } ],
  "scss/dollar-variable-empty-line-before": [ "always", {
    "except": ["first-nested", "after-comment", "after-dollar-variable"]
  } ],
  "scss/dollar-variable-first-in-block": [ true, {
    "ignore": [ "comments", "imports" ],
  } ],
  "scss/dollar-variable-no-missing-interpolation": true,
  "scss/dollar-variable-no-namespaced-assignment": true,
  "scss/double-slash-comment-empty-line-before": [ "always", {
    "except": [ "first-nested", "inside-block" ],
    "ignore": [ "between-comments", "stylelint-commands" ]
  } ],
  "scss/double-slash-comment-whitespace-inside": "always",
  "scss/block-no-redundant-nesting": true,
  "scss/comment-no-empty": true,
  "scss/declaration-nested-properties-no-divided-groups": true,
  "scss/declaration-property-value-no-unknown": true,
  "scss/dimension-no-non-numeric-values": true,
  "scss/function-calculation-no-interpolation": true,
  "scss/function-no-unknown": true,
  "scss/map-keys-quotes": "always",
  "scss/operator-no-newline-after": true,
  "scss/operator-no-unspaced": true,
  "scss/property-no-unknown": [ true, {
    "checkPrefixed": true
  } ],
  "scss/selector-no-redundant-nesting-selector": true,
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
  "scss/no-duplicate-mixins": true,
  "scss/no-global-function-names": true
};

export {
  STYLELINT_SCSS_RULES
};
