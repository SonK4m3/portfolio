import FigureLabelPreview from '../../demos/figure-label/Preview.astro';
import DossierMatrixPreview from '../../demos/dossier-matrix/Preview.astro';
import ArchitectureLayersPreview from '../../demos/architecture-layers/Preview.astro';
import LifecycleFlowPreview from '../../demos/lifecycle-flow/Preview.astro';
import SystemMapPreview from '../../demos/system-map/Preview.astro';
import SystemGridPreview from '../../demos/system-grid/Preview.astro';

export const componentRegistry = {
  'figure-label': { preview: FigureLabelPreview },
  'dossier-matrix': { preview: DossierMatrixPreview },
  'architecture-layers': { preview: ArchitectureLayersPreview },
  'lifecycle-flow': { preview: LifecycleFlowPreview },
  'system-map': { preview: SystemMapPreview },
  'system-grid': { preview: SystemGridPreview },
} as const;

export type ComponentSlug = keyof typeof componentRegistry;

export function getComponentRegistryEntry(slug: string) {
  if (!(slug in componentRegistry)) throw new Error(`Published component "${slug}" has no production preview.`);
  return componentRegistry[slug as ComponentSlug];
}

export function assertRegistryMatches(slugs: string[]) {
  const published = new Set(slugs);
  const missingPreviews = slugs.filter((slug) => !(slug in componentRegistry));
  const missingDocs = Object.keys(componentRegistry).filter((slug) => !published.has(slug));
  if (missingPreviews.length || missingDocs.length) {
    throw new Error(`Component registry mismatch. Missing previews: ${missingPreviews.join(', ') || 'none'}. Missing docs: ${missingDocs.join(', ') || 'none'}.`);
  }
}
