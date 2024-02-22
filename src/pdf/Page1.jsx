import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../img/MI_PdfLogo.png";
import ulink from "../img/Ulink_Logo.png";
import qr from "../img/qr_code.png";
import tbBenefits from "../img/tableOfBenefits.png";
import { format } from "date-fns";
import axios from "axios";

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
    fontSize: 10,
  },
  //Heading
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -30,
  },
  topic: {
    fontSize: 13,
    alignItems: "center",
    marginTop: 30,
  },
  ins: {
    fontSize: 15,
    fontWeight: "bold",
  },
  phEm: {
    fontSize: 8,
    marginTop: 15,
  },
  photo: {
    width: "80px",
    height: "80px",
    marginTop: -20,
  },

  //Outboud Head
  outHead: {
    fontSize: 13,
    textAlign: "center",
  },

  //Bind Section
  bindV: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  bindV1: {
    padding: 20,
  },
  innerBind: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  innerBindTxt: {
    width: "100px",
  },

  //table
  tblHead: {
    marginLeft: 20,
    marginBottom: 10,
  },
  tblCon: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  tblCon2: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 20,
  },
  tbl: {
    borderTop: "1px",
    borderLeft: "1px",
    borderBottom: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
    backgroundColor: "#A9CCE3",
  },
  tbl1: {
    border: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
    backgroundColor: "#A9CCE3",
  },
  tblsec: {
    borderTop: "0px",
    borderLeft: "1px",
    borderBottom: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
  },
  tblsec1: {
    borderTop: "0px",
    borderLeft: "1px",
    borderRight: "1px",
    borderBottom: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
  },

  //Photo
  benf: {
    width: "95%",
    marginLeft: 20,
  },
  //After Photo Texts
  txtAfP: {
    marginLeft: 20,
    marginBottom: 20,
  },
  txtAfP1: {
    marginLeft: 20,
    marginBottom: 0,
  },
  // Photo
  footCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 400,
    marginLeft: 20,
  },
  lnkPhoto: {
    width: 60,
    height: 70,
  },
  qrcode: {
    width: 70,
    height: 70,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 8,
    marginTop: 45,
  },
});

function Page1({ id }) {
  const [data, setData] = useState();
  const [age, setAge] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/outboundProposal/findByCertificateId?id=${id}`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (data?.insuredPerson.insuredDOB) {
      const [day, month, year] = !data?.insuredPerson.child
        ? data?.insuredPerson.insuredDOB.split("-").map(Number)
        : data?.childDOB.split("-").map(Number);
      const birthDateObj = new Date(year, month - 1, day);
      const currentDate = new Date();
      const ageDiffMs = currentDate - birthDateObj;
      const ageDate = new Date(ageDiffMs);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

      setAge(calculatedAge);
    }
  }, [data]);

  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.topic}>
          <Text>Ministry of Planning and Finance</Text>
          <Text style={styles.ins}>Myanma Insurance</Text>
        </View>
        <View style={styles.heading}>
          <Image src={logo} style={styles.photo}></Image>

          <View style={styles.phEm}>
            <Text>Ph No: 01 8386919</Text>
            <Text>Email: lifere1-mi@mminsurance.gov.mm</Text>
          </View>
        </View>
        <Text style={styles.outHead}>
          Certificate of Insurance - Outbound Travel Accident Insurance
        </Text>
        <View style={styles.bindV}>
          {/* 1st Col */}
          <View style={styles.bindV1}>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Insurance Period</Text>
              <Text>: {data?.coveragePlan} Days</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Certificate Number</Text>
              <Text>: {data?.certificateID}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Agent/Agency name </Text>
              <Text>: [N/A]</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Policy Holder</Text>
              <Text>:{data?.insuredPerson.insuredName}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Covid-19 coverage</Text>
              <Text>: Yes</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Territorial Area </Text>
              <Text>: Worldwide</Text>
            </View>

            <Text style={styles.bindV1Txt}>
              Buy for yourself (This passport holder)
            </Text>
          </View>

          {/* 2nd Col */}
          <View style={styles.bindV1}>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Benefits</Text>
              <Text>: As per benefit table</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Destination To</Text>
              <Text>: {data?.journeyTo}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>PP/Country</Text>
              <Text>
                : {data?.insuredPerson.passportNumber}{" "}
                {data?.insuredPerson.passportIssueCountry}{" "}
              </Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Deductible /Person</Text>
              <Text>: 300,000 per claim * </Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Currency</Text>
              <Text>: MMK</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Payment Date</Text>
              <Text>:{currentDate}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Premium</Text>
              <Text>: {data?.premiumRate}</Text>
            </View>
          </View>
        </View>

        {/* Insure Info */}
        <View>
          <Text style={styles.tblHead}>
            This Certificate of Insurance confirms coverage for :
          </Text>
          <View style={styles.tblCon}>
            <View style={styles.tbl}>
              <Text>Insured's Name</Text>
            </View>
            <View style={styles.tbl}>
              <Text>Date of Birth</Text>
            </View>
            <View style={styles.tbl}>
              <Text>Age</Text>
            </View>
            <View style={styles.tbl}>
              <Text>Insurance Period</Text>
            </View>
            <View style={styles.tbl1}>
              <Text>Passport No</Text>
            </View>
          </View>

          {/* Sec Row */}
          <View style={styles.tblCon2}>
            <View style={styles.tblsec}>
              <Text>
                {!data?.insuredPerson.child
                  ? data?.insuredPerson.insuredName
                  : data?.childName}
              </Text>
            </View>
            <View style={styles.tblsec}>
              <Text>
                {!data?.insuredPerson.child
                  ? data?.insuredPerson.insuredDOB
                  : data?.childDOB}
              </Text>
            </View>
            <View style={styles.tblsec}>
              <Text>{age}</Text>
            </View>
            <View style={styles.tblsec}>
              <Text>{data?.coveragePlan}</Text>
            </View>
            <View style={styles.tblsec1}>
              <Text>
                {data?.insuredPerson.passportNumber}{" "}
                {data?.insuredPerson.passportIssueCountry}
              </Text>
            </View>
          </View>
        </View>
        <Image src={tbBenefits} style={styles.benf}></Image>
        <View>
          <Text style={styles.txtAfP}>
            This is a computer-generated document. No signature is required.
          </Text>
        </View>
        <View>
          <Text style={styles.txtAfP1}>
            Policy issued and serviced by: Myanma Insurance, #627/635, Merchant
            Road Yangon
          </Text>
          <Text style={styles.txtAfP}>
            Phone: (95-1) 8386919,Email: Lifereclaim-mi@mminsurance.gov.mm
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footCon}>
            <Image src={qr} style={styles.qrcode}></Image>
            <Image src={ulink} style={styles.lnkPhoto}></Image>
            <View>
              <Text>For Hospital Admissions</Text>
              <Text>https://www.ulinkmyanmar.com/mitravel </Text>
              <Text>09880441015</Text>
            </View>
          </View>
          <View style={styles.date}>
            <Text>Print Date : {currentDate}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

export default Page1;
