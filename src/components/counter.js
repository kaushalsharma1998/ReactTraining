import React,{Component} from 'react';

export default class Counter extends Component{
inc(e)
{ e.preventDefault();
  alert("incremented");
}
dec(e)
{ e.preventDefault();
  alert("decremented");
}
reset(e)
{ e.preventDefault();
  alert("decremented");
}




  render(){  //rendering the html
return (
  <div>
  <button onClick={this.inc}>Click me to inc</button>
  <button onClick={this.dec}>Click me to dec</button>
  <button onClick={this.dec}>Click me to reset</button>
</div>

)

  }
}
