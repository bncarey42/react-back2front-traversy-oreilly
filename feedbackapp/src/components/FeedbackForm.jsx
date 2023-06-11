import { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import Btn from "./shared/Btn";
import RatingsSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = ({}) => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const [rating, setRating] = useState();

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMsg("text must be over 10 characters");
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the service here?</h2>
        <RatingsSelect
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          select={(rating) => setRating(rating)}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Btn type="submit" isDisabled={btnDisabled}>
            Send
          </Btn>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
