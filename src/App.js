import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Components from './components/listItems'

import './App.css'

class App extends Component {
  state = {
    name: '',
    password: '',
    webUrl: '',
    webSiteList: [],
    searchi: '',
    isTrue: true,
  }

  submitForm = event => {
    event.preventDefault()
    const {name, password, webUrl} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      password,
      webUrl,
    }

    this.setState(prevState => ({
      webSiteList: [...prevState.webSiteList, newContact],
      name: '',
      password: '',
      webUrl: '',
    }))
  }

  changeUrl = event => {
    this.setState({name: event.target.value})
  }

  changeText = event => {
    this.setState({password: event.target.value})
  }

  changePassword = event => {
    this.setState({webUrl: event.target.value})
  }

  onDemandList = event => {
    this.setState({searchi: event.target.value})
  }

  onDemandDelete = id => {
    const {webSiteList} = this.state

    const newOneWebList = webSiteList.filter(onelists => onelists.id !== id)
    this.setState({
      webSiteList: newOneWebList,
    })
  }

  isTrueOrFalse = () => {
    this.setState(prevV => ({isTrue: !prevV.isTrue}))
  }

  render() {
    const {name, password, webUrl, webSiteList, searchi, isTrue} = this.state

    const filteredWebList = webSiteList.filter(onelist =>
      onelist.webUrl.includes(searchi),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="bg-container">
          <div className="add-img-container">
            <form className="add-container" onSubmit={this.submitForm}>
              <h1>Add New Password</h1>

              <div>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="wedUserPass"
                  />
                  <input
                    type="text"
                    onChange={this.changeUrl}
                    placeholder="Enter Website"
                  />
                </div>

                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="wedUserPass"
                  />

                  <input
                    type="text"
                    onChange={this.changeText}
                    placeholder="Enter Username"
                  />
                </div>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="wedUserPass"
                  />
                  <input
                    type="password"
                    onChange={this.changePassword}
                    placeholder="Enter Password"
                  />
                </div>
              </div>

              <button type="submit">Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div className="bg-container">
          <div className="ourPassword">
            <div>
              <h1> Your Passwords</h1>
              <p>{filteredWebList.length}</p>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search"
              />
              <input type="search" onChange={this.onDemandList} />
            </div>
          </div>
          <hr />
          <ul>
            {filteredWebList.map(eachList => (
              <Components
                key={eachList.id}
                detailsList={eachList}
                onDemandDelete={this.onDemandDelete}
                isTrue={isTrue}
              />
            ))}

            {filteredWebList.length === 0 && (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p>No Passwords</p>
              </div>
            )}

            <input type="checkbox" id="checkBox" onClick={this.isTrueOrFalse} />
            <label htmlFor="checkBox">Show Passwords</label>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
