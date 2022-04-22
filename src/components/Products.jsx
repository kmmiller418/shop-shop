import Footer from "./Footer";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProdList, filterProducts, categories } from "./data";
import "../stylesheets/App.css";

function OffCanvas() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <h2>Products</h2>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        Filter Products
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll="true" backdrop="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Product Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
          {categories.map((category) => (
            <li key={category}>
              <CategoryLink category={category}>{category}</CategoryLink>
            </li>
          ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function CategoryLink({ category, children, ...props }) {
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("category") === category;

  return (
    <Link
      to={`products/?category=${category}`}
      {...props}
      style={{
        ...props.style,
        color: isActive ? "red" : "black",
      }}
    >
      {children}
    </Link>
  );
}

const Product = (props) => {
  return (
    <Card key={props.item.id}>
      <Card.Img variant="top" src={props.item.img} />
      <Card.Body className="cardBlock">
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>{props.item.desc}</Card.Text>
        <Button variant="outline-success" size="sm">
          {" "}
          Add to Cart{" "}
        </Button>{" "}
      </Card.Body>
    </Card>
  );
};

const Products = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const products = React.useMemo(() => {
    if (!category) return getProdList();
    return filterProducts(category)
  }, [category])

  return (
    <main>
      <Header />
      <div className="products">
        <OffCanvas />
        <Row xs={1} md={3} className="g-4">
          {products.map((item) => (
            <Col key={item.id / 3}>
              <Product item={item}/>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </main>
  );
};

export default Products;
