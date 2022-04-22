import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Shop Shop</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About/Contact Us</Nav.Link>
            <Nav.Link href="/cart">Cart ({JSON.parse(localStorage.getItem("cartItems")).length})</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;