import { keyframes, Stack } from "@mui/material";
import "./loader.css";
import styled from "@emotion/styled";

const colorStages = [
  { bg: "rgb(60, 66, 55)", text: "rgb(230, 225, 215)" },
  { bg: "rgb(200, 180, 160)", text: "rgb(60, 66, 55)" },
  { bg: "rgb(230, 225, 215)", text: "rgb(60, 66, 55)" },
  { bg: "rgb(100, 110, 90)", text: "rgb(230, 225, 215)" },
];

const fade = keyframes`
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Style = styled.div({
  display: "flex",
  justifyContent: "center",

  span: {
    display: "inline-block",
    position: "fixed",
    top: "60%",
    left: "45%",
  },

  "span[data-id]::before": {
    opacity: "0",
    lineHeight: "1",
    fontSize: "25px",
    content: "attr(data-id)",
    backgroundPosition: "center",
    animation: `${fade} 4s ease-in-out calc(0.45s * var(--data-x))`,
  },
});

export default function Loading() {
  //   useEffect(() => {
  //     updateColors();
  //   }, [progress]);
  //   function updateColors() {
  //     const stage = Math.floor(progress / 25);
  //     if (stage < colorStages.length) {
  //       document.body.style.backgroundColor = colorStages[stage].bg;
  //       document.body.style.backgroundColor = colorStages[stage].text;
  //       //   document
  //       //     .querySelectorAll(".loading-text .char, .percentage")
  //       //     .forEach((el) => {
  //       //       el.style.color = colorStages[stage].text;
  //       //     });
  //     }
  //   }
  return (
    <Stack>
      {/* <Style>
        <span data-id="L" style={{ "--data-x": 1 }}></span>
        <span data-id="Lo" style={{ "--data-x": 2 }}></span>
        <span data-id="Loa" style={{ "--data-x": 3 }}></span>
        <span data-id="Load" style={{ "--data-x": 4 }}></span>
        <span data-id="Loadi" style={{ "--data-x": 5 }}></span>
        <span data-id="Loadin" style={{ "--data-x": 6 }}></span>
        <span data-id="Loading" style={{ "--data-x": 7 }}></span>
        <span data-id="Loading." style={{ "--data-x": 8 }}></span>
        <span data-id="Loading.." style={{ "--data-x": 9 }}></span>
        <span data-id="Loading..." style={{ "--data-x": 10 }}></span>
      </Style> */}
      {/* <Box>{progress}</Box> */}
      {/* <Typography>Loading.....</Typography> */}
      {/* <div className="loading">
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
          <circle
            className="pl__ring pl__ring--a"
            cx="120"
            cy="120"
            r="105"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 660"
            strokeDashoffset="-330"
            strokeLinecap="round"
          ></circle>
          <circle
            className="pl__ring pl__ring--b"
            cx="120"
            cy="120"
            r="35"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 220"
            strokeDashoffset="-110"
            strokeLinecap="round"
          ></circle>
          <circle
            className="pl__ring pl__ring--c"
            cx="85"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 440"
            strokeLinecap="round"
          ></circle>
          <circle
            className="pl__ring pl__ring--d"
            cx="155"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            strokeWidth="20"
            strokeDasharray="0 440"
            strokeLinecap="round"
          ></circle>
        </svg>
      </div> */}
      <div className="introLoading">
        <span>Loading</span>
      </div>
    </Stack>
  );
}
