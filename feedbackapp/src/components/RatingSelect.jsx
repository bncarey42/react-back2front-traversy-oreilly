import { useState } from "react";
const RatingsSelect = ({ options, select }) => {
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
