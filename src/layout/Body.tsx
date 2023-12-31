import { styled } from "@mui/material";

function Body({ children }) {
  return <BodyContainer>{children}</BodyContainer>;
}

const BodyContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 20,
  alignItems: "center",
  maxWidth: "100vw",
});

export default Body;
