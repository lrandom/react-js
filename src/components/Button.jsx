import  { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    //Javascript Object 
    this.state = {
      counter: 0
    }
  }

  componentWillMount(){
    console.log("componentWillMount")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentWillUpdate() {
    console.log("componentWillUpdate")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  _updateCounter(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <button className='btn' onClick={() => this._updateCounter()}>
        {this.props.content} {this.state.counter}
      </button>
    );
  }
}

export default Button;