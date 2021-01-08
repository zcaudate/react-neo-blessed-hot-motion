import 'raf/polyfill';
import React, {Component} from 'react';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {completion: 0};

    const interval = setInterval(() => {
      if (this.state.completion >= 100)
        return clearInterval(interval);

      this.setState({completion: this.state.completion + 10});
    }, 1000);
  }

  render() {
    return <progressbar orientation="horizontal"
                        filled={10}
                        top="80%"
                        left="center"
                        height="15%"
                        width="80%"
                        label="progress"
                        border={{type: 'line'}}
                        style={{border: {fg: 'red'}, bar: {bg: 'red'}}} />
  }
}