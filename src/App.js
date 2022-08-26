
import styled from "styled-components"
import React from "react"
export default function App() {
  let [theme ,setTheme]=React.useState("dark")
  let [theme1 ,setTheme1]=React.useState("dark")



 const Button =styled.button`
  color:${props=>props.theme==="dark" ? props.color1:props.color2};
  padding:10px 40px;
  font-size:20px;
  display:block;
  letter-spacing:10px;
  border-radius:15px;
  margin-bottom:10px;
  border:0px solid black;
  background-color: ${props=>
  props.theme==="dark"?props.color2:props.color1};
 `;
 const Name=styled.h1`
  color:${props=>props.theme==="dark" ? "black":"pink"};
  padding:10px 40px;
 
 text-decoration:underline;
  
 `;

  return (<>
    
    <div className="App">
 <Name  theme="red" >Styled Component</Name>
      <Button onClick={()=>setTheme((theme)=>
        theme==="dark"?"light":"dark")}  
      theme={theme}  color1="pink" color2="black" >HY</Button>
      <Button onClick={()=>setTheme1((theme1)=>
        theme==="dark"?"light":"dark")}  
      theme={theme1}  color1="seagreen" color2="yellow" >HY</Button>
    </div>
    </>
  );
}
