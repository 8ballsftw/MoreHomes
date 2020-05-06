import React from 'react';
import ReactDOM from 'react-dom';
import MainCarousel from './components/mainCarousel.jsx';
import styled from 'styled-components';
const axios = require('axios');

const HeadingWrapper = styled.div`
  position: relative;
  left: 15%;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      photos: []
    }
    this.onLittleClick = this.onLittleClick.bind(this);
    this.onBigClick = this.onBigClick.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
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
          homeId: 0,
          loaded: true
        })
      })
      .catch(err => console.log(err));
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
    console.log(e.target.value);
    let idx = this.state.homeId;
    let length = this.state.homes.length - 3;
    if (value === "bigRight") {
      idx = Math.min(length, idx + 1);
    } else {
      idx = Math.max(0, idx - 1);
    }
    this.setState({
      homeId: idx
    })
  }

  onPhotoClick() {
    console.log(`takes me to that property's page`)
  }

  render() {
    return (
      <div>
        <HeadingWrapper>
          <h2>More homes you may like</h2>
        </HeadingWrapper>
        <MainCarousel
          homes={this.state.homes}
          photos={this.state.photos}
          homeId={this.state.homeId}
          bigClickHandler={this.onBigClick}
          littleClickHandler={this.onLittleClick}
          photoClickHandler={this.onPhotoClick}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('morehomes'));
