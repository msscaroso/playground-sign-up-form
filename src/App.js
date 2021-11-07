import SignUpForm from "./containers/SignUpForm";
import {createGlobalStyle} from "styled-components";
import "./App.css"


const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: hsl(0, 100%, 74%);
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`


function App() {
  return (
      <>
        <Global/>
        <SignUpForm/>
      </>

  );
}

export default App;
