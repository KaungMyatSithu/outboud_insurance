import React from "react";
import MyDocument from "./MyDocument";
import { PDFViewer } from "@react-pdf/renderer";

const PdfOverlay = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="root"
    >
      <div style={{ width: "80%", height: "100%" }}>
        <PDFViewer width={"100%"} height={"100%"}>
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PdfOverlay;
