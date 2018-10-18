import React, { Component } from 'react';

import Test from './Test';
import '../assets/css/style.css';
import image from '../assets/images/image.png';

class App extends Component {
  render() {
    const title = 'Hello React Babel7 Skeleton';
    return (
      <div>
        <h1 className="hello">{title}</h1>
        <img src={image} />
        <Test />
      </div>
    );
  }
}

export default App;
