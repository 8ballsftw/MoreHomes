import React from 'react';
import ReactDOM from 'react-dom';
import MainCarousel from './components/mainCarousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

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