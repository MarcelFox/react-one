import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import LandingPage from './apps/landingPage/main';
import Dashboard from './apps/dashboard/main';

const app = express();

app.use(express.static('./public'));
app.use('/', express.static('./public/landingPage'));
app.use('/admin', express.static('./public/dashboard'));

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      {() => {
        if (req.url.includes('admin')) {
          return <Dashboard />;
        }
        return <LandingPage />;
      }}
    </StaticRouter>
  );
  res.send(`<!DOCTYPE html> ${html}`);
});

app.listen(3000, () => console.log('Server running at 3000')); // eslint-disable-line no-console
