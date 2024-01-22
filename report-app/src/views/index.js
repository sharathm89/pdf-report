import React, { useState, useEffect } from "react";
import {
  PageContent,
  PageHeader,
  ReportRoot,
  ReportView,
  Section,
  pageSize,
} from "@jikji/react";

// project imports
import Header from "./header";
import SellRevenueGraph from "./sell-revenue-graph";
import YTDView from "./ytd";

const MisReport = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const tempData = require(`../data/sample.json`);
    setData(tempData.data);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <ReportView>
      <ReportRoot>
        <Section dimension={pageSize.A4}>
          <PageHeader>
            <Header />
          </PageHeader>

          <PageContent>
            <SellRevenueGraph data={data.sellNetRevenueGraph} />

            <YTDView financialYear={data.financialYear} list={data.bookings} />
          </PageContent>
        </Section>
      </ReportRoot>
    </ReportView>
  );
};

export default MisReport;
