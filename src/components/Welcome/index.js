// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClick: false}

  onSubscribe = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  getButtonText = () => {
    const {isClick} = this.state
    return isClick ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
