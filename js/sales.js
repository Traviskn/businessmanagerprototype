var ProductButton = function({index, product, sellProduct}) {
  return (
    <div className='center-align row'>
      <div
        className='center-align waves-effect waves-light btn-large'
        style={{
          height: '120px',
          width: '100%'
        }}
        onClick={() => sellProduct(index)}>
        <div
          className='chip left'
          style={{
            marginTop: '28px',
            height: '64px',
            fontSize: '25px',
            lineHeight: '64px',
            padding: '0 24px',
            borderRadius: '32px'
          }}>
          {product.count}
        </div>
        <div
          className='right'
          style={{
            marginTop: '36px',
            marginRight: '50px',
            fontSize: '25px'
          }}>
          $ {product.price}
        </div>
        <div
          style={{
            marginTop: '36px',
            fontSize: '25px'
          }}>
          {product.name}
        </div>
      </div>
    </div>
  )
};

var ProductGrid = function({products, sellProduct}) {
  return (
    <div style={{marginTop: '1em'}}>
      {products.map(
        (product, index) => <ProductButton key={index} product={product} index={index} sellProduct={sellProduct}/>
      )}
    </div>
  );
};

var SalesTotal = function({products}) {
  var total = 0;
  for (let i=0; i < products.length; i++) {
    let subtotal = parseFloat(products[i].price) * products[i].count;
    total += subtotal;
  }
  return (
    <div
      style={{
        display: 'inline-block',
        fontSize: '25px',
        fontWeight: 'bold',
        marginRight: '40px'
      }}>
      $ {total.toFixed(2)}
    </div>
  );
};

var SellButton = function({recordSale}) {
  return (
    <div
      className='center-align waves-effect waves-light btn-large blue'
      style={{
        fontSize: '25px'
      }}
      onClick={recordSale}>
      Record Sale
    </div>
  );
};

var SaleSummary = function({products, recordSale}) {
  return (
    <div
      className='card center-align'
      style={{
        padding: '25px'
      }}>
      <SalesTotal products={products}/>
      <SellButton recordSale={recordSale}/>
    </div>
  )
};

var SalesPage = React.createClass({
  getInitialState: function() {
    return {
      products: [
        {name: 'Taco', price: '5.00', count: 0},
        {name: 'Soda', price: '1.20', count: 0}
      ]
    };
  },

  render: function() {
    return (
      <div>
        <SaleSummary products={this.state.products} recordSale={this.recordSale}/>
        <ProductGrid products={this.state.products} sellProduct={this.sellProduct}/>
      </div>
    );
  },

  sellProduct: function(index) {
    var products = this.state.products.slice();
    products[index].count += 1;
    this.setState({products: products});
  },

  recordSale: function() {
    this.setState({
      products: [
        {name: 'Taco', price: '5.00', count: 0},
        {name: 'Soda', price: '1.20', count: 0}
      ]
    });
  }
});

ReactDOM.render(
  <SalesPage/>,
  document.getElementById('sales-page')
);
