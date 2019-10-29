import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: "",
      city: "",
      country: ""
    }
  };

  orderHandler = event => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      consumer: {
        name: "Bulcsú Farmasi",
        address: {
          street: "Kisköre utca 20",
          zipCode: "1116",
          city: "Budapest",
          country: "Hungary"
        },
        email: "bulcsu.farmasi@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="zip"
          placeholder="Zip Code"
        />
        <input
          className={classes.Input}
          type="text"
          name="city"
          placeholder="City"
        />
        <input
          className={classes.Input}
          type="text"
          name="country"
          placeholder="Country"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
