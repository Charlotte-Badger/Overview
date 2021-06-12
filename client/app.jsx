import ApplyCoupon from './components/ApplyCoupon.jsx';
import axios from 'axios';
import Captions from './components/Captions.jsx';
import Gift from './components/Gift.jsx';
import Infobar from './components/Infobar.jsx';
import moment from 'moment';
import Rating from './components/Rating.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Share from './components/Share.jsx';
import ShareModal from './components/ShareModal.jsx';
import styled from 'styled-components';
import Subjects from './components/Subjects.jsx';
import Wishlist from './components/Wishlist.jsx';
import { BodyWrapper, BodyContentWrapper, Title, Tagline, BestBox, Bestseller, RatingWrapper, AuthorWrapper, AuthorName, TrailingInfo, SmallIcon, InfoText, UpdatedIcon, GlobeIcon, CCIcon, ButtonWrapper, ButtonBreak, SmallWrapper, LineBreak, Buy, BuyContents, BuyText, BuyPriceText, RadioButton, AddToCartWrapper, AddToCart, Conditions, SubscribeText, PersonalPlan, PlanHeader, CheckIcon, PersonalText, PlanItem, LearnMore, CostFloat, PreviewVideo, PreviewVideoImage, VideoOverlay, VideoSVG, VideoWrapper } from './components/Styles.jsx';

const bestseller = (average, ratings, total) => average >= 3.7 && ratings >= 50 && total >= 50000;

