import { Component } from "react";
import Demo1 from "./demoLifecycle/Demo1";
import Home from "./Ex5/Home";

class App extends Component {
  state = {
    countApp: 0,
    countApp_2: 10,
  };

  increaseCountApp = () => {
    this.setState({
      countApp: this.state.countApp + 1,
    });
  };

  render() {
    return (
      <Home />
      // <div className="App bg-success p-5">

      /* <Demo1 item={this.state.countApp} />
        <h1>countApp :{this.state.countApp}</h1>
        <button onClick={this.increaseCountApp}>Count App</button> */
      // </div>
    );
  }
}

export default App;
