import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
const FF = process.env.FF || 'ffmpeg';
const [,, out = 'out.mp4', fps = '30', only] = process.argv;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto('file://' + process.cwd() + '/promo-reel.html');
await page.evaluate(() => document.fonts.ready);
await page.waitForLoadState('networkidle');
if (only) { // stills: comma-separated times
  for (const t of only.split(',')) { await page.evaluate(t => render(+t), t); await page.screenshot({ path: `still_${t}.png` }); }
  await browser.close(); process.exit(0);
}
const dur = await page.evaluate(() => DURATION);
const n = Math.round(dur * fps);
const ff = spawn(FF, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', fps, '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
for (let i = 0; i < n; i++) {
  await page.evaluate(t => render(t), i / fps);
  const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  if (i % 150 === 0) console.log(`frame ${i}/${n}`);
}
ff.stdin.end(); await new Promise(r => ff.on('close', r)); await browser.close(); console.log('done', out);
