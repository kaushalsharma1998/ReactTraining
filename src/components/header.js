import React,{Component} from 'react';
export default class Header extends Component{
  render(){  //rendering the html
return (
  <div>
  <p>Welcome to my header  component </p>
  {this.props.data1}
  </div>
)

  }
}
