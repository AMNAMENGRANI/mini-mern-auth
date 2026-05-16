const { useState } = React;

function App(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {

    fetch("http://localhost:5000/signup", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email,
        password
      })

    })

    .then(res => res.json())

    .then(data => alert(data.message));

  };

  const login = () => {

    fetch("http://localhost:5000/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email,
        password
      })

    })

    .then(res => res.json())

    .then(data => alert(data.message));

  };

  return React.createElement(

    "div",

    { className: "container" },

    React.createElement("h2", null, "Auth App"),

    React.createElement("input", {
      placeholder: "Email",
      onChange: (e) => setEmail(e.target.value)
    }),

    React.createElement("input", {
      placeholder: "Password",
      type: "password",
      onChange: (e) => setPassword(e.target.value)
    }),

    React.createElement("button", {
      onClick: signup
    }, "Signup"),

    React.createElement("button", {
      onClick: login
    }, "Login")

  );

}

ReactDOM.createRoot(document.getElementById("root"))
.render(React.createElement(App));