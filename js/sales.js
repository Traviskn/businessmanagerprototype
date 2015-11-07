var ProductList = function({products, addProduct}) {
  var productList = products.map(function(product) {
    return (
      <tr>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <button className="waves-effect waves-light btn" onClick={addProduct.bind(undefined, product)}>
            <i className="material-icons">add</i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="bordered striped">
      <thead>
        <tr>
            <th data-field="name">Item</th>
            <th data-field="price">Price</th>
            <th>Add</th>
        </tr>
      </thead>

      <tbody>
        {productList}
      </tbody>
    </table>
  );
};

var ShoppingCart = function({cartItems, removeProduct}) {

  var total = 0.00;
  cartItems.forEach(function(item) {
    total += item.price;
  });

  var cartList = cartItems.map(function(item, index) {
    return (
      <tr>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          <button className="waves-effect waves-light btn" onClick={removeProduct.bind(undefined, index)}>
            <i className="material-icons">cancel</i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel center-align">
          <h3>Total: ${total}</h3>
          {cartItems.length > 0 && (
            <table className="bordered striped">
              <thead>
                <tr>
                    <th data-field="name">Item</th>
                    <th data-field="price">Price</th>
                    <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {cartList}
              </tbody>
            </table>
          )}
          <br />
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

var SalesPage = React.createClass({
  getInitialState: function() {
    return {
      products: [
        {name: 'Ring', price: 5.00},
        {name: 'Scarf', price: 3.25},
        {name: 'Shirt', price: 2.50}
      ],
      cartItems: []
    }
  },

  addProductToCart: function(product) {
    var {cartItems} = this.state;
    cartItems.push(product);
    this.setState({cartItems: cartItems});
  },

  removeProductFromCart: function(index) {
    var {cartItems} = this.state;
    cartItems.splice(index, 1);
    this.setState({cartItems});
  },

  render: function() {
    var {cartItems, products} = this.state;
    return (
      <div>
        <ShoppingCart cartItems={cartItems} removeProduct={this.removeProductFromCart} />
        <ProductList products={products} addProduct={this.addProductToCart}/>
      </div>
    );
  }
});

ReactDOM.render(
  <SalesPage/>,
  document.getElementById('sales-page')
);
