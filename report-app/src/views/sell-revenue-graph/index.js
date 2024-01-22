import React, { useState, useEffect } from "react";
import { array } from "prop-types";
import { Layout } from "@jikji/react";
import Chart from "react-apexcharts";

// project imports
import { Container, Stack, Title } from "components";

import { getMonthName, nFormatter } from "helpers";

const options = {
  chart: {
    id: "total-sell-net-revenue-chart",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "top",
      },
    },
  },
  xaxis: {
    type: "category",
    categories: [],
  },
  legend: {
    show: true,
    fontSize: "16px",
    fontFamily: `'Roboto', sans-serif`,
    position: "bottom",
    offsetX: 20,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      width: 16,
      height: 16,
      radius: 5,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 8,
    },
  },
  fill: {
    type: "solid",
  },
  grid: {
    show: true,
  },
  tooltip: {
    y: {
      formatter(val) {
        return `₹ ${val}`;
      },
    },
  },
};

const SellNetRevenueGraph = ({ data }) => {
  const [series, setSeries] = useState([]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    if (data && data.length) {
      setSeries([
        {
          name: "Sell",
          data: data.map((c) => c.total_sell),
        },
        {
          name: "Revenue",
          data: data.map((c) => c.net_revenue),
        },
      ]);

      setChartOptions({
        ...chartOptions,
        colors: ["var(--purple1-color)", "var(--blue2-color)"],
        yaxis: {
          title: {
            text: "₹ (thousands)",
          },
          labels: {
            style: {
              colors: ["var(--text-color)"],
            },
            formatter(val) {
              return `${nFormatter(val, 1)}`;
            },
          },
        },
        grid: {
          borderColor: "var(--grey2-color)",
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${nFormatter(val, 1)}`;
          },
          style: {
            fontSize: "11px",
            colors: ["grey"],
          },
          offsetX: 3,
          offsetY: -22,
        },
        legend: {
          labels: {
            colors: "grey",
          },
          show: true,
          fontSize: "14px",
          fontFamily: `'Roboto', sans-serif`,
          position: "bottom",
          markers: {
            width: 16,
            height: 16,
            radius: 5,
          },
          itemMargin: {
            horizontal: 20,
            vertical: 10,
          },
        },
        xaxis: {
          type: "category",
          labels: {
            formatter(c) {
              return `${getMonthName(c.value1)} ${c.value2}`;
            },
          },
          categories: data,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Container>
      <Layout disableWrap={true}>
        <Stack rowGap="20px" style={{ marginTop: "20px" }}>
          <Title text="Sales / Revenue" />

          <Chart
            height={420}
            type="bar"
            options={chartOptions}
            series={series}
          />
        </Stack>
      </Layout>
    </Container>
  );
};

SellNetRevenueGraph.propTypes = {
  data: array,
};

export default SellNetRevenueGraph;
