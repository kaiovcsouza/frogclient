import React from "react";
import "./Signin.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onFormChange = event => {
    switch (event.target.name) {
      case "email-address":
        this.setState({ signInEmail: event.target.value });
        break;
      case "password":
        this.setState({ signInPassword: event.target.value });
        break;
      default:
        return;
    }
  };

  saveAuthTokenInSessions = token => {
    window.sessionStorage.setItem("token", token);
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.success === "true") {
          this.saveAuthTokenInSessions(data.token);
          this.props.loadUser(data.user);
          this.props.onRouteChange("home");
        }
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Login</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Usuário
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-blue w-100 hover-black"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onFormChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Senha
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-blue w-100 hover-black"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onFormChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Entrar"
                />
              </div>
            </div>
          </main>
        </article>
        <p
          onClick={this.props.toggleModal}
          className="w-90 ba br2 pa3 ma2 red bg-washed-red center"
          role="alert"
        >
          <strong>Oh snap!</strong> Change a few things up and try submitting
          again.
        </p>
      </div>
    );
  }
}
export default Signin;
