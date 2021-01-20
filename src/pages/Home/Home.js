import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'
import ChitChat from '../../fragments/ChitChat'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() { }

  render() {

    return (
      <div className="flex flex-wrap sm:m-2 md:m-3">
        <ChitChat display_name="Aiza" photo="aiza" role="Laravel / PHP" />
        <ChitChat display_name="Bentoy" photo="bentoy" role="DevOps" />
        <ChitChat display_name="Bessie" photo="bessie" role="Android Flutter" />
        <ChitChat display_name="Charmaine" photo="charmaine" role="C#" />
        <ChitChat display_name="Debie" photo="debie" role="Swift" />
        <ChitChat display_name="Ella" photo="ella" role="GoLang" />
        <ChitChat display_name="Fernando" photo="fernando" role="Laravel / PHP" />
        <ChitChat display_name="Fio" photo="fiona" role="Springboot" />
        <ChitChat display_name="Gerald" photo="gerald" role="AWS Solutions Architect" />
        <ChitChat display_name="Haley Y." photo="haley-b" role="NodeJS" />
        <ChitChat display_name="Irish" photo="irish" role="GoLang" />
        <ChitChat display_name="Jeanie" photo="jeanie" role="C#" />
        <ChitChat display_name="Kathleen" photo="kathleen" role="Laravel" />
        <ChitChat display_name="Loren" photo="loren" role="Swift" />
        <ChitChat display_name="Mel" photo="mel" role="Android Kotlin" />
        <ChitChat display_name="Nina" photo="nina" role="ReactJS" />
        <ChitChat display_name="Niño" photo="nino" role="C#" />
        <ChitChat display_name="Ogie" photo="ogie" role="Laravel" />
        <ChitChat display_name="Phoebe" photo="phoebe" role="Springboot" />
        <ChitChat display_name="Stefan" photo="stefan" role="Android Flutter" />
        <ChitChat display_name="Therese" photo="therese" role="C#" />
        <ChitChat display_name="Ursula" photo="ursula" role="Android Kotlin" />
        <ChitChat display_name="Vanz" photo="vanz" role="Swift" />
        <ChitChat display_name="Queenie" photo="queenie" role="AWS Solutions Architect" image_align="left" />
        <ChitChat display_name="Wendell" photo="wendell" role="AWS Solutions Architect" image_align="left" />
      </div>
    )
  }
}

export default withRouter(Home)