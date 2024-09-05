import React, { Component } from 'react'


export class Navbar extends Component {
 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Newsmonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">about</a>
       
        <a className="nav-link" href="#">business</a>
        <a className="nav-link" href="#">entertainment</a>
        <a className="nav-link" href="#">general</a>
        <a className="nav-link" href="#">health</a>
        <a className="nav-link" href="#">science</a>
        <a className="nav-link" href="#">sports</a>
        <a className="nav-link" href="#">technology</a>


      </div>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar
