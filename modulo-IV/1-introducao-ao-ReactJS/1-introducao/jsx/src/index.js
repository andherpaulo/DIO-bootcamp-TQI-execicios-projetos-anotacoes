import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (                    //sempre utilizar parênteses quando utilizar HTML dentro do JS
    <div className="teste">
      Andher - Introdução ao ReactJS
      <h1>Soma: {sum(10, 15)}</h1>
    </div>
  )
}


const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
