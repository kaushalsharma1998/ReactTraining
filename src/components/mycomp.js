 //unless you export you cant import
//jsx is like xml
//component centric approach

//data is our variable  parent to child
import React,{Component} from 'react';
import Header from "header.js";
import Footer from "footer.js";
import Options from "options.js";
import Actions from "actions.js";
import Addoptions from "addoptions.js";
import Counter from "counter.js";
export default class MyComp extends Component{
  render(){  //rendering the html
const options=['data1','data2','data3']
return (

  <div>
<Header data1="hello data"/>
  <p>Welcome to my child component, hello </p>
<Options optiondata={options}/>
<Actions/>
<Addoptions/>
<Counter num="1"/>
<Footer/>
  </div>

)

  }
}
