import axios from 'axios';
import faker from 'faker';
import Rating from './components/Rating.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Subjects from './components/Subjects.jsx';
import moment from 'moment';

const BodyWrapper = styled.div`
  background-color: black;
  padding: 10px;
  `;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  letter-spacing: 0.5px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:600;
  margin-top: 8px;
  margin-bottom: 8px;
  `;

const Tagline = styled.div`
  color: white;
  font-size: 19px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:300;
  margin-top:16px;
  margin-bottom:16px;
  `;

const BestBox = styled.div`
  display:inline;
  `;

const Bestseller = styled.span`
  background-color: #FFE799;
  font-size:12px;
  font-family:"sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 4px 8px;
  border-radius:7%;
  display:inline;
  `;

const RatingWrapper = styled.div`
  margin-top: 8px;
  display: inline;
  color: #FFC48C;
  `;

const AuthorWrapper = styled.div`
  color: white;
  font-size: 14px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:250;
  margin-top:16px;
  margin-bottom:16px;
  `;

const AuthorName = styled.span`
  color: #8ED1DC;
  text-decoration: underline;
  display:inline;
  `;

const TrailingInfo = styled.div`
  color: white;
  font-size: 14px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:250;
  margin-top: 16px;
  margin-bottom: 16px;
  `;

const SmallIcon = styled.svg`
  width: 14px;
  box-sizing: border-box;
  display: inline;
  `;

const InfoText = styled.span`
  margin-left: 8px;
  display: inline;
  `;

const Wishlist = styled.button`
  position: relative;
  color: white;
  height: 40px;
  border: 1px solid white;
  font-weight: 700;
  background: black;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  min-width: 10rem;
  padding: 0 1.2rem;
  `;

const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  `;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {},
      review: {
        average: 0,
        total: 0
      },
      updatedAt: '1-1-2021',
      wishlist: false
    };
    this.wishClick = this.wishClick.bind(this);
  }

  componentDidMount() {
    const regex = /\d+/;
    let course = window.location.search.match(regex) === null ? 5 : window.location.search.match(regex)[0];
    console.log(course);
    console.log('Updated at', moment(this.state.updatedAt).format('M/YYYY'));
    this.getOverview(course);
  }

  getOverview(id = 5) {
    axios.get(`http://localhost:3000/overview/?courseId=${id}`)
      .then((res) => {
        let overview = res.data;
        let review = this.state.review;
        this.setState({
          overview: overview
        });
        //will need further API calls here /-- these should be calls to external components
      })
      .then(() => {
        axios.get(`http://localhost:2712/reviews/item?courseId=${id}`)
        .then((res) => {
          console.log(res.data);
          let overallRating = res.data.ratings.overallRating;
          let totalRatings = res.data.ratings.totalRatings;
          this.setState({
            review: {
              average: overallRating,
              total: totalRatings
            }
          });
        })
        .then(() => {
          axios.get(`http://ec2-18-130-234-175.eu-west-2.compute.amazonaws.com:9800/course/item?courseId=${id}`)
          .then((res) => {
            let updatedAt = res.data.updatedAt;
            this.setState({
              updatedAt: updatedAt
            });
          })
          .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  wishClick () {
    console.log('Wish clicked');
    this.setState({ wishlist: !this.state.wishlist });
    console.log(this.state.wishlist);
  }

  render () {
    return (
      <BodyWrapper>
        <div><Subjects subjects={this.state.overview.subjects} /></div>
        <Title>{this.state.overview.title}</Title>
        <Tagline>{this.state.overview.tagline}</Tagline>
        <BestBox><Bestseller>Bestseller</Bestseller></BestBox>
        <RatingWrapper><Rating average={this.state.review.average} total={this.state.review.total} students={this.state.overview.students} /></RatingWrapper>
        <AuthorWrapper>Created by <AuthorName>Constanza Nomina</AuthorName></AuthorWrapper>
        <TrailingInfo>
          <SmallIcon viewBox="0 0 24 24">
            <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white">
            </path>
          </SmallIcon>
          <InfoText>Last updated {moment(this.state.updatedAt).format('M/YYYY')}</InfoText>
        </TrailingInfo>
        <TrailingInfo>
          <SmallIcon viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" fill="white">
            </path>
          </SmallIcon>
          <InfoText>{this.state.overview.language}</InfoText>
        </TrailingInfo>
        <TrailingInfo>
          <SmallIcon viewBox="0 0 24 24">
              <path d="M20.4 2.4H3.6a2.4 2.4 0 00-2.4 2.4v14.4a2.4 2.4 0 002.4 2.4h16.8c1.32 0 2.4-1.08 2.4-2.4V4.8c0-1.32-1.08-2.4-2.4-2.4zm-9.6 8.4H9v-.6H6.6v3.6H9v-.6h1.8v1.2c0 .66-.54 1.2-1.2 1.2H6c-.66 0-1.2-.54-1.2-1.2V9.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.2zm8.4 0h-1.8v-.6H15v3.6h2.4v-.6h1.8v1.2c0 .66-.54 1.2-1.2 1.2h-3.6c-.66 0-1.2-.54-1.2-1.2V9.6c0-.66.54-1.2 1.2-1.2H18c.66 0 1.2.54 1.2 1.2v1.2z" fill="white">
              </path>
          </SmallIcon>
          <InfoText>{this.state.overview.captions ? this.state.overview.captions.join(', ') : null}</InfoText>
        </TrailingInfo>
        <Wishlist onClick={this.wishClick}>Add to Wishlist
          <HeartIcon viewbox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeWidth="1" stroke="white" fill="red">
                </path>
          </HeartIcon>
        </Wishlist>

        {/*<div><Wishlist /></div>*/}
        {/*<div><Share /></div>*/}
      </BodyWrapper>
    );
  }
}

ReactDOM.render(<Overview />, document.getElementById('overview'));

export default Overview;