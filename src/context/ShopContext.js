import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();
const client = Client.buildClient({
  domain: 'jorges-development-store.myshopify.com',
  storefrontAccessToken: 'fce7341a6381e27946c8a865dfaaae65',
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: 'test',
  };

  render() {
    return;
    <ShopContext.Provider value={{ ...this.state }}>
      {this.props.children}
    </ShopContext.Provider>;
  }
}

export default ShopProvider;
