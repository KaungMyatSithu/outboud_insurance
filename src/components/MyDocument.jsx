import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../img/MI_PdfLogo.png";
import Page1 from "../pdf/Page1";
import Page2 from "../pdf/Page2";
import Page3 from "../pdf/Page3";
import Page4 from "../pdf/Page4";
import Page5 from "../pdf/Page5";
import Page6 from "../pdf/Page6";
import Page7 from "../pdf/Page7";
import Page8 from "../pdf/Page8";
import Page9 from "../pdf/Page9";
import Page10 from "../pdf/Page10";
import Page11 from "../pdf/Page11";
import Page12 from "../pdf/Page12";

// Create styles
const styles = StyleSheet.create({
  //Container
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",

  },
  section: {
    width: "95%",
    margin: "0 auto",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document style={styles.container} title="myanma_insurnace.pdf">
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Page8 />
    <Page9 />
    <Page10 />
    <Page11 />
    <Page12 />
  </Document>
);
export default MyDocument;
