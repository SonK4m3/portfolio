import { test, expect } from '@playwright/test';

const componentRoutes = ['/components', '/components/figure-label', '/components/dossier-matrix', '/components/architecture-layers', '/components/lifecycle-flow', '/components/system-map', '/components/system-grid'];
const routes = ['/', '/work', '/work/notex', '/about', '/notes', '/playground', '/type-proof', ...componentRoutes];

test.describe('portfolio routes and metadata', () => {
  for (const route of routes) {
    test(`${route} responds with valid page metadata`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveTitle(/.+/);
      await expect(page.locator('meta[name="description"]')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveCount(1);
    });
  }
});

test('navigation reaches work and about', async ({ page }) => {
  await page.goto('/');
  const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
  await navigation.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page).toHaveURL(/\/work\/?$/);
  await navigation.getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
});

test('global navigation exposes the component laboratory', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Components' }).click();
  await expect(page).toHaveURL(/\/components\/?$/);
  await expect(page.getByRole('heading', { name: /Small interface systems/ })).toBeVisible();
});

test('keyboard focus and reduced motion are supported', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toHaveCount(1);
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('html')).toBeVisible();
});

test('system grid proximity respects pointer capability and reduced motion', async ({ page }) => {
  await page.goto('/');
  const finePointer = await page.evaluate(() => matchMedia('(hover:hover) and (pointer:fine)').matches);
  const label = page.locator('[data-grid-label]').first();
  await page.locator('section').first().hover({ position: { x: 320, y: 260 } });
  const proximity = await label.evaluate((element) => (element as HTMLElement).style.getPropertyValue('--proximity'));
  expect(Boolean(proximity)).toBe(finePointer);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await page.locator('section').first().hover({ position: { x: 360, y: 300 } });
  await expect.poll(() => label.evaluate((element) => (element as HTMLElement).style.getPropertyValue('--proximity'))).toBe('');
});

test('theme control persists an explicit light or dark preference', async ({ page }) => {
  await page.goto('/');
  const theme = page.getByRole('button', { name: 'Toggle color theme' });
  const initial = await page.locator('html').getAttribute('data-theme');
  await theme.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', initial === 'dark' ? 'light' : 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', initial === 'dark' ? 'light' : 'dark');
});

test('Vietnamese proof renders all required type voices and glyph groups', async ({ page }) => {
  await page.goto('/type-proof');
  await expect(page.getByRole('heading', { name: 'Ngôn ngữ cũng là một phần của hệ thống.' })).toBeVisible();
  await expect(page.getByText('Geist Sans / structural voice')).toBeVisible();
  await expect(page.getByText('IBM Plex Serif / editorial voice')).toBeVisible();
  await expect(page.getByText('Geist Mono / system voice')).toBeVisible();
  await expect(page.getByText('ứ ừ ử ữ ự')).toBeVisible();
});

test('supported viewports have no horizontal overflow', async ({ page }) => {
  for (const viewport of [{ width: 390, height: 844 }, { width: 430, height: 932 }, { width: 1440, height: 900 }, { width: 1600, height: 1000 }, { width: 1920, height: 1080 }]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  }
});

test('component catalogue and representative docs have no horizontal overflow', async ({ page }) => {
  for (const route of ['/components', '/components/architecture-layers', '/components/system-grid']) {
    for (const viewport of [{ width: 390, height: 844 }, { width: 430, height: 932 }, { width: 768, height: 1024 }, { width: 1024, height: 768 }, { width: 1440, height: 900 }, { width: 1600, height: 1000 }]) {
      await page.setViewportSize(viewport);
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth), `${route} overflows at ${viewport.width}px`).toBe(false);
    }
  }
});

test('NoteX case study follows the seven-chapter structure', async ({ page }) => {
  await page.goto('/work/notex');
  await expect(page.locator('h1')).toHaveText('NoteX');
  await expect(page.locator('.prose h2')).toHaveCount(7);
  await expect(page.locator('.architecture-diagram')).toBeVisible();
  await expect(page.locator('.lifecycle')).toBeVisible();
  await expect(page.locator('.platform-diagram')).toBeVisible();
  await expect(page.locator('.content-placeholder')).toContainText('[TBD]');
});

test('homepage presents NoteX and the architecture signature', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'NoteX', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'I design systems, not just screens.' })).toBeVisible();
  await expect(page.locator('.architecture-map [data-layer]')).toHaveCount(6);
  await expect(page.locator('.task-trace li')).toHaveCount(8);
  await expect(page.getByRole('link', { name: 'Explore the NoteX architecture' })).toHaveAttribute('href', '/work/notex#designing-the-frontend-architecture');
  await expect(page.getByRole('heading', { name: 'What I own.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Generation is easy/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playground', exact: true })).toBeVisible();
  await expect(page.locator('.how-i-build li')).toHaveCount(3);
  await expect(page.getByRole('heading', { name: /The principles only matter/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Build something thoughtful/ })).toBeVisible();
});

