function renderfunc() {
    const jsdata = `
    <div>
    <h1>JS Render</h1>
        <input type="text"></input>
    <p>${new Date().toLocaleTimeString()}</p>
    </div>`

    document.getElementById("jsrender").innerHTML = jsdata;

    const reactdata = React.createElement("div", null,
        React.createElement("h1", null, "React Render"),
        React.createElement("input", { type: "text" }),
        React.createElement("p", null, new Date().toLocaleTimeString()));

    ReactDOM.render(reactdata, document.getElementById("reactrender"));
}

setInterval(renderfunc, 1000);