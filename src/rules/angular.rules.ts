import { Options } from "../types/anguler-rules.type";

const getAngularRules = (options: Options): Record<string, unknown> => ({
	"@angular/contextual-lifecycle": "error",
	"@angular/consistent-component-styles": "error",
	"@angular/no-empty-lifecycle-method": "error",
	"@angular/no-duplicates-in-metadata-arrays": "error",
	"@angular/prefer-on-push-component-change-detection": "warn",
	"@angular/prefer-output-readonly": "error",
	"@angular/directive-selector": [ "error", { "prefix": options.selectorPrefix, "style": "camelCase" } ],
	"@angular/component-selector": [ "error", { "type": "element", "prefix": options.selectorPrefix, "style": "kebab-case" } ],
});

export {
  getAngularRules
};

