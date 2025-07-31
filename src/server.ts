import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const browserDistFolder = join(import.meta.dirname, '../browser');
const app = express();
const angularApp = new AngularNodeAppEngine();

// ==================== Добавьте этот блок ПЕРЕД app.use(express.static) ====================
// Обработка robots.txt
app.get('/robots.txt', (req, res) => {
  const filePath = join(browserDistFolder, 'robots.txt');
  if (existsSync(filePath)) {
    res.type('text/plain');
    res.set('Cache-Control', 'public, max-age=86400'); // Кеширование 1 день
    res.sendFile(filePath);
  } else {
    res.status(404).end();
  }
});

// Обработка sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  const filePath = join(browserDistFolder, 'sitemap.xml');
  if (existsSync(filePath)) {
    res.type('application/xml');
    res.set('Cache-Control', 'public, max-age=86400'); // Кеширование 1 день
    res.sendFile(filePath);
  } else {
    res.status(404).end();
  }
});
// ========================================================================================

// Оригинальный код остается без изменений
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);