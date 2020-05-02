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
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>App Component</h1>
        <MainCarousel />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('morehomes'));