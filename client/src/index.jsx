import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MainCarousel from './components/mainCarousel.jsx';

const axios = require('axios');

const BodyWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
`

const HeadingWrapper = styled.div`
  position: relative;
  left: 14.5%;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      photos: [],
      hearts: [],
      leftButton: false,
      rightButton: true,
      hovered: null,
    }
    this.onBigClick = this.onBigClick.bind(this);
    this.onLittleClick = this.onLittleClick.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onPhotoHover = this.onPhotoHover.bind(this);
    this.onHeartClick = this.onHeartClick.bind(this);
  }


  componentDidMount() {
    let getArr = [];
    let zeroArr = [];
    let boolArr = [];
    while (getArr.length < 12) {
      let rand = Math.floor(Math.random() * 100) + 1;
      if (getArr.indexOf(rand) === -1) {
        getArr.push(rand);
        zeroArr.push(0);
        boolArr.push(false);
      }
    }
    let request = {
      method: 'PUT',
      url : '/init',
      data: {id: JSON.stringify(getArr)}
    }
    axios(request)
      .then(res => {
        this.setState ({
          homes: res.data,
          photos: zeroArr,
          hearts: boolArr,
          homeId: 0
        })
      })
      .catch(err => console.log(err));
  }

  onLittleClick(e) {
    // splits the return into "direction" and "index"
    let className = e.target.className.split(' ');
    let idx = className[3];
    let value = className[2]
    let photoArr = this.state.photos;
    // length of the photo array
    let length = this.state.homes[idx].photos.length - 1;
    if (value === 'right') {
      photoArr[idx] === length
        ? photoArr[idx] = 0
        : photoArr[idx]++;
    } else if (value === 'left') {
      photoArr[idx] === 0
        ? photoArr[idx] = length
        : photoArr[idx]--;
    }
    this.setState({
      photos: photoArr
    })
  }

  onBigClick(e) {
    let className = e.target.className.split(' ')
    let value = className[className.length - 1]
    let idx = this.state.homeId;
    let length = this.state.homes.length - 3;

    value === "bigRight"
      ? idx = Math.min(length, idx + 1)
      : idx = Math.max(0, idx - 1);

    let left = this.state.leftButton;
    let right = this.state.rightButton;
    idx === 0 ? left = false : left = true;
    idx === length ? right = false : right = true;

    this.setState({
      homeId: idx,
      leftButton: left,
      rightButton: right
    })
  }

  onPhotoClick() {
    console.log(`takes me to that property's page`)
  }

  onHeartClick(e) {
    let className = e.target.className.split(' ');
    let id = className[className.length - 1];
    let heartArr = this.state.hearts;
    heartArr[id] = !heartArr[id];
    this.setState({hearts: heartArr});
  }

  onPhotoHover(e, bool) {
    bool
      ? this.setState({hovered: e})
      : this.setState({hovered: null})
  }

  render() {
    if (this.state.homes.length === 0) return <div></div>
    return (
      <BodyWrapper>
        <HeadingWrapper>
          <h2 id="title">More homes you may like</h2>
        </HeadingWrapper>
        <MainCarousel
          homes={this.state.homes}
          photos={this.state.photos}
          hearts={this.state.hearts}
          homeId={this.state.homeId}
          leftButton={this.state.leftButton}
          rightButton={this.state.rightButton}
          hovered={this.state.hovered}
          bigClickHandler={this.onBigClick}
          littleClickHandler={this.onLittleClick}
          photoClickHandler={this.onPhotoClick}
          photoHoverHandler={this.onPhotoHover}
          heartClickHandler={this.onHeartClick}
        />
      </BodyWrapper>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('morehomes'));
