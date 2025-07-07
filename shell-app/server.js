import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Shell App</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Shell SSR server running at http://localhost:3000');
});
