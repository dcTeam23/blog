import { useMDXComponents as getThemeComponents } from "nextra-theme-blog";

const themeComponents = getThemeComponents();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components: any = null) {
  return {
    ...themeComponents,
    ...components,
  };
}
