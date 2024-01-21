import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: 'hide', lastName: 'hide'}

  firstNameStatus = () => {
    this.setState(prevState => ({
      firstName: prevState.firstName === 'hide' ? 'show' : 'hide',
    }))
  }

  lastNameStatus = () => {
    this.setState(prevState => ({
      lastName: prevState.lastName === 'hide' ? 'show' : 'hide',
    }))
  }

  getContainer1 = () => {
    const {firstName} = this.state

    if (firstName === 'hide') {
      return null // Return null instead of an empty div
    }

    return <p className="show-name-container">Joe</p>
  }

  getContainer2 = () => {
    const {lastName} = this.state

    if (lastName === 'hide') {
      return null // Return null instead of an empty div
    }

    return <p className="show-name-container">Jonas</p>
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="first-name-container">
            <button onClick={this.firstNameStatus} type="button">
              Show/Hide FirstName
            </button>
            {this.getContainer1()}
          </div>
          <div className="last-name-container">
            <button onClick={this.lastNameStatus} type="button">
              Show/Hide LastName
            </button>
            {this.getContainer2()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
