import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={style}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "FeedbackUI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Headers.defaultProps = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
