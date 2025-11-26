/**
 * @readonly
 * @description Preset rules for ESLint Markdown
 *
 * @since 1.0.0
 */
const ESLINT_MARKDOWN_RULES: Record<string, unknown> = {
  "@markdown/fenced-code-language": "error",
  "@markdown/heading-increment": "error",
  "@markdown/no-empty-links": "error",
  "@markdown/no-invalid-label-refs": "error",
  "@markdown/no-missing-label-refs": "error"
};

export { ESLINT_MARKDOWN_RULES };

