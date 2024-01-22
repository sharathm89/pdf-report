import { string, array } from "prop-types";
import { Table } from "@jikji/react";

// project imports
import { Typography } from "components";

import { getMonthName, getQuarterName } from "helpers";

const ItemView = ({ financialYear, name, list }) => (
  <Table className="table" style={{ margin: "10px 0" }}>
    <thead>
      <tr className="table-head">
        <th
          colSpan={2}
          rowSpan={2}
          style={{ borderRight: "1px solid var(--border-color)" }}
        >
          <Typography
            fontSize="16px"
            fontWeight={700}
            style={{ marginLeft: "5px" }}
          >
            FY {financialYear}
          </Typography>
        </th>
        <th colSpan={3} style={{ backgroundColor: "var(--grey1-color)" }}>
          <Typography
            fontSize="16px"
            fontWeight={700}
            color="var(--text-color)"
            style={{ marginLeft: "10px" }}
          >
            {name}
          </Typography>
        </th>
      </tr>

      <tr className="table-head-no-bg">
        <th align="center">
          <Typography fontWeight={700}>Column 1</Typography>
        </th>
        <th align="center">
          <Typography fontWeight={700}>Column 2</Typography>
        </th>
      </tr>
    </thead>

    <tbody>
      {list.map((item, index) => (
        <tr
          className="table-row"
          key={index}
          style={{ borderBottomWidth: (index + 1) % 3 === 0 ? "2px" : "1px" }}
        >
          {index % 3 === 0 ? (
            <td
              rowSpan={3}
              width="13%"
              align="center"
              style={{ backgroundColor: "var(--grey1-color)" }}
            >
              <Typography style={{ marginLeft: "5px" }}>
                {getQuarterName(index)} {financialYear}
              </Typography>
            </td>
          ) : null}
          <td
            align="center"
            width="13%"
            style={{
              backgroundColor: "var(--grey1-color)",
              borderRight: "1px solid var(--border-color)",
            }}
          >
            <Typography>
              {getMonthName(item.value1)} &apos;
              {item.value2.toString().slice(-2)}
            </Typography>
          </td>
          <td align="center" width="37%">
            <Typography>{item.roomNight}</Typography>
          </td>
          <td align="center" width="37%">
            <Typography>{item.flightSeat}</Typography>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ItemView.propTypes = {
  financialYear: string,
  name: string,
  list: array,
};

export default ItemView;