const lower = (str) => str.slice(0, 1).toLowerCase() + str.slice(1);

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {},
      review: {
        average: 0,
        total: 0
      },
      author: {},
      price: {},
      video: {},
      updatedAt: '1-1-2021',
      showModal: false,
      captionsExpanded: false,
      buy: true,
      matches: window.matchMedia('(min-width: 1080px)').matches
    };
    this.shareClick = this.shareClick.bind(this);
    this.captionsClick = this.captionsClick.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
  }

  componentDidMount() {
    const regex = /\d+/;
    let course = window.location.search.match(regex) === null ? 5 : window.location.search.match(regex)[0];
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia('(min-width: 1080px)').addListener(handler);
    this.getOverview(course);
  }

  componentDidUpdate() {
    ReactDOM.render(<Infobar title={this.state.overview.title} showBest={bestseller(this.state.review.average, this.state.review.total, this.state.overview.students)} average={this.state.review.average} total={this.state.review.total} students={this.state.overview.students} price={this.state.price.basePrice}/>, document.getElementById('infobar'));
  }

  getOverview(id = 5) {
    axios.get(`http://ec2-54-234-67-3.compute-1.amazonaws.com:3000/overview/?courseId=${id}`)
      .then((res) => {
        let overview = res.data;
        let review = this.state.review;
        this.setState({
          overview: overview
        });
      })
      .then(() => {
        axios.get(`http://ec2-18-144-171-42.us-west-1.compute.amazonaws.com:2712/reviews/item?courseId=${id}`)
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
              .then(() => {
                axios.get(`http://ec2-3-95-223-55.compute-1.amazonaws.com:4095/author/?authorId=${this.state.overview.author}`)
                  .then((res) => {
                    this.setState({
                      author: res.data
                    });
                  })
                  .then(() => {
                    axios.get(`http://13.57.183.76:3004/price/?courseId=${id}`)
                      .then((res) => {
                        this.setState({
                          price: res.data
                        });
                      })
                      .then(() => {
                        axios.get(`http://13.57.183.76:3004/previewVideo/?courseId=${id}`)
                          .then((res) => {
                            this.setState({
                              video: res.data
                            });
                          });
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  shareClick (e) {
    console.log(e.target);
    if (e.target.id.indexOf('share') !== -1) {
      this.setState({
        showModal: true
      });
    }
    if (e.target.id.indexOf('close') !== -1 && this.state.showModal) {
      this.setState({
        showModal: false
      });
    }
  }

  captionsClick () {
    this.setState({captionsExpanded: true});
  }

  captionSpan () {
    return (
      <span>, <span text-decoration="underline" onClick={this.captionsClick}>4 more</span></span>
    );
  }

  handleBuy (e) {
    if (e.target.id === 'overview-buy-course') {
      this.setState({buy: true});
    } else if (e.target.id === 'overview-subscribe') {
      this.setState({buy: false});
    }
  }

  render () {
    return (
      <BodyWrapper>
        <ShareModal showModal={this.state.showModal} handleClick={this.shareClick} />
        <div><Subjects subjects={this.state.overview.subjects} /></div>
        <VideoWrapper>
          <a href={this.state.video.previewVideoUrl}>
            <PreviewVideo>
              <PreviewVideoImage alt="Preview video image for this class." src={this.state.video.previewVideoImgUrl} />
              <VideoOverlay />
              <VideoSVG xmlns="http://www.w3.org/2000/svg">
                <ellipse stroke="#000" strokeWidth="0" ry="32" rx="31.50001" id="svg_2" cy="50%" cx="50%" fill="#ffffff"></ellipse>
                <path transform="rotate(90 172.951 96)" stroke="#000" id="svg_9" d="m161.10466,107.73892l11.84616,-23.47785l11.84616,23.47785l-23.69232,0z" fill="#000000"></path>
              </VideoSVG>
              <span class="sidebar-preview-video-overlay-text sidebar-tight-letters">Preview this course</span>
            </PreviewVideo>
          </a>
        </VideoWrapper>
        <Title>{this.state.overview.title}</Title>
        <Tagline>{this.state.overview.tagline}</Tagline>
        <BestBox id="best" showBest={bestseller(this.state.review.average, this.state.review.total, this.state.overview.students)}><Bestseller>Bestseller</Bestseller></BestBox>
        <RatingWrapper><Rating average={this.state.review.average} total={this.state.review.total} students={this.state.overview.students} condensed={false} /></RatingWrapper>
        <AuthorWrapper>Created by <AuthorName href="#author">{this.state.author.firstName} {this.state.author.lastName}</AuthorName></AuthorWrapper>
        <TrailingInfo>
          <SmallIcon margin-bottom="4px" viewBox="0 0 24 24">
            {UpdatedIcon}
          </SmallIcon>
          <InfoText>Last updated {moment(this.state.updatedAt).format('M/YYYY')}</InfoText>
        </TrailingInfo>
        <TrailingInfo>
          <SmallIcon viewBox="0 0 24 24">
            {GlobeIcon}
          </SmallIcon>
          <InfoText>{this.state.overview.language}</InfoText>
        </TrailingInfo>
        <TrailingInfo>
          <SmallIcon viewBox="0 0 24 24">
            {CCIcon}
          </SmallIcon>
          <InfoText><Captions captions={this.state.overview.captions} expanded={this.state.captionsExpanded} handleClick={this.captionsClick}/></InfoText>
        </TrailingInfo>
        {!this.state.matches && (
          <SmallWrapper>
            <LineBreak />
            <Buy>
              <RadioButton id='overview-buy-course' buy={this.state.buy} onClick={this.handleBuy}/><BuyText>Buy Course</BuyText><CostFloat big={true} buy={this.state.buy}>${this.state.price.basePrice}</CostFloat>
            </Buy>
            <BuyContents buy={this.state.buy}>
              <BuyPriceText>${this.state.price.basePrice}</BuyPriceText>
              <AddToCartWrapper>
                <AddToCart>
                  Add to cart
                </AddToCart>
              </AddToCartWrapper>
              <Conditions>
                30-Day Money-Back Guarantee
              </Conditions>
              <Conditions>
                Full Lifetime Access
              </Conditions>
            </BuyContents>
          </SmallWrapper>
        )}
        <ButtonWrapper matches={this.state.matches} buy={this.state.buy}>
          <Wishlist />
          <Share handleClick={this.shareClick} />
          <ButtonBreak>
            <Gift />
            <ApplyCoupon />
          </ButtonBreak>
        </ButtonWrapper>
        {!this.state.matches && (
          <SmallWrapper>
            <LineBreak />
            <Buy>
              <RadioButton id='overview-subscribe' buy={!this.state.buy} onClick={this.handleBuy}/><BuyText>Subscribe</BuyText><CostFloat big={false} buy={!this.state.buy}>Free Trial</CostFloat>

              <SubscribeText buy={this.state.buy}>Get this course plus top-rated picks in {this.state.overview.subjects ? this.state.overview.subjects[1] : null} and other popular topics <LearnMore buy={this.state.buy} href='http://udemy.com/personal-plan'>Learn More</LearnMore></SubscribeText>
            </Buy>
            <BuyContents buy={!this.state.buy}>
              <AddToCartWrapper>
                <AddToCart>
                  Try it free for 7 days
                </AddToCart>
              </AddToCartWrapper>
              <Conditions>
                  $19.99 per month after trial
              </Conditions>
              <PersonalPlan>
                <PlanHeader>
                  Personal Plan
                </PlanHeader>
                <PlanItem>
                  <SmallIcon viewBox="0 0 24 24">
                    {CheckIcon}
                  </SmallIcon>
                  <PersonalText>
                    Access to 5,000+ top courses
                  </PersonalText>
                </PlanItem>
                <PlanItem>
                  <SmallIcon viewBox="0 0 24 24">
                    {CheckIcon}
                  </SmallIcon>
                  <PersonalText>
                    Courses in {this.state.overview.subjects ? (lower(this.state.overview.subjects[0]) + ', ' + lower(this.state.overview.subjects[1])) : null}, and more
                  </PersonalText>
                </PlanItem>
                <PlanItem>
                  <SmallIcon viewBox="0 0 24 24">
                    {CheckIcon}
                  </SmallIcon>
                  <PersonalText>
                    Practice tests, exercises, and Q & A
                  </PersonalText>
                </PlanItem>
              </PersonalPlan>
              <LineBreak />
            </BuyContents>
          </SmallWrapper>
        )}
      </BodyWrapper>
    );
  }
}

ReactDOM.render(<Overview />, document.getElementById('overview'));

export default Overview;

//