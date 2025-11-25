/**
 * @readonly
 * @description Preset rules for Angular templates
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 */
const ANGULAR_TEMPLATE_RULES: Record<string, unknown> = {
	"@angular-template/no-duplicate-attributes": [ "error", { "allowTwoWayDataBinding": true } ],
	"@angular-template/banana-in-box": "error",
	"@angular-template/eqeqeq": "error",
	"@angular-template/no-any": "error",
	"@angular-template/no-inline-styles": [ "error", { "allowNgStyle": true, "allowBindToStyle": true } ],
  // TODO: add with angular v.20 support
  // "@angular-template/no-empty-control-flow": "error",
	"@angular-template/no-interpolation-in-attributes": "error",
	"@angular-template/no-negated-async": "error",
	"@angular-template/prefer-control-flow": "error",
	"@angular-template/prefer-self-closing-tags": "error",
	"@angular-template/use-track-by-function": "error"
};

export { ANGULAR_TEMPLATE_RULES };

