export type ComponentStatus = 'experimental' | 'beta' | 'stable';

export const componentStatusCopy: Record<ComponentStatus, string> = {
  experimental: 'API and visual behavior may change.',
  beta: 'Used in production with a mostly stable contract.',
  stable: 'Validated across multiple production contexts.',
};
