import React from "react";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
      <Button btnType="Continue" click={props.purchaseContinue}>
        CONTINUE
      </Button>
      <Button btnType="Cancel" click={props.purchaseCancel}>
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;
