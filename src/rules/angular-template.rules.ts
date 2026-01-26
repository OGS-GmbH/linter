/**
 * Preset rules for Angular templates
 * @category Rules
 * @readonly
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 */
const ANGULAR_TEMPLATE_RULES: Record<string, unknown> = {
	"@angular-template/no-duplicate-attributes": [ "error", { "allowTwoWayDataBinding": true } ],
  "@angular-eslint/template/alt-text": "error",
	"@angular-template/banana-in-box": "error",
	"@angular-template/eqeqeq": "error",
	"@angular-template/no-any": "error",
  "@angular-template/no-empty-control-flow": "error",
	"@angular-template/no-inline-styles": [ "error", { "allowNgStyle": true, "allowBindToStyle": true } ],
	"@angular-template/no-interpolation-in-attributes": "error",
	"@angular-template/no-negated-async": "error",
  "@angular-template/prefer-at-else": "error",
  "@angular-template/prefer-at-empty": "error",
	"@angular-template/prefer-control-flow": "error",
  "@angular-template/prefer-template-literal": "error",
	"@angular-template/prefer-self-closing-tags": "error",
	"@angular-template/use-track-by-function": "error",
  "@angular-template/prefer-static-string-properties": "error"
};

export { ANGULAR_TEMPLATE_RULES };

