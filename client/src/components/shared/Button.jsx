import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ text, link }) => {
  return (
    <Button style={{}}>
      {link ? (
        <>
          <Link to={link}>{text}</Link>
        </>
      ) : (
        <> {text}</>
      )}
    </Button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
