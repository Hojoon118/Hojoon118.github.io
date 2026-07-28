import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hojoon Kim — Software Engineer &amp; Applied AI<\/title>/i);
  assert.match(html, /<h1>Hojoon<br\/>Kim<\/h1>/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="experience"/);
  assert.match(html, /LLM Mathematical Reasoning/);
  assert.match(
    html,
    /Improved mathematical reasoning accuracy from a 40% baseline to 67\.1% using controlled prompting and systematic evaluation\./,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps anchor navigation responsive and AI copy legible", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    css,
    /html\s*\{[^}]*scroll-behavior:\s*auto;[^}]*scroll-padding-top:\s*78px;/s,
  );
  assert.match(
    css,
    /\.section\[id\],\s*\.contact-section\[id\]\s*\{\s*scroll-margin-top:\s*78px;\s*\}/,
  );
  assert.match(
    css,
    /\.ai-project\s+\.project-lead\s*\{\s*color:\s*#f5f8f7\s*!important;\s*\}/,
  );
  assert.doesNotMatch(css, /html\s*\{\s*scroll-behavior:\s*smooth;/);
});
