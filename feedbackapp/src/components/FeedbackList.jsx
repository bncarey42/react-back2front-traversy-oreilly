import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length < 1) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((feedbackItem) => {
          return (
            <motion.div
              key={feedbackItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={feedbackItem.id}
                item={feedbackItem}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
