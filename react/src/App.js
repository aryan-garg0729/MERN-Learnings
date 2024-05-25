import './App.css';
import React from 'react';

function App() {
  let curDate = new Date(); //getting date
  curDate = curDate.getHours(); //getting hours
  let greeting = "";
  
  let cssStyle = {};
  
  //setting value of greeting and cssStyle as per time
  if(curDate>=0 && curDate<=12){
    greeting = "Good Morning";
    cssStyle.color = "green";
  }
  else if(curDate<19 && curDate>=12){
    greeting = "Good Afternoon";
    cssStyle.color = "rgb(255, 98, 0)";
  }
  else{
    greeting = "Good night";
    cssStyle.color = "black";
  }
  return <>
            <div className="container">
                <h1>Hello Sir, <span style={cssStyle}>{greeting}</span> </h1>
            </div>
        </>;
}

export default App;
