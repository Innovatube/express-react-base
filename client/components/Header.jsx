import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

const Header = props => (
  <header className={`pageHeader ${!!props.fixed ? 'absolute' : ''}`}>
    <div className="container flex flex-auto w-100 justify-between items-start ph4 ph0-ns">
      Head
      <Link to={'/test-page'}>
        Test Page
      </Link>
      <Link to={'/'}>
        Home
      </Link>
    </div>
  </header>
)

export default Header
