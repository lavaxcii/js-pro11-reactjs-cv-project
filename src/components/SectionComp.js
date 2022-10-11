import React, { Component } from 'react'
import '../styles/SectionComp.css'

class SectionComp extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className={'sectionComp'}>
        <h2>{title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default SectionComp