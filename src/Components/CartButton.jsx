import React, { Component } from 'react';

class CartButton extends Component {
  render() {
    return (
      <form class="d-flex">
        <button class="btn btn-outline-cart bg-footer" type="submit">
          <img src="icons-add-shopping.png" width={ "20px" } alt="cart" />
          <i class="bi-cart-fill me-1"></i>
          Cart
          <span class="badge bg-dark text-white ms-1 rounded-pill">1</span>
        </button>
      </form>
    );
  }
}

export default CartButton;