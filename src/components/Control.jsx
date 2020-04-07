import React, { Component } from 'react'

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li><a href="create">create</a></li>
        <li><a href="update">update</a></li>
        <li><input type="button">delete</input></li>
      </ul>
    )
  }
}
