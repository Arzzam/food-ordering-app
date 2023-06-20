import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    street: true,
    pin: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const pinCodeRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameInput = nameRef.current.value;
    const streetInput = streetRef.current.value;
    const cityInput = cityRef.current.value;
    const postalInput = pinCodeRef.current.value;

    const enteredNameIsValid = !isEmpty(nameInput);
    const enteredStreetIsValid = !isEmpty(streetInput);
    const enteredCityIsValid = !isEmpty(cityInput);
    const enteredPinIsValid = isFiveChars(postalInput);

    setFormInputValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      pin: enteredPinIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPinIsValid;

    if (formIsValid) {
      return;
    }
  };

  const controlClasses = (title) => {
    switch (title) {
      case "name":
        return `${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`;
      case "street":
        return `${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        }`;
      case "pin":
        return `${classes.control} ${
          formInputValidity.pin ? "" : classes.invalid
        }`;
      case "city":
        return `${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`;
      default:
        return `${classes.control}`;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={controlClasses("name")}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValidity.name && <p>Enter a valid Name!</p>}
      </div>
      <div className={controlClasses("street")}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValidity.street && <p>Enter a valid Street!</p>}
      </div>
      <div className={controlClasses("pin")}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={pinCodeRef} />
        {!formInputValidity.pin && <p>Enter a valid Pin code!(6 Digits)</p>}
      </div>
      <div className={controlClasses("city")}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValidity.city && <p>Enter a valid City!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
