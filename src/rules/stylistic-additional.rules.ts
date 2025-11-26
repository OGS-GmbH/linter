/**
 * Stylistic (additional) preset rules for ESLint
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLISTIC_ADDITIONAL_RULES: Record<string, unknown> = {
  "@stylistic/plus/curly-newline": [ "error", {
    "consistent": true
  } ],
  "@stylistic/plus/indent-binary-ops": [ "error", 2 ]
};

/**
 * Stylistic (additional) preset rules for ESLint
 * @readonly
 * @remarks Use it in Typescript code-bases
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED: Record<string, unknown> = {
  "@stylistic/plus/type-generic-spacing": "error",
  "@stylistic/plus/type-named-tuple-spacing": "error"
}; 

/**
 * Get Stylistic rules based on filters
 * @param usageForTypescript - Whether the rules will be used for linting TypeScript or not
 * @returns Preset of Stylistic rules
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const getStylisticAdditionalRules = (usageForTypescript?: boolean): Record<string, unknown> => usageForTypescript ? { ...STYLISTIC_ADDITIONAL_RULES, ...STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED } : STYLISTIC_ADDITIONAL_RULES;

export {
  STYLISTIC_ADDITIONAL_RULES,
  STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED,
  getStylisticAdditionalRules
};

