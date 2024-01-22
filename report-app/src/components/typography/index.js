import { string, node, object, number } from "prop-types";

const Typography = ({ fontSize, fontWeight, color, style, children, ...props }) => (
  <h1 style={{ fontSize, fontWeight, color, ...style }} {...props}>
    {children}
  </h1>
);

Typography.defaultProps = {
  style: {},
  fontSize: "14px",
  fontWeight: 400,
  color: "var(--text-color)",
};

Typography.propTypes = {
  fontSize: string,
  fontWeight: number,
  color: string,
  style: object,
  children: node,
};

export default Typography;
