/**
 * Preset rules for ESLint Markdown
 * @category Rules
 * @readonly
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const ESLINT_MARKDOWN_RULES: Record<string, unknown> = {
  "@markdown/fenced-code-language": "error",
  "@markdown/heading-increment": "error",
  "@markdown/no-bare-urls": "error",
  "@markdown/no-duplicate-definitions": "error",
  "@markdown/no-duplicate-headings": [ "error", { checkSiblingsOnly: true } ],
  "@markdown/no-empty-images": "error",
  "@markdown/no-empty-links": "error",
  "@markdown/no-invalid-label-refs": "error",
  "@markdown/no-missing-atx-heading-space": "error",
  "@markdown/no-missing-link-fragments": "error",
  "@markdown/no-space-in-emphasis": "error",
  "@markdown/no-unused-definitions": "error",
  "@markdown/require-alt-text": "error"
};

export { ESLINT_MARKDOWN_RULES };

