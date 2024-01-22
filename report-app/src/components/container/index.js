import { object, node } from "prop-types";

const Container = ({ style, children }) => <div style={{ padding: "0 10px", ...style }}>{children}</div>;

Container.defaultProps = {
  style: {},
};

Container.propTypes = {
  style: object,
  children: node,
};

export default Container;
