import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header class="App-header py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-end text-black">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-black-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;