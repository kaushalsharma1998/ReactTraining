import React,{Component} from 'react';

export default class Actions extends Component{
callme()
{
  alert("button clicked");
}
  render(){  //rendering the html
return (
  <div>
  <button onClick={this.callme}>Clic me</button>
</div>

)

  }
}