test('signature components are used on production routes', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-system-grid]')).toBeVisible();
  await expect(page.locator('[data-architecture-layers]')).toBeVisible();
  await expect(page.locator('[data-lifecycle-flow]')).toBeVisible();

  await page.goto('/about');
  await expect(page.locator('.dossier-matrix')).toBeVisible();
  await expect(page.locator('.system-map-component')).toBeVisible();

  await page.goto('/work/notex');
  await expect(page.locator('[data-architecture-layers]')).toBeVisible();
  await expect(page.locator('[data-lifecycle-flow]')).toBeVisible();
});

test('development proofs expose the type, grid, and component foundations', async ({ page }) => {
  for (const route of ['/dev/type', '/dev/grid', '/dev/components']) {
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  }
});

test('component catalogue lists six production entries and filters by primary category', async ({ page }) => {
  await page.goto('/components');
  await expect(page.locator('[data-component-entry]')).toHaveCount(6);
  await expect(page.locator('.catalogue-preview [data-preview-entry]:not([hidden]) [data-production-preview]')).toHaveCount(1);

  await page.getByRole('button', { name: 'editorial', exact: true }).click();
  await expect(page.locator('[data-component-entry]:visible')).toHaveCount(2);
  await expect(page.getByRole('button', { name: 'editorial', exact: true })).toHaveAttribute('aria-pressed', 'true');
});

test('catalogue focus updates the live production preview', async ({ page }) => {
  await page.goto('/components');
  const entry = page.locator('[data-component-entry][data-slug="lifecycle-flow"]');
  await entry.locator('[data-component-trigger]').focus();
  await expect(entry).toHaveAttribute('data-active', 'true');
  if ((page.viewportSize()?.width ?? 0) >= 768) {
    await expect(page.locator('[data-preview-entry="lifecycle-flow"] [data-production-preview="lifecycle-flow"]')).toBeVisible();
  } else {
    await expect(entry.locator('.mobile-preview [data-production-preview="lifecycle-flow"]')).toBeVisible();
  }
});

test('preview theme is local to its canvas', async ({ page }) => {
  await page.goto('/components/system-grid');
  const globalTheme = await page.locator('html').getAttribute('data-theme');
  const canvas = page.locator('.primary-preview [data-preview-canvas]');
  await canvas.getByRole('button', { name: 'dark', exact: true }).click();
  await expect(canvas).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', globalTheme ?? 'dark');
});

test('component detail provides anchors, production preview, API and copyable code', async ({ page }) => {
  await page.goto('/components/architecture-layers');
  await expect(page.locator('h1')).toHaveText('Architecture Layers');
  await expect(page.locator('[data-production-preview="architecture-layers"]').first()).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'On this page' }).getByRole('link', { name: 'Accessibility' })).toHaveAttribute('href', '#accessibility');
  await expect(page.locator('.api-table')).toBeVisible();
  const copy = page.getByRole('button', { name: 'Copy code example' }).first();
  await copy.click();
  await expect(copy).toHaveText('Copied');
  await expect(page.locator('.code-announcer')).toHaveText('Code copied to clipboard');
});

test('System Grid detail keeps progressive enhancement and reduced motion', async ({ page }) => {
  await page.goto('/components/system-grid');
  const preview = page.locator('.primary-preview [data-production-preview="system-grid"]');
  const label = preview.locator('[data-grid-label]').first();
  const finePointer = await page.evaluate(() => matchMedia('(hover:hover) and (pointer:fine)').matches);
  await preview.hover({ position: { x: 240, y: 180 } });
  expect(Boolean(await label.evaluate((element) => (element as HTMLElement).style.getPropertyValue('--proximity')))).toBe(finePointer);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  const reducedPreview = page.locator('.primary-preview [data-production-preview="system-grid"]');
  await reducedPreview.hover({ position: { x: 260, y: 190 } });
  await expect.poll(() => reducedPreview.locator('[data-grid-label]').first().evaluate((element) => (element as HTMLElement).style.getPropertyValue('--proximity'))).toBe('');
});

test('homepage follows the Sprint B1 density rhythm', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-density]')).toHaveCount(10);
  const densitySequence = await page.locator('[data-density]').evaluateAll((sections) => sections.map((section) => section.getAttribute('data-density')));
  expect(densitySequence).toEqual(['balanced','quiet','evidence','balanced','technical','technical','balanced','quiet','quiet','void']);
  await expect(page.locator('.breathing-reset')).toBeVisible();
  await expect(page.locator('.task-trace time').first()).toHaveText('00:00');
  await expect(page.locator('.task-trace time').last()).toHaveText('00:21');
});

test('crawlability files exist', async ({ request }) => {
  expect((await request.get('/robots.txt')).status()).toBe(200);
  expect((await request.get('/sitemap-index.xml')).status()).toBe(200);
  expect((await request.get('/og.svg')).status()).toBe(200);
});
