import React from 'react';
import ReactDOM from 'react-dom';
import MainCarousel from './components/mainCarousel.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let getArr = [];
    while (getArr.length < 12) {
      let rand = Math.floor(Math.random() * 100);
      if (getArr.indexOf(rand) === -1) getArr.push(rand);
    }

    let request = {
      method: 'PUT',
      url : '/init',
      data: {id: JSON.stringify(getArr)}
    }

    axios(request)
      .then(res => {
        console.log(res.data)
        this.setState ({
          homes: res.data
        })
      })
      .catch(err => console.log(err));
  }

  onClick(e) {
    console.log("clicked")
    console.log(e)
  }

  render() {
    if (this.state.homes.length !== 0) {
      console.log('arr there')
      return (
        <div>
          <h1 onClick={(e)=>this.onClick(e)}>App Component</h1>
          {this.state.homes.map((home, index) => (
            <MainCarousel home={home} index={index + 1} key={index} clickHandler={this.onClick} />
          ))}
        </div>
      )
    } else {
      console.log('arr not there')
      return (
        <div></div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('morehomes'));