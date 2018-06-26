import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.hog.name,
      imgHeight: 200,
      weight: 200
    }
  }

  selectImg() {
    return imgMapper[this.props.eyeColor]
  }

  changeWeight(event) {
    event.preventDefault()
    if (event.target.id === "increase") {
      this.setState(prevState => {return {imgHeight:prevState.imgHeight+10, weight:prevState.weight+10}})
    } else {
      this.setState(prevState => {return {imgHeight:prevState.imgHeight-10, weight:prevState.weight-10}})
    }
  }

  render() {
    return (
        <li className="hogbabies">

          <h1>{this.state.name}</h1>
          <h3>Weight: {this.state.weight}</h3>
          <h4>Eye Color: {this.props.eyeColor}</h4>
          <div className="wrap-crap">
            <Button animated id="increase" onClick={this.changeWeight.bind(this)}>
              <Button.Content id="increase" visible>Increase Weight</Button.Content>
              <Button.Content id="increase" hidden>
                <Icon id="increase" name='plus' />
              </Button.Content>
            </Button>

            <Button animated onClick={this.changeWeight.bind(this)}>
              <Button.Content visible>Decrease Weight</Button.Content>
              <Button.Content hidden>
                <Icon name='minus' />
              </Button.Content>
            </Button>
          </div>

          <img src={this.selectImg()} style={{height: `${this.state.imgHeight}px`}} alt="MasterBlasterJrJr" />

        </li>
    )
  }
  
}

export default BabyHog;
