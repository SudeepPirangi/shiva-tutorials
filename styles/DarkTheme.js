import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

// import PermanentMarker from "../public/fonts/Permanent_Marker/PermanentMarker-Regular.ttf";
// import Courgette from "../public/fonts/Courgette/Courgette-Regular.ttf";

// const permanentMarker = {
//   fontFamily: "PermanentMarker",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     local('PermanentMarker'),
//     local('PermanentMarker-Regular'),
//     url(${PermanentMarker}) format('ttf')
//   `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
// };

const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: {
      main: "#b9f6ca",
    },
  },
  typography: {
    fontFamily: "Bona Nova",
    h3: {
      fontFamily: "Akaya Kanadaka",
    },
    h4: {
      fontFamily: "Courgette",
    },
  },
});

export default DarkTheme;
