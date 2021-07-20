import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '@Domain/example/home/components/Navbar';
import Home from '@Domain/example/home/components/Home';
import About from '@Domain/example/home/components/About';
import PageNotFound from '@Domain/example/home/components/PageNotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
