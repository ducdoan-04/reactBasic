import React from "react";

class MyComponents extends React.Component {
  /**
    JSX=> 
      <> or <React.Fragment>
   */

  state = {
    name: "Dev",
    old: 22,
    address: "DN",
    email: "",
    phone: "",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    let name = "Alice";

    return (
      <>
        <div className="my-components-header">
          <h1>My Components</h1>
          <p>This is a custom component.</p>
        </div>
        <div className="my-components-body">
          {console.log("Hello World! My name is: ", name)}
          <p>Hello, my name is {name}!</p>
          <p>
            I live in {this.state.address} and I am {this.state.old} years old.
            {/* /*cách 2*/}
          </p>
          <p>
            I live in {this.state["name"]} and I am {this.state.old} years old.
            {/* /*cách 3*/}
          </p>
        </div>
        <div className="Input-name">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>
      </>
    );
  }
}

export { MyComponents };
