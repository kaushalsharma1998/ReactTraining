 //unless you export you cant import
//jsx is like xml
//component centric approach

//data is our variable  parent to child
import React,{Component} from 'react';
import Header from "./header.js";
import Footer from "./footer.js";

export default class MyComp extends Component{
  render(){  //rendering the html
return (

  <div>
<Header/>
  <p>Welcome to my child component </p>
<Footer/>
  </div>

)

  }
}
