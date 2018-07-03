import React from 'react';
import Navigation from './navigation.js';
import Content from './content.js';
import Footer from './footer.js';

export default class App extends React.Component {
  render() {
    const  message = "Hello There!";
    return (
      <div>
        <Navigation />
        <Content />
        <Footer />
      </div>
    )
  }
}
