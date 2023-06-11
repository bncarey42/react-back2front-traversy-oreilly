import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "Feedback item 1", rating: 5 },
    { id: 2, text: "Feedback item 2", rating: 4 },
    { id: 3, text: "Feedback item 3", rating: 7 },
    { id: 4, text: "Feedback item 4", rating: 8 },
    { id: 5, text: "Feedback item 5", rating: 10 },
    { id: 6, text: "Feedback item 6", rating: 3 },
    { id: 7, text: "Feedback item 7", rating: 1 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (id === item.id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
