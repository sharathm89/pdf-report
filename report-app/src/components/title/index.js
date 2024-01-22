import { string } from "prop-types";

// project imports
import Typography from "../typography";

const Title = ({ text }) => (
  <Typography fontSize="19px" fontWeight={700} color="var(--primary-color)">
    {text}
  </Typography>
);

Title.propTypes = {
  text: string,
};

export default Title;
