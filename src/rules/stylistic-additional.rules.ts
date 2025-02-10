const STYLISTIC_ADDITIONAL_RULES: Record<string, unknown> = {
  "@stylistic/plus/curly-newline": [ "error", {
    "consistent": true
  } ],
  "@stylistic/plus/indent-binary-ops": [ "error", 2 ]
};

const STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED: Record<string, unknown> = {
  "@stylistic/plus/type-generic-spacing": "error",
  "@stylistic/plus/type-named-tuple-spacing": "error"
}; 

const getStylisticAdditionalRules = (usageForTypescript?: boolean): Record<string, unknown> => usageForTypescript ? { ...STYLISTIC_ADDITIONAL_RULES, ...STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED } : STYLISTIC_ADDITIONAL_RULES;

export {
  STYLISTIC_ADDITIONAL_RULES,
  STYLISTIC_ADDITIONAL_RULES_TS_INCLUDED,
  getStylisticAdditionalRules
};

