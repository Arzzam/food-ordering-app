import React, { useRef, useState } from "react";

import styled from "styled-components";
import Input from "../../UI/Input";

const StyledForm = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const amountEntered = amountRef.current.value;
    const amountInNumber = +amountEntered;

    if (
      amountEntered.trim().length === 0 ||
      amountInNumber < 1 ||
      amountInNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amountInNumber);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid input (1-5)</p>}
    </StyledForm>
  );
};

export default MealItemForm;
