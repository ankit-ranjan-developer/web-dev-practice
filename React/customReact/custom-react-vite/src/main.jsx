import { createRoot } from 'react-dom/client'
import React from 'react';

// import App from './App.jsx'

/* Fast refresh only works when a file has exports. Move your component(s) to a separate file */

/* 1.
function MyApp() {
  return (
    <h1>Hello World!</h1>
  )
}
*/

/* 2. 
const AnotherElement = (
  <h1>Hello Function</h1>
)
*/

/* 3. My react component 

const reactComponet = {
    tag : 'a',
    attributes : {
        href : 'https://www.google.com',
        target: '_blank',
    },
    text : 'Google'
};
*/

// 4. React defined react-component. 

const username = "Ankit";

const areactElement = React.createElement(
  'a', {href : 'www.google.com', target : '_blank'},
  'Google', " ", username 
);


createRoot(document.getElementById('root')).render(
  areactElement
)

// <App />
// MyApp()
// AnotherElement
// reactComponent - this can't be rendered, because react can't comprehend this. 
// areactElement

