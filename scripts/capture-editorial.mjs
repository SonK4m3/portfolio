import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

const baseURL = process.env.PREVIEW_URL || 'http://127.0.0.1:4322';
const directory = '.impeccable/review';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch();
const reports = [];
try {
  for (const [name, viewport, theme, route] of [
    ['desktop', { width: 1440, height: 1000 }, 'light', '/'],
    ['mobile', { width: 390, height: 844 }, 'light', '/'],
    ['tablet', { width: 768, height: 1024 }, 'light', '/'],
    ['dark', { width: 1440, height: 1000 }, 'dark', '/'],
    ['about', { width: 1440, height: 1000 }, 'light', '/about'],
    ['about-mobile', { width: 390, height: 844 }, 'light', '/about'],
    ['work', { width: 1440, height: 1000 }, 'light', '/work'],
    ['work-mobile', { width: 390, height: 844 }, 'light', '/work'],
    ['notes', { width: 1440, height: 1000 }, 'light', '/notes'],
    ['playground-mobile', { width: 390, height: 844 }, 'light', '/playground'],
  ]) {
    const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(value => localStorage.setItem('portfolio-theme', value), theme);
    await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    for (const img of await page.locator('img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(image => image.decode());
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `${directory}/${name}.png`, fullPage: true });
    await page.screenshot({ path: `${directory}/${name}-viewport.png` });
    if (name === 'desktop' || name === 'mobile') {
      const captureStyle = await page.addStyleTag({ content: '.site-header { visibility:hidden !important; }' });
      for (const selector of ['.work-spread', '.systems-spread', '.lab-spread', '.closing-spread']) {
        await page.locator(selector).screenshot({ path: `${directory}/${name}-${selector.slice(1)}.png` });
      }
      await captureStyle.evaluate(element => element.remove());
    }
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      outliers: Array.from(document.querySelectorAll('main *')).filter(element => {
        const rect = element.getBoundingClientRect();
        return rect.width && (rect.left < -1 || rect.right > innerWidth + 1);
      }).slice(0, 12).map(element => ({ tag: element.tagName, class: element.className })),
      images: Array.from(document.images).map(img => ({ source: img.currentSrc, loaded: img.complete && img.naturalWidth > 0 })),
    }));
    reports.push({ name, route, theme, ...layout, errors });
    await page.close();
  }
  await writeFile(`${directory}/browser-report.json`, JSON.stringify(reports, null, 2));
  console.log(JSON.stringify(reports, null, 2));
} finally { await browser.close(); }
