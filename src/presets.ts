import { ESLINT_RULES, ESLINT_RULES_TS_EXTENDED } from "./rules/eslint.rules";
import { TSESLINT_RULES } from "./rules/tseslint.rules";
import { STYLISTIC_JS_RULES, STYLISTIC_JS_RULES_TS_EXTENDED } from "./rules/stylistic-js.rules";
import { STYLISTIC_TS_RULES } from "./rules/stylistic-ts.rules";
import { STYLISTIC_ADDITIONAL_RULES, STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED } from "./rules/stylistic-additional.rules";
import { UNICORN_RULES } from "./rules/unicorn.rules";
import { SECURITY_RULES } from "./rules/security.rules";
import { ANGULAR_TEMPLATE_RULES, getAngularRules, STYLELINT_RULES, STYLELINT_SCSS_RULES } from "./public-api";
import { Options } from "./types/anguler-rules.type";

const JS_RULES_PRESET: Record<string, unknown> = {
  ...ESLINT_RULES,
  ...ESLINT_RULES_TS_EXTENDED,
  ...STYLISTIC_JS_RULES,
  ...STYLISTIC_JS_RULES_TS_EXTENDED,
  ...STYLISTIC_ADDITIONAL_RULES,
  ...UNICORN_RULES,
};

const NODE_JS_RULES_PRESET: Record<string, unknown> = {
  ...JS_RULES_PRESET,
  ...SECURITY_RULES
};

const TS_RULES_PRESET: Record<string, unknown> = {
  ...ESLINT_RULES,
  ...TSESLINT_RULES,
  ...STYLISTIC_JS_RULES,
  ...STYLISTIC_TS_RULES,
  ...STYLISTIC_ADDITIONAL_RULES,
  ...STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED,
  ...UNICORN_RULES,
};

const NODE_TS_RULES_PRESET: Record<string, unknown> = {
  ...TS_RULES_PRESET,
  ...SECURITY_RULES
};

const getAngularTsPreset = (options: Options): Record<string, unknown> => ({
  ...TS_RULES_PRESET,
  ...getAngularRules(options)
});

const ANGULAR_TEMPLATE_RULES_PRESET: Record<string, unknown> = {
  ...ANGULAR_TEMPLATE_RULES
};

const SCSS_RULES_PRESET: Record<string, unknown> = {
  ...STYLELINT_RULES,
  ...STYLELINT_SCSS_RULES
}

export {
  TS_RULES_PRESET,
  JS_RULES_PRESET,
  SCSS_RULES_PRESET,
  NODE_JS_RULES_PRESET,
  NODE_TS_RULES_PRESET,
  getAngularTsPreset,
  ANGULAR_TEMPLATE_RULES_PRESET
};
