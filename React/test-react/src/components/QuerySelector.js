import React  from 'react'

function QuerySelector() {
    function focus() {
        document.getElementById("myinput").value = "Prachi";
    }
    function blur() {
        document.getElementById("myinput").value = "";
    }
  return (
      <input id="myinput" onFocus={focus} onBlur={ blur}></input>
  )
}

export default QuerySelector