import React, {PureComponent} from 'react';
import { BrowserRouter} from 'react-router-dom';

import Routing from './components/Routing';

import './App.css';

class App extends PureComponent {

  render(){

    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
