import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate logo="Fortraiz" />

        <div className="container">
          {this.props.children}
        </div>

        <FooterTemplate logo="Fortraiz"/>
      </div>
    );
  }
}

export default App;
