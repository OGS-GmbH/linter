const ANGULAR_TEMPLATE_RULES: Record<string, unknown> = {
	"@angular-template/no-duplicate-attributes": [ "error", { "allowTwoWayDataBinding": true } ],
	"@angular-template/banana-in-box": "error",
	"@angular-template/eqeqeq": "error",
	"@angular-template/no-any": "error",
	"@angular-template/no-inline-styles": [ "error", { "allowNgStyle": true, "allowBindToStyle": true } ],
	"@angular-template/no-interpolation-in-attributes": "error",
	"@angular-template/no-negated-async": "error",
	"@angular-template/prefer-control-flow": "error",
	"@angular-template/prefer-self-closing-tags": "error",
	"@angular-template/use-track-by-function": "error"
};

export { ANGULAR_TEMPLATE_RULES };

