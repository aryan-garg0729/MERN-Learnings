//                              BASICS
/*import React from 'react'; //for jsx
import ReactDOM from 'react-dom';

// ReactDOM.render(what to show, where to show, callback function);
// react fragment --> <> code </>
// {} --> used to write javascript expressions(var name, arithematic exp etc., no conditions) in jsx

const name = "Aryan";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(<>   
                    <h1>hello world</h1>
                    <p>my react app by {name}</p>
                    <ul>
                      <li>today's date is {date}</li>
                      <li>time is {time}</li>
                      <li>sdf</li>
                      <li><a href='www.google.com'/></li>
                    </ul>
                </>,document.getElementById("root")
);*/



//            JSX attributes, images, links, css styling,inline css, google font
/*import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'; //importing css file

const img1 = "url";
const link = "www.google.com";


//inline css
// conversion from normal css to react object
// 1)convert kebab-case to camelCase 
// 2)keep everything at right in "" or''

// then use 'style' jsx attribute use a curly brace to use js--> style = {pass css obj here}

const css_object = {
    color: 'yellowgreen',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontFamily: "'Josefin Sans', sans-serif" 
}

ReactDOM.render(<>
                   <h1 contentEditable = "true" className="heading">external css</h1> 

                   <h2 style={css_object}>applying inline css</h2>

                   <img src={img1} alt=""/>                  [adding images ]

                   <a href={link} target="_blank" rel="noreferrer">  <img src={img1} alt="img"/>  </a>                         [adding links ]

                </>,document.getElementById("root")
);*/



//             Challenge: creating simple greeting website that greets acc to time
/*import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css"
import App from "./App"

ReactDOM.render(<App/>,document.getElementById("root"));*/



//                        netflix app project (props, map) IMPORTANT          

/*import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import './index.css'
import Sdata from "./Sdata";


function ncard(val,ind,arr){
  return(
  <Card 
    // className="ljk"  // here it is not a class attribute but is passed as props
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname} 
    link={val.links}
  />)
}

// the custom attributes created by us are passed as an object(props) to the component
ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2023</h1>
    <div className="cards">

      {Sdata.map(ncard)}  {/* imp: using map to iterate over all array elements & passing data to component /}

    </div>
  </>,
  document.getElementById("root"));*/



//                         React Hooks(increment dec on click) IMPORTANT
/*import React from "react";
import  ReactDOM  from "react-dom";
import Hook from "./Hook";

ReactDOM.render(<Hook/>, document.getElementById("root"));*/
  


//                          get time on refreshing and click
/*import React from "react";
import  ReactDOM  from "react-dom";
import GetTime from './GetTime'

ReactDOM.render(<GetTime/>,document.getElementById("root"));
*/



//                                  Digital Clock
/*import React from "react";
import ReactDOM from "react-dom";
import DigitalClock from "./DigitalClock";

ReactDOM.render(<DigitalClock/>,document.getElementById("root"));
*/



//                            Handling Events in React
/*import React from "react";
import ReactDOM from "react-dom";
import EventHandling from "./EventHandling";

ReactDOM.render(<EventHandling/>,document.getElementById("root"));*/



//                              Forms(take input and update heading)
/*import React from "react";
import ReactDOM from "react-dom";
import Forms from "./Forms";

ReactDOM.render(<Forms/>,document.getElementById("root"))
*/

//                              Login Form (Submit without refreshing page)
/*import React from "react";
import ReactDOM from "react-dom";
import SubmitNoRefresh from "./SubmitNoRefresh";

ReactDOM.render(<SubmitNoRefresh/>,document.getElementById("root"))*/


//                           handling complex multiple inputs
/*import React from "react";
import ReactDOM from "react-dom";
import ComplexMultipleInputs from "./ComplexMultipleInputs";

ReactDOM.render(<ComplexMultipleInputs/>,document.getElementById("root"));*/


//                           ***** TODO LIST *****
/*import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

 ReactDOM.render(<TodoList/>,document.getElementById("root"));
*/


//                            Bootstrap in react
/*import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "./Bootstrap";

ReactDOM.render(<Bootstrap/>,document.getElementById("root"));*/


//                  Custom Accordian in react(imp: note use of ternery operator)
/*import React from "react";
import ReactDOM from "react-dom";
import Accordian from "./Accordian";

ReactDOM.render(<Accordian/>,document.getElementById("root"));
*/



//                    Google keep app clone(mini proj-1)
/*import React from "react";
import ReactDOM from 'react-dom'
import Keep from "./google keep clone/Keep";

ReactDOM.render(<Keep/>,document.getElementById("root"));*/



//                             Context API & useContext()
/* React provides a concept called Context
   React Context API allows you to easily access ssata at different levels of the component tree without passing prop to every level*/

/*import React from "react";
import ReactDOM from "react-dom";
import ContextAPI from "./context API/ContextAPI";

ReactDOM.render(<ContextAPI/>,document.getElementById("root"));
*/


//                             useEffect Hooks
/*used to tell react what to after calling render function. After calling render everytime function givin to useEffect will be called*/

/*import React from "react";
import ReactDOM from "react-dom";
import UseEffectHook from "./UseEffectHook";
ReactDOM.render(<UseEffectHook/>,document.getElementById("root"));*/

//                              React Hook Challenge(useEffect)
/*import React from 'react'
import ReactDOM from 'react-dom'
import UseEffectChallenge from './UseEffectChallenge';

ReactDOM.render(<UseEffectChallenge/>,document.getElementById("root"));*/

//                          API Call
/*import React from 'react'
import ReactDOM from 'react-dom'
import APIcall from './APIcall';
ReactDOM.render(<APIcall/>,document.getElementById("root"));*/



//                           NavBar using React Router(useParam,useLocation,useNavigate)
/*import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from './ReactRouter';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <ReactRouter/>
    </BrowserRouter>
  ,document.getElementById("root"));
*/



//                            mini project(React Website)
/*import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import ReactWebsite from './React js Website/ReactWebsite';
ReactDOM.render(
    <BrowserRouter>
      <ReactWebsite/>
    </BrowserRouter>
  ,document.getElementById("root"));
*/


//                            Weather App
/*import React from 'react'
import ReactDOM from 'react-dom'
import WeatherApp from './weather app/WeatherApp';
ReactDOM.render(<WeatherApp/>,document.getElementById("root"));
*/


//                          charts
import React from 'react'
import ReactDOM from 'react-dom'
import Charts from './Charts';
ReactDOM.render(<Charts/>,document.getElementById("root"));

//                          Redux toolkit(for state management)
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Redux from './Redux/Redux'
// import { Provider } from 'react-redux';
// import store from './Redux/store';
// ReactDOM.render(
//   /*through provider our <Redux/> can access the store now */
//   <Provider store={store}>  
//     <Redux/>
//   </Provider>
  
//   ,document.getElementById('root'));