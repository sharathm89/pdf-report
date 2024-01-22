import { string, node, object, oneOf } from "prop-types";

const Stack = ({ display, direction, rowGap, columnGap, style, className, children }) => {
  return (
    <div style={{ display, flexDirection: direction, rowGap, columnGap, ...style }} className={className}>
      {children}
    </div>
  );
};

Stack.defaultProps = {
  style: {},
  display: "flex",
  direction: "column",
  rowGap: "0px",
  columnGap: "0px",
};

Stack.propTypes = {
  display: string,
  rowGap: string,
  columnGap: string,
  direction: oneOf(["column-reverse", "column", "row-reverse", "row"]),
  style: object,
  children: node,
  className: string,
};

export default Stack;
