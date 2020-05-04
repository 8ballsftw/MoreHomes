import React from 'react';
import ReactDOM from 'react-dom';
import MainCarousel from './components/mainCarousel.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      homes: [],
      photos: []
      // homeId: 0
    }
    this.onLittleClick = this.onLittleClick.bind(this);
    this.onBigClick = this.onBigClick.bind(this);
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

    console.log(getArr)

    let request = {
      method: 'PUT',
      url : '/init',
      data: {id: JSON.stringify(getArr)}
    }

    axios(request)
      .then(res => {
        console.log(res.data)
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
    let target = e.target.value.split(' ')
    let photoArr = this.state.photos;
    console.log(photoArr);
    let length = this.state.homes[target[1]].photos.length - 1;
    if (target[0] === 'right') {
      photoArr[target[1]] = Math.min(length, photoArr[target[1]] + 1);
    } else if (target[0] === 'left') {
      photoArr[target[1]] = Math.max(0, photoArr[target[1]] - 1);
    }
    this.setState({
      photos: photoArr
    })
  }

  onBigClick(e) {
    let value = e.target.value;
    let idx = this.state.homeId;
    let length = this.state.homes.length - 1;
    console.log(this.state.homeId)
    console.log(Math.min(length, idx + 1))
    if (value === "bigRight") {
      idx = Math.min(length, idx + 1)
    } else {
      idx = Math.max(0, idx - 1)
    }
    this.setState({
      homeId: idx
    })
  }

  render() {
    return (
      <div>
        <h1>App Component</h1>
        <MainCarousel
          homes={this.state.homes}
          photos={this.state.photos}
          homeId={this.state.homeId}
          bigClickHandler={this.onBigClick}
          littleClickHandler={this.onLittleClick} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('morehomes'));