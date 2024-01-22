import { any } from "prop-types";

const Box = ({ children, ...props }) => <div {...props}>{children}</div>;

Box.propTypes = {
  children: any,
};

export default Box;
