import React from 'react';
import ReactDOM from 'react-dom';
import MainCarousel from './components/mainCarousel.jsx';
import styled from 'styled-components';
const axios = require('axios');

const HeadingWrapper = styled.div`
  position: relative;
  left: 14%;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      photos: [],
      leftButton: false,
      rightButton: true,
      hovered: null,
    }
    this.onLittleClick = this.onLittleClick.bind(this);
    this.onBigClick = this.onBigClick.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onPhotoHover = this.onPhotoHover.bind(this);
    this.onHeartClick = this.onHeartClick.bind(this);
  }

  componentDidMount() {
    let getArr = [];
    let photoArr = [];
    while (getArr.length < 12) {
      let rand = Math.floor(Math.random() * 100) + 1;
      if (getArr.indexOf(rand) === -1) {
        getArr.push(rand);
        photoArr.push(0);
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
          photos: photoArr,
          homeId: 0
        })
      })
      .catch(err => console.log(err));
  }

  onHeartClick(e) {
    console.log('heart click')
    console.log(e.target.value)
    // let element = document.getElementById(e.target.value.id)
    // console.log(element);
    // e.scroll(0,0)
  }

  onLittleClick(e) {
    // splits the return into "direction" and "index"
    let target = e.target.value.split(' ')
    let photoArr = this.state.photos;
    // length of the photo array
    let length = this.state.homes[target[1]].photos.length - 1;
    if (target[0] === 'right') {
      photoArr[target[1]] === length
        ? photoArr[target[1]] = 0
        : photoArr[target[1]]++;
    } else if (target[0] === 'left') {
      photoArr[target[1]] === 0
        ? photoArr[target[1]] = length
        : photoArr[target[1]]--;
    }
    this.setState({
      photos: photoArr
    })
  }

  onBigClick(e) {
    let value = e.target.value;
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

  onPhotoHover(e, bool) {
    bool ? this.setState({hovered: e}) : this.setState({hovered: null})
  }

  render() {
    if (this.state.homes.length === 0) return <div>Loading!</div>
    return (
      <div>
        <HeadingWrapper>
          <h2>More homes you may like</h2>
        </HeadingWrapper>
        <MainCarousel
          homes={this.state.homes}
          photos={this.state.photos}
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('morehomes'));
