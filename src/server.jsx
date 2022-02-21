import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import LandingPage from './apps/landingPage/main';
import Dashboard from './apps/dashboard/main';

const app = express();

app.use(express.static('./dist'));
app.use('/admin', express.static('./dist/dashboard'));
app.use('/', express.static('./dist/landingPage'));

app.get(['/', '/about'], (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <LandingPage />
    </StaticRouter>
  );
  res.send(`<!DOCTYPE html> ${html}`);
});
app.get(['/admin', '/admin/info'], (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <Dashboard />
    </StaticRouter>
  );
  res.send(`<!DOCTYPE html> ${html}`);
});

app.get(['*', '/admin*'], (req, res) => {
  const html = ReactDOMServer.renderToString(<h1>404 - Not found</h1>);
  res.send(`<!DOCTYPE html> ${html}`);
});

app.listen(3000, () => console.log('Server running at 3000')); // eslint-disable-line no-console
