import React,{Component} from 'react';
import Option from "./option.js";
export default class Options extends Component{
  render(){  //rendering the html
return (
  <div>
  <p>Options </p>
  <div>
  {
    this.props.optiondata.map((data) => <Option optionText={data} />)

}
</div>
  </div>
)

  }
}
