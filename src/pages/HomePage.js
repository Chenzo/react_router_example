import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/Chenzo">This one?</Link> 
      </p>
    </div>
  )
}