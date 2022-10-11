import React, { Component } from 'react'
import '../styles/InputComp.css'

class InputComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput = () => {
    if (this.props.submited === false) {
      return (
        <div >
          <label>{this.props.generalInfo}</label>
          <input type="text" name={this.props.identifier} onChange={(e) => { this.props.updateData(e) }} />
        </div>
      )

    } else if (this.props.submited === true) {
      return (
        <div className={'disableInput'} >
          <label>{this.props.generalInfo}</label>
          <input type="text" name={this.props.identifier} onChange={(e) => { this.props.updateData(e) }} />
        </div>
      )
    }
  }
  render() {
        
    return (
      <div className={'inputCompStyle'}>
        {(this.props.submited === false || true) ? this.renderInput() : null}
      </div>
    )
  }
}

export default InputComp