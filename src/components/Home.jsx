import "../stylesheets/Home.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-text">
          <h1>Why have few things when you could have more things?</h1>
        </div>
      </div>

      <div className="cards">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxNDI1MzMxLWltYWdlLWt3eXFjYW1nLmpwZw.jpg?s=rQFR55sry4YTR71obPsDZgEmJsgCeX_UWrRAiYgI1k4" />
            <Card.Body>
              <Card.Title>Tangible</Card.Title>
              <Card.Text>
                There are a lot of holidays in the year. There are a lot of people in the world.
                There is a lot of space in your closet. What do you think we're suggesting? Buy some tangibles.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last purchased {Math.floor(Math.random()*7)} min ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMyMTc5OS1pbWFnZS1rd3lydXFvei5qcGc.jpg?s=mDZqF9VH_9hkfPgs5PIRJT0wK5jAqU9nh4t_BmSf25U" />
            <Card.Body>
              <Card.Title>Intangible</Card.Title>
              <Card.Text>
                Do you ever feel overburdened thinking about the eventual heat death of the universe? Peruse our growing catalog of thoughts and assorted hopes and horrors.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last purchased {Math.floor(Math.random()*12)} min ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAyNi10YXlsb3Ita2lzZXItMjEtMS5qcGc.jpg?s=XI55xczYM-CmSjK9gg5usVVKigTMSBpeHq7NORWcpIU" />
            <Card.Body>
              <Card.Title>Edible</Card.Title>
              <Card.Text>
                All the flavors you crave, curated by our very own passionate team of Shop Shoppers. Whether
                you're looking for a new treat or a tried and true favorite, you're sure to find it here!      
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last purchased {Math.floor(Math.random()*5)} min ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxODg3MTc5LXdpa2ltZWRpYS1pbWFnZS1rb3dhdzVvaC5qcGc.jpg?s=GEmZ_y3OTLp8KKULmC3Dsy0uVBgNu-MTICKh2DxbA3Y" />
            <Card.Body>
              <Card.Title>May Fight Back</Card.Title>
              <Card.Text>
                 Look, we would never tell you that your hobbies are boring or that you come across as lame, but
                 maybe there's a reason people don't seem to listen very closely to you at happy hours. Could this be your chance?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last purchased {Math.floor(Math.random()*3)} min ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      <h3><Link to="/products">Go pick up something nice for yourself</Link></h3>
      </div>
    </main>
  );
};



export default Home;
