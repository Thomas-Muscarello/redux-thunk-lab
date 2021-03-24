// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
  render() {
    const catPics = this.props.catPics.map(pic => <img key={pic.id} src={pic.source_url} alt="" />)

    return (
      <div>
        {catPics}
      </div>
    )
  }
}