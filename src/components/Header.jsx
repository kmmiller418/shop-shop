import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/shop-shop">Shop Shop</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/shop-shop/#/products">Products</Nav.Link>
            <Nav.Link href="/shop-shop/#/about">About/Contact Us</Nav.Link>
            <Nav.Link href="/shop-shop/#/cart">Cart ({cartItems.length})</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;