import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import feedbackData from "./data/feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  const [items, setItems] = useState(feedbackData);

  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete this?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setItems([newFeedback, ...items]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={items} />
                <FeedbackList
                  feedbackItems={items}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );
};

export default App;
