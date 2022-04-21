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
    if (!feedback.name || !feedback.email || !feedback.message) {
      alert('Please fill out all required fields');
      return;
    }
  };

  const initialFeedback = {
    name: "",
    email: "",
    tel: "",
    message: "",
  };
  const [feedback, updateFeedback] = useReducer(
    (feedback, updates) => ({
      ...feedback,
      ...updates,
    }),
    initialFeedback
  );

  
  return (
    <div className="form">
      <h3>Contact Us</h3>
      <input placeholder="Name*" type="text" onChange={handleName}></input>
      <input placeholder="Email*" type="email" onChange={handleEmail}></input>
      <input placeholder="Telephone" type="tel" onChange={handlePhone}></input>
      <textarea placeholder="Message*" onChange={handleMessage}></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;