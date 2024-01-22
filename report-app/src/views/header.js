import { Box, Stack, Typography } from "components";

const Header = () => (
  <Box
    style={{
      padding: "0 8px",
      height: "60px",
      borderBottom: "1px solid var(--grey3-color)",
    }}
  >
    <Stack rowGap="20px" style={{ justifyContent: "center", height: "100%" }}>
      <Typography
        color="var(--text-color)"
        style={{
          fontWeight: 600,
          fontSize: "21px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Report
      </Typography>
    </Stack>
  </Box>
);

export default Header;
