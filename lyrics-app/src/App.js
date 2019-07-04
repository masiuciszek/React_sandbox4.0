import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import Lyricks from './components/tracks/Lyricks';
import LyricProvider from './context';

export default function App() {
  return (
    <Router>
      <LyricProvider>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyricks} />
          </Switch>
        </div>
      </LyricProvider>
    </Router>
  );
}
