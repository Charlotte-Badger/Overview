import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import axios from 'axios';
import Rating from './components/Rating.jsx';
import Subjects from './components/Subjects.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {},
      review: {
        average: 3.7,
        total: 16384
      } // hard-coded until API is running
    };
  };

  capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  componentDidMount() {
    const regex = /\d+/;
    let course = window.location.search.match(regex) === null ? 5 : window.location.search.match(regex)[0];
    console.log(course);
    this.getOverview(course);
  }

  getOverview(id = 5) {
    axios.get(`/overview/?courseId=${id}`)
    .then((res) => {
      let overview = res.data;
      let review = this.state.review;
      this.setState({
        overview: overview,
        review: review
      });
      //will need further API calls here /-- these should be calls to external components
    });
  }
  //all data below will be re-factored to draw from state

  render () {
    return (
      <div id="overview">
        <div><Subjects subjects={this.state.overview.subjects} /></div>
        <div id="title">{this.state.overview.title}</div>
        <div id="tagline">{this.state.overview.tagline}</div>
        <div id="bestbox"><span id="bestseller">Bestseller</span></div>
        <div id="rating"><Rating average={this.state.review.average} total={this.state.review.total} students={this.state.overview.students} /></div>
        <div id="author">Created by {faker.name.firstName()} {faker.name.lastName()}</div>
        {/*<div><Updated /></div>*/}
        {/*<div><Wishlist /></div>*/}
        {/*<div><Share /></div>*/}

      </div>
    )
  };

}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
