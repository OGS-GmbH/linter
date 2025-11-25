import { Options } from "../types/anguler-rules.type";

/**
 * Get Angular rules based on filters
 * @param options - Options like selectorPrefix, that could change in different projects
 * @returns Preset of Angular rules
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 */
const getAngularRules = (options: Options): Record<string, unknown> => ({
	"@angular/contextual-lifecycle": "error",
  "@angular/no-async-lifecycle-method": "error",
	"@angular/consistent-component-styles": "error",
	"@angular/no-empty-lifecycle-method": "error",
	"@angular/no-duplicates-in-metadata-arrays": "error",
  "@angular/no-output-native": "error",
	"@angular/prefer-on-push-component-change-detection": "warn",
	"@angular/prefer-output-readonly": "error",
  "@angular/relative-url-prefix": "error",
  "@angular/use-lifecycle-interface": "error",
  "@angular/use-pipe-transform-interface": "error",
	"@angular/directive-selector": [ "error", { "prefix": options.selectorPrefix, "style": "camelCase" } ],
	"@angular/component-selector": [ "error", { "type": "element", "prefix": options.selectorPrefix, "style": "kebab-case" } ],
});

export {
  getAngularRules
};

