import "../stylesheets/About.css";
import { useReducer } from "react";

const Form = () => {
  const handleName = (e) => {
    updateFeedback({ name: e.target.value });
  };
  const handleEmail = (e) => {
    updateFeedback({ email: e.target.value });
  };
  const handlePhone = (e) => {
    updateFeedback({ phone: e.target.value });
  };
  const handleMessage = (e) => {
    updateFeedback({ message: e.target.value });
  };

  const handleSubmit = () => {
    if (feedback.name && feedback.email && feedback.message) {
      updateFeedback({ valid: true });
      return;
    }
    alert("please fill out all required fields, marked with an asterisk");
  };

  const initialFeedback = {
    name: "",
    email: "",
    tel: "",
    message: "",
    valid: false,
  };
  
  const [feedback, updateFeedback] = useReducer(
    (feedback, updates) => ({
      ...feedback,
      ...updates,
    }),
    initialFeedback
  );

  return (
    <div>
      {!feedback.valid ? (
        <div className="form">
          <h3>Contact Us</h3>
          <input placeholder="Name*" type="text" onChange={handleName}></input>
          <input
            placeholder="Email*"
            type="email"
            onChange={handleEmail}
          ></input>
          <input
            placeholder="Telephone"
            type="tel"
            onChange={handlePhone}
          ></input>
          <textarea placeholder="Message*" onChange={handleMessage}></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="form">
            <h5>Thank you for your feedback, {feedback.name}!</h5>
          <p>
             A Shop Shopper will be
            in touch with you shortly. <strong>Your confirmation number is #
            {Math.floor(Math.random() * 10000000)}.</strong> Please write it down and burn
            it under the next new moon for best results. In the meantime, why not stop on by
            the Shop Shop shop and see what fun tchotchkes or world-ending knickknacks we've got
            in store for your shopping cart this time?
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
