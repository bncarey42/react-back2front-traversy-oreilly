import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
const RatingsSelect = ({ options, select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {options.map((opt) => {
        return (
          <li key={opt}>
            <input
              type="radio"
              id={`num${opt}`}
              name="rating"
              value={opt}
              onChange={handleChange}
              checked={selected === opt}
            />
            <label htmlFor={`num${opt}`}> {opt}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingsSelect;
