import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedbackItems, handleDelete }) => {
    
    if (!feedbackItems || feedbackItems.length < 1) {
        return (<p>No Feedback Yet</p>);
    }
    return (
        <div className="feedback-list">
        <AnimatePresence>{feedbackItems.map(feedbackItem => {
            return (
                <motion.div
                    key={feedbackItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{opacity: 0}}
                >
                    <FeedbackItem key={feedbackItem.id} item={feedbackItem} handleDelete={handleDelete} />
                </motion.div>);
        })}
                </AnimatePresence>
    </div >
    );
};

FeedbackList.propTypes = {
    feedbackItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }))
}


export default FeedbackList