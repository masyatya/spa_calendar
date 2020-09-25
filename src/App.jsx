import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './components/About';
import { Home } from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
    </div>
  );
}

export default App;
