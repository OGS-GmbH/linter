/**
 * Options for Angular-specific linting rules
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Options = {
  /**
   * Angular selector prefix for components and directives
   * @remarks
   * If you want to enforce, that every component selector should start with `app-`, set it to `app`.
   *
   * @since 1.0.0
   */
  selectorPrefix: string
};

export type {
  Options
}
