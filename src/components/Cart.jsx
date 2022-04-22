import Footer from "./Footer";
import Header from "./Header";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../stylesheets/App.css";

const removeFromCart = (e) => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  cartItems.splice(e.target.id, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log(localStorage);
  window.location.reload();
};

const clearCart = () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let removeTrue = window.confirm("Are you sure about this?");
  if (!removeTrue) {
    return;
  }
  cartItems = [];
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  window.location.reload();
};

const checkout = () => {
  alert("Think really hard and perhaps they might be delivered to you");
};

const CartItem = (props) => {
  const { img, name, price, desc } = props.item;

  return (
    <div className="cartItem">
      <Card key={props.index}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="cartBlock">
          <Card.Title className="cardTitle">
            {name} ${price}{" "}
            <Button
              variant="outline-danger"
              size="sm"
              id={props.index}
              onClick={removeFromCart}
            >
              {" "}
              Remove{" "}
            </Button>{" "}
          </Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default function Cart() {
  let products = JSON.parse(localStorage.getItem("cartItems"));
  let totalItems = products.length;

  let subTotal = 0;
  for (let i = 0; i < totalItems; i++) {
    if (products[i].name === "Swirling void"){continue};
    subTotal += products[i].price;
  }

  return (
    <div>
      <Header />
      <div className="cart">
        <div className="cart-buttons">
          <Button variant="outline-primary" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button variant="outline-primary" onClick={checkout}>
            Checkout
          </Button>
        </div>
        <h3>Shopping Cart</h3>
        <div className="cart-info">
          <h4>{`Total Items: ${totalItems}`}</h4>
          <h4>{`Subtotal: $${subTotal.toFixed(2)}`}</h4>
        </div>
        {!products.length && (
          <h3 className='empty-cart'>There's nothing here... maybe we should fix that!</h3>
        )}
        <Row xs={1} md={1} className="g-4">
          {products.map((item, index) => (
            <Col className="shoppingCart-col" key={index}>
              <CartItem item={item} index={index} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
}
