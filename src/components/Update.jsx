import React, { Component } from 'react'

export default class Update extends Component {
  state = {
    title:this.props.title,
    desc:this.props.desc,
    id:this.props.id
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={function(e) {
        e.preventDefault();
        this.props.onSubmit(
         Number(e.target.id.value),
          e.target.title.value,
          e.target.desc.value
        );
      }.bind(this)}>
        <input type="hidden" name="id" value={this.state.id}/>
        <p>
        <input type="text" onChange={this.onChangeHandler.bind(this)} name="title" value={this.state.title} placeholder="title"/>
        </p>
        <p>
          <textarea name="desc" onChange={this.onChangeHandler.bind(this)} value={this.state.desc} placeholder="description"/>
        </p>
        <p>
          <input type="submit" value="submit"/>
        </p>
        
      </form>
    )
  }
}
