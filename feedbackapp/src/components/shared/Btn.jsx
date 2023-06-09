import PropTypes from "prop-types";

const Btn = ({ children, version, type, isDisabled }) => {
  return (
    <button disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Btn.defaultProps = {
  isDisabled: false,
  type: "button",
  version: "primary",
};

export default Btn;
