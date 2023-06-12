import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
      .then((res) => res.json())
      .then((data) => setFeedback(data))
      .finally(() => setIsLoading(false));
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      }).then(() => setFeedback(feedback.filter((item) => item.id !== id)));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  const addFeedback = async (newFeedback) => {
    await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => setFeedback([data, ...feedback]));
  };

  const updateFeedback = async (id, updItem) => {
    await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedback(
          feedback.map((item) => (id === item.id ? { ...item, ...data } : item))
        );
      });
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
