import React,{Component} from 'react';

export default class Addoptions extends Component{
  callme(e)
  { e.preventDefault()
    const username =e.target.elements.uname.value;
    alert(username);
  }
  render(){  //rendering the html
//by deafult a submit button
return (
  <div>

<form onSubmit={this.callme}>
Name:<input type="text" name="uname"/>
<button>Add</button>
</form>
  </div>
)

  }
}
