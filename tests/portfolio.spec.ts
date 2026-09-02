import { test, expect } from '@playwright/test';

const routes = ['/', '/work', '/work/notex', '/about', '/notes', '/playground'];

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
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page).toHaveURL(/\/work\/?$/);
  await page.getByRole('link', { name: 'About', exact: true }).click();
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

test('small viewport has no horizontal overflow', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});

test('crawlability files exist', async ({ request }) => {
  expect((await request.get('/robots.txt')).status()).toBe(200);
  expect((await request.get('/sitemap-index.xml')).status()).toBe(200);
  expect((await request.get('/og.svg')).status()).toBe(200);
});
