import Footer from "./Footer";
import Header from "./Header";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getProdList, filterProducts, getProduct } from "./data";
import FilterPane from "./FilterPane";
import "../stylesheets/App.css";

const addToCart = (e) => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  console.log(e.target.id);
  let product = getProduct(e.target.id);
  console.log(product);
  let setItem = {
    name: product.name,
    price: product.price,
    img: product.img,
    desc: product.desc
  };

  cartItems.push(setItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log(localStorage);
  alert("nice choice!")
  window.location.reload();
};

export const Product = (props) => {
  const {img, name, price, desc, id} = props.item;

  return (
    <Card key={id}>
      <Card.Img variant="top" src={img} />
      <Card.Body className="cardBlock">
        <Card.Title>{name} ${price}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button
          variant="outline-success"
          size="sm"
          id={id}
          onClick={addToCart}
        >
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

  const products = useMemo(() => {
    if (!category) return getProdList();
    return filterProducts(category);
  }, [category]);

  return (
    <main>
      <Header />
      <div className="products">
        <FilterPane />
        <Row xs={1} md={3} className="g-4">
          {products.map((item) => (
            <Col key={item.id / 3}>
              <Product item={item} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </main>
  );
};

export default Products;
