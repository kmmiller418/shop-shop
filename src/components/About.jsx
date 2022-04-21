import Footer from "./Footer";
import Header from "./Header";
import "../stylesheets/About.css";
import Form from "./Form";

export default function About() {
  return (
    <div className="About">
      <Header />
      <div className="text-container">
        <h3>The truth is, we're box people.</h3>
        <p>And we have a sneaking suspicion you might be too.</p>
        <p>
          Here at Shop Shop, we value the simple joy of buying something,
          waiting on a package, getting a shipping notification, and opening a
          box. And we aim to make that experience as easy as possible so the
          only things you have to worry about are what to buy (and hey, we get
          it, decisions can be hard, that's why we buy plenty and buy often!)
          and how to avoid those accursed papercuts.
        </p>
        <p>
          Or even worse. Cardboard cuts. But hey a good pair of scissors goes a
          long way! Maybe you could pick some up here! Do we sell scissors? Who
          knows? You could! You could be the proud owner of a pair of Shop Shop
          scissors. You won't know until you check, so they could be there.
          Schrodinger's Shop Shop scissors. Eat your heart out CutCo.
        </p>
        <p>
          That aside, we want you to know that we are committed to ensuring that
          your needs are met, so if anything doesn't meet your expectations, we
          want to hear about it! For any questions or suggestions, please fill
          out the form below and one of our Shop Shop experts will get back to
          you as soon as possible.
        </p>
        <p>
          If you have an issue with a recent order or need to request a return,
          please note the order number and be sure to enclose your screams into
          the attached packaging and dial at least 34 sequential digits of pi
          into your nearest phonebooth.
        </p>
        <h4>Have a lovely, boxy day!</h4>

        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMjI4Yi1hZS0wMDA0LmpwZw.jpg?s=Gd6ld7veWFMgvfjNjj5uUd00EN8dcU5w8JLq4Ht-FL4"
          alt="two people sitting with boxes over them"
        />
      </div>
      <Form />
      <Footer />
    </div>
  );
}
