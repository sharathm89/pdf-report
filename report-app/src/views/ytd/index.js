import React from "react";
import { array, string } from "prop-types";
import { Layout } from "@jikji/react";

// project imports
import { Container, Stack, Title } from "components";
import ItemView from "./item";

const YTDBookingsView = ({ financialYear, list }) => (
  <Container>
    <Stack style={{ marginTop: "40px" }}>
      <Title text="Year to Date" />

      <Stack rowGap="25px">
        {list.map((item, index) => (
          <Layout disableWrap={true} key={index}>
            <ItemView
              financialYear={financialYear}
              name={item.name}
              list={item.list || []}
            />
          </Layout>
        ))}
      </Stack>
    </Stack>
  </Container>
);

YTDBookingsView.propTypes = {
  financialYear: string,
  list: array,
};

export default YTDBookingsView;
