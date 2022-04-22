import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "./data";
import { Button, Offcanvas } from "react-bootstrap";
import "../stylesheets/App.css";

export default function FilterPane() {
  const [show, setShow] = useState(false);

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
          <ul className="product-filters">
            {categories.map((category) => (
              <li key={category}>
                <CategoryLink category={category}>{category}</CategoryLink>
              </li>
            ))}
            <li>
              <Link to="/products">All</Link>
            </li>
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
        color: isActive ? "green" : "black",
      }}
    >
      {children}
    </Link>
  );
}
