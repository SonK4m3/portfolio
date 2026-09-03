import { test, expect } from '@playwright/test';

const routes = ['/', '/work', '/work/notex', '/about', '/notes', '/playground', '/type-proof'];

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

test('keyboard focus and reduced motion are supported', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toHaveCount(1);
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('html')).toBeVisible();
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

test('small viewport has no horizontal overflow', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
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
  await expect(page.locator('.architecture-map .map-node')).toHaveCount(8);
  await expect(page.locator('.task-trace li')).toHaveCount(8);
  await expect(page.getByRole('link', { name: 'Explore the NoteX architecture' })).toHaveAttribute('href', '/work/notex#designing-the-frontend-architecture');
  await expect(page.getByRole('heading', { name: 'What I own.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Generation is easy/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Experiments/ })).toBeVisible();
  await expect(page.locator('.how-i-build li')).toHaveCount(3);
  await expect(page.getByRole('heading', { name: /The principles only matter/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Build something thoughtful/ })).toBeVisible();
});

test('crawlability files exist', async ({ request }) => {
  expect((await request.get('/robots.txt')).status()).toBe(200);
  expect((await request.get('/sitemap-index.xml')).status()).toBe(200);
  expect((await request.get('/og.svg')).status()).toBe(200);
});
