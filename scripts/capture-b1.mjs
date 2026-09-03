import { chromium } from '@playwright/test';
import { mkdir, rm, rename } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const baseUrl = 'http://localhost:4321/';
const videoDir = path.join(root, 'artifacts', 'b1-video-temp');
const screenshotsOnly = process.argv.includes('--screens-only');

await rm(videoDir, { recursive: true, force: true });
await mkdir(videoDir, { recursive: true });

const browser = await chromium.launch();

async function createPage(viewport, recordVideo = false) {
  const context = await browser.newContext({
    viewport,
    colorScheme: 'dark',
    reducedMotion: 'reduce',
    ...(recordVideo ? { recordVideo: { dir: videoDir, size: viewport } } : {}),
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  return { context, page };
}

async function captureViewport(page, selector, filename, align = 'center') {
  const target = page.locator(selector);
  await target.scrollIntoViewIfNeeded();
  await target.evaluate((element, alignment) => {
    const rect = element.getBoundingClientRect();
    const top = alignment === 'start'
      ? window.scrollY + rect.top - 96
      : window.scrollY + rect.top + Math.max(0, (rect.height - window.innerHeight) / 2);
    window.scrollTo({ top, behavior: 'instant' });
  }, align);
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(root, filename) });
}

{
  const { context, page } = await createPage({ width: 1440, height: 900 });
  await page.screenshot({ path: path.join(root, 'homepage-b1-1440-full.png'), fullPage: true });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: path.join(root, 'homepage-b1-hero-1440.png') });
  await captureViewport(page, '.notex-evidence, .notex-visual', 'homepage-b1-notex-1440.png');
  await captureViewport(page, '.architecture-map', 'homepage-b1-architecture-1440.png');
  await captureViewport(page, '.ai-field', 'homepage-b1-ai-1440.png', 'start');
  await captureViewport(page, '.about-home', 'homepage-b1-about-1440.png');
  await context.close();
}

{
  const { context, page } = await createPage({ width: 390, height: 844 });
  await page.screenshot({ path: path.join(root, 'homepage-b1-mobile-390-full.png'), fullPage: true });
  await context.close();
}

async function recordScroll(viewport, outputName, steps, pauseMs) {
  const { context, page } = await createPage(viewport, true);
  const video = page.video();
  const maxScroll = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
  const step = maxScroll / steps;
  for (let index = 0; index < steps; index += 1) {
    await page.mouse.wheel(0, step);
    await page.waitForTimeout(pauseMs);
  }
  await page.waitForTimeout(700);
  await page.close();
  const source = await video.path();
  await context.close();
  const target = path.join(root, outputName);
  await rm(target, { force: true });
  await rename(source, target);
}

if (!screenshotsOnly) {
  await recordScroll({ width: 1440, height: 900 }, 'homepage-b1-desktop-scroll.webm', 72, 240);
  await recordScroll({ width: 390, height: 844 }, 'homepage-b1-mobile-390-scroll.webm', 72, 240);
}

await browser.close();
await rm(videoDir, { recursive: true, force: true });
