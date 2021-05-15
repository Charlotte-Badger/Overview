import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import axios from 'axios';
import Rating from './components/Rating.jsx';
import Subjects from './components/Subjects.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  componentDidMount() {
    this.getOverview();
    console.log(this.state);
  }

  getOverview(id = 1) {
    axios.get(`/overview/?courseId=${id}`)
    .then((res) => {
      let overview = res.data;
      this.setState({overview});
      console.log(overview);
      //will need further API calls here -- these should be calls to external components
    });
  }
  //all data below will be re-factored to draw from state

  render () {
    return (
      <div id="overview">
        <div><Subjects subjects={this.state.subjects} /></div>
        <div id="title">{this.state.overview.title}</div>
        <div id="tagline">{this.state.overview.tagline}</div>
        <div id="bestbox"><span id="bestseller">Bestseller</span></div>
        {/*<div><Rating /></div>}*/}
        <div id="author">Created by {faker.name.firstName()} {faker.name.lastName()}</div>
        {/*<div><Updated /></div>*/}
        {/*<div><Wishlist /></div>*/}
        {/*<div><Share /></div>*/}

      </div>
    )
  };

}

ReactDOM.render(<App />, document.getElementById('app'));

export { App };
