import React, { Component } from "react";
import BlackCar from "../assets/products/black-car.jpg";
import RedCar from "../assets/products/red-car.jpg";
import SilverCar from "../assets/products/silver-car.jpg";
import SteelCar from "../assets/products/steel-car.jpg";
import styles from "./Car.module.css";

class Car extends Component {
  state = {
    carImage: BlackCar,
  };
  changeCar(color) {
    let newImage;
    switch (color) {
      case "red":
        newImage = RedCar;
        break;
      case "black":
        newImage = BlackCar;
        break;
      case "steel":
        newImage = SteelCar;
        break;
      case "silver":
        newImage = SilverCar;
        break;
      default:
        break;
    }
    if (!newImage) return;
    this.setState(
      {
        carImage: newImage,
      },
      () => {
        console.log(this.state.carImage);
      }
    );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img
              style={{
                borderRadius: 20,
                boxShadow: "4px 6px 10px rgba(0,0,0,0.5)",
              }}
              className={styles.thumbnail}
              src={this.state.carImage}
              alt=""
            />
          </div>
          <div className="col-5">
            <button
              onClick={() => this.changeCar("black")}
              className={styles.btn}
            >
              Black
            </button>
            <button
              onClick={() => this.changeCar("red")}
              className={styles.btn}
            >
              Red
            </button>
            <button
              onClick={() => this.changeCar("silver")}
              className={styles.btn}
            >
              Silver
            </button>
            <button
              onClick={() => this.changeCar("steel")}
              className={styles.btn}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
