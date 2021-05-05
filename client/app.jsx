import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

  render () {
    return (
      <div id="overview">
        <div className="subject">{this.capitalize(faker.random.word())}</div>
        <div className="pointer">   >   </div>
        <div className="subject">{this.capitalize(faker.random.word())}</div>
        <div className="pointer">   >   </div>
        <div className="subject">{this.capitalize(faker.random.word())}</div>
        <div id="title">{this.capitalize(faker.lorem.sentence())}</div>
        <div id="tagline">{this.capitalize(faker.lorem.words())}</div>
        <div id="bestbox"><span id="bestseller">Bestseller</span></div>
      </div>
    )
  };

}

ReactDOM.render(<App />, document.getElementById('app'));
