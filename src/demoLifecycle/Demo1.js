import React, { PureComponent } from "react";

class Demo1 extends PureComponent {
  // mounting lifecycle: constructor => render => componentDidMount
  // updating lifecycle :shouldComponentUpdate => render => getSnapshotBeforeUpdate => componentDidUpdate
  // unmounting lifecycle: componentWillUnmount
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // cập nhật state dựa cái props truyền vào
  //   static getDerivedStateFromProps(nextProps, currentState) {}

  //   shouldComponentUpdate(nextProps, nextState) {
  //     // countApp_2 cũ === countApp_2 mới
  //     // khác => demo nên render lại
  //     // giống => demo nên giữ nguyên
  //     if (
  //       this.props.item !== nextProps.item ||
  //       this.state.count !== nextState.count
  //     ) {
  //       return true;
  //     }

  //     return false;
  //   }

  render() {
    console.log("render");
    return (
      <div className="bg-primary mb-5">
        <h1>Demo lifecycle</h1>
        <h1>Count1:{this.state.count}</h1>
        <button onClick={this.increaseCount}>Count</button>
      </div>
    );
  }

  //   getSnapshotBeforeUpdate() {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, prevState); // count = 1
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    // clear setInterval
    // clearInterval()
    // setInterval(() => {}, 2000);
    // clear store
  }
}

export default Demo1;
