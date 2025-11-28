import { ESLINT_RULES, ESLINT_RULES_TS_EXTENDED } from "./rules/eslint.rules";
import { TSESLINT_RULES } from "./rules/tseslint.rules";
import { STYLISTIC_JS_RULES, STYLISTIC_JS_RULES_TS_EXTENDED } from "./rules/stylistic-js.rules";
import { STYLISTIC_TS_RULES } from "./rules/stylistic-ts.rules";
import { STYLISTIC_ADDITIONAL_RULES, STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED } from "./rules/stylistic-additional.rules";
import { UNICORN_RULES } from "./rules/unicorn.rules";
import { SECURITY_RULES } from "./rules/security.rules";
import { ANGULAR_TEMPLATE_RULES, getAngularRules, STYLELINT_RULES, STYLELINT_SCSS_RULES } from "./public-api";
import { Options } from "./types/anguler-rules.type";
import { JSDOC_RULES, JSDOC_RULES_TS_EXCLUDED, JSDOC_RULES_TS_INCLUDED } from "./rules/jsdoc.rules";

/**
 * JavaScript preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/javascript
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const JS_RULES_PRESET: Record<string, unknown> = {
  ...ESLINT_RULES,
  ...ESLINT_RULES_TS_EXTENDED,
  ...STYLISTIC_JS_RULES,
  ...STYLISTIC_JS_RULES_TS_EXTENDED,
  ...STYLISTIC_ADDITIONAL_RULES,
  ...UNICORN_RULES,
};

/**
 * Node.js/JavaScript preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/node-js
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const NODE_JS_RULES_PRESET: Record<string, unknown> = {
  ...JS_RULES_PRESET,
  ...SECURITY_RULES
};

/**
 * TypeScript preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/typescript
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const TS_RULES_PRESET: Record<string, unknown> = {
  ...ESLINT_RULES,
  ...TSESLINT_RULES,
  ...STYLISTIC_JS_RULES,
  ...STYLISTIC_TS_RULES,
  ...STYLISTIC_ADDITIONAL_RULES,
  ...STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED,
  ...UNICORN_RULES,
};

/**
 * Node.js/TypeScript preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/node-js
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const NODE_TS_RULES_PRESET: Record<string, unknown> = {
  ...TS_RULES_PRESET,
  ...SECURITY_RULES
};

/**
 * Get Angular/TypeScript preset rules for ESLint
 * @category Presets
 * @param options - Options like selectorPrefix, that could change in different projects
 * @returns Preset of Angular rules
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/angular
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const getAngularTsPreset = (options: Options): Record<string, unknown> => ({
  ...TS_RULES_PRESET,
  ...ANGULAR_TEMPLATE_RULES_PRESET,
  ...getAngularRules(options)
});

/**
 * Angular template preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/angular
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const ANGULAR_TEMPLATE_RULES_PRESET: Record<string, unknown> = {
  ...ANGULAR_TEMPLATE_RULES
};

/**
 * CSS preset rules for Stylelint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/css
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const CSS_RULES_PRESET: Record<string, unknown> = {
  ...STYLELINT_RULES
}

/**
 * SCSS preset rules for Stylelint
 * @category Presets
 * @readonly
 *
 * @see https://ogs-gmbh.github.io/linter/guide/setup/scss
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const SCSS_RULES_PRESET: Record<string, unknown> = {
  ...STYLELINT_RULES,
  ...STYLELINT_SCSS_RULES
}

/**
 * JSDoc/TypeScript preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const JSDOC_TS_RULES_PRESET: Record<string, unknown> = {
  ...JSDOC_RULES,
  ...JSDOC_RULES_TS_INCLUDED
}

/**
 * JSDoc/JavaScript preset rules for ESLint
 * @category Presets
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const JSDOC_JS_RULES_PRESET: Record<string, unknown> = {
  ...JSDOC_RULES,
  ...JSDOC_RULES_TS_EXCLUDED
}

export {
  TS_RULES_PRESET,
  JS_RULES_PRESET,
  CSS_RULES_PRESET,
  SCSS_RULES_PRESET,
  NODE_JS_RULES_PRESET,
  NODE_TS_RULES_PRESET,
  getAngularTsPreset,
  ANGULAR_TEMPLATE_RULES_PRESET,
  JSDOC_JS_RULES_PRESET,
  JSDOC_TS_RULES_PRESET
};
