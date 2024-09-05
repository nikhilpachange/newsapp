
import './App.css';
import Navbar from './components/Navbar';
import { News } from './components/news';
import Newsitem from './components/Newsitem';
import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class App extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category:'genral',
    
  }

  static defaultTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,  
    category:propTypes.string,
  } 

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country="sport"/>
        <Newsitem/>
      </div>
    )
  }
}
