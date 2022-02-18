import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

class App extends React.Component {
  componentDidMount() {
    var src = [
      "assets/js/jquery.min.js",
      "assets/js/jquery.scrollex.min.js",
      "assets/js/jquery.scrolly.min.js",
      "assets/js/browser.min.js",
      "assets/js/breakpoints.min.js",
      "assets/js/util.js",
      "assets/js/main.js",
    ]
    for (let i = 0; i < src.length; i++) {
      const script = document.createElement("script")
      script.src = src[i]
      document.body.appendChild(script)
    }
  }

  render() {
    return (
      <Home />
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/plan_evacuation" element={<Cad />} />
      //     <Route path="/services" element={<Services />} />
      //     <Route path="/formation" element={<Formation />} />
      //     <Route path="/contact" element={<Contact />} />
      //   </Routes>
      // </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
