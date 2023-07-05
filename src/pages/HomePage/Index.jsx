import React from "react";
import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import EastIcon from "@mui/icons-material/East";
import "./index.css";
import man from "assets/man.png";
import eclipse from "assets/Ellipse 5.svg";
import eclipse6 from "assets/Ellipse 6.svg";
import group79 from "assets/Group 79.svg";
import group26 from "assets/Group 26.svg";
import group177 from "assets/Group 177.svg";
import bulbTree from "assets/bulbTree.png";
import { Box, useMediaQuery } from "@mui/material";
import { Carousel } from "antd";
import { Height } from "@mui/icons-material";

export const Home = () => {
  const isNotMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <div className="Home">
      <Navbar isNotMobileScreens={isNotMobileScreens} />
      {isNotMobileScreens ? (
        <div className="Content" style={{ backgroundColor: "#F3F4F6" }}>
          <section className="wenigroLtd flex">
            <div className="w-1/2 ">
              <div>
                <img
                  src={eclipse}
                  style={{ marginLeft: "400px", marginTop: "70px" }}
                />
              </div>
              <div
                className="wenigroLtdcontent ml-9"
                style={{ width: "280px", marginTop: "-40px" }}
              >
                <h2>WENIGRO LIMITED</h2>
                <p>Empowering Nigeria’s Agrotech and Energy Sector</p>
                <div className="LearnBtn">Learn More</div>
                <img
                  src={group79}
                  style={{ width: "3rem", height: "3rem", marginTop: "65px" }}
                />
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="">
                <img
                  src={man}
                  style={{
                    width: "30rem",
                    height: "40rem",
                    marginLeft: "110px",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="Section2 flex" style={{ marginTop: "45px" }}>
            <div className="w-1/2">
              <img src={bulbTree} />
            </div>
            <div
              className="w-1/2 flex flex-col text-white aboutWenigroContent items-center"
              style={{ backgroundColor: "#093A4B" }}
            >
              <div className="aboutWenigroContent ">
                <h3 style={{ marginTop: "40px" }}>ABOUT WENIGRO</h3>
                <p>
                  Wenigro Limited is a Nigerian conglomerate at the forefront of
                  innovation in the Agrotech and Energy industries. With a
                  strong commitment to sustainable development, we aim to
                  revolutionize agriculture and power in Nigeria by leveraging
                  cutting-edge technologies and delivering integrated solutions.
                  Our diverse portfolio of businesses, including Wenigro Power
                  and our Agrotech division, positions us as a key driver of
                  positive change in these vital sectors.
                </p>
                <div
                  style={{
                    color: "#5CBD72",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                  }}
                >
                  Learn More <EastIcon />{" "}
                </div>
              </div>
            </div>
          </section>

          <section
            className="section3 flex bg-white "
            style={{ marginTop: "45px" }}
          >
            <div className="w-1/2 powerContainer">
              <div className="powerContent">
                <h3>WENIGRO POWER</h3>
                <p>
                  Wenigro Power, a division of Wenigro Limited, is dedicated to
                  transforming Nigeria’s energy landscape.By offering innovative
                  energy solutions, we empower individuals and businesses to
                  access reliable, clean, and affordable power.
                </p>
                <Box
                  sx={{
                    bgcolor: "#5DBE72",
                    color: "white",
                    height: "40px",
                    width: "230px",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": { cursor: "pointer", bgcolor: "GrayText" },
                  }}
                >
                  Details
                </Box>
              </div>
            </div>
            <div className="w-1/2 wenPowerContainer">
              <div className="wenPowerImg"></div>
            </div>
          </section>

          <section
            className="section4 flex bg-white "
            style={{ marginTop: "45px" }}
          >
            <div className="w-1/2 powerContainer">
              <div className="powerContent">
                <h3>WENIGRO FARMS</h3>
                <p>
                  Wenigro Power, a division of Wenigro Limited, is dedicated to
                  transforming Nigeria’s energy landscape.By offering innovative
                  energy solutions, we empower individuals and businesses to
                  access reliable, clean, and affordable power.
                </p>
                <Box
                  sx={{
                    bgcolor: "#5DBE72",
                    color: "white",
                    height: "40px",
                    width: "230px",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": { cursor: "pointer", bgcolor: "GrayText" },
                  }}
                >
                  Details
                </Box>
              </div>
            </div>
            <div className="w-1/2 wenPowerContainer">
              <div className="wenFarmsImg"></div>
            </div>
          </section>

          <section className="section5" style={{ marginTop: "45px" }}>
            <div className="wenigroRevoContainer relative">
              <h1 className="exampletest"> WENIGRO </h1>
              <div className="wenigroRevoContent flex flex-col items-center">
                <h3
                  style={{
                    width: "45rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                  }}
                >
                  HOW WENIGRO IS REVOLUTIONISING AGRICULTURE AND POWER
                </h3>
                <p
                  style={{
                    width: "36rem",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  At Wenigro Limited, we believe in harnessing technology and
                  expertise to create a positive impact on Nigeria’s
                  agricultural and energy sectors.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="frameImage">
              <div className="image11 ">
                <div
                  style={{
                    border: "2px solid white",
                    width: "22.125rem",
                    height: "23.125rem",
                  }}
                ></div>
              </div>
              <div className="image12"></div>
              <div className="image13"></div>
            </div>
          </section>
        </div>
      ) : (
        //for mobile screen
        <>
          <div className="Content" style={{ backgroundColor: "#F3F4F6" }}>
            <section
              className="wenigroLtd flex justify-center"
              style={{ height: "35rem" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src={eclipse}
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    marginTop: "65px",
                    position: "absolute",
                    top: 30,
                    left: -2,
                  }}
                />
                <img
                  src={group79}
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    marginTop: "65px",
                    position: "absolute",
                    left: 290,
                  }}
                />
                <div
                  className="wenigroLtdcontent"
                  style={{
                    minWidth: "280px",
                    alignItems: "center",
                    padding: "0px 8px",
                  }}
                >
                  <h2>WENIGRO LIMITED</h2>
                  <p>Empowering Nigeria’s Agrotech and Energy Sector</p>
                  <Box
                    className="LearnBtn"
                    sx={{
                      width: "90%",
                      "&:hover": { cursor: "pointer", bgcolor: "GrayText" },
                    }}
                  >
                    Learn More
                  </Box>
                  <img
                    src={group26}
                    style={{
                      width: "4.5rem",
                      marginTop: "2.5rem",
                    }}
                  />
                </div>
                <img
                  src={group79}
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    marginTop: "65px",
                    position: "absolute",
                    left: -29,
                    bottom: 50,
                  }}
                />
                <img
                  src={group177}
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    marginTop: "65px",
                    position: "absolute",
                    left: 70,
                    bottom: -10,
                  }}
                />
                <img
                  src={eclipse6}
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    marginTop: "65px",
                    position: "absolute",
                    left: 310,
                    bottom: 3,
                  }}
                />
              </div>
            </section>
            <section className="Section2" style={{ marginTop: "45px" }}>
              <div>
                <img src={bulbTree} width={"100%"} />
              </div>
              <div
                className="flex flex-col text-white aboutWenigroContent items-center"
                style={{ backgroundColor: "#093A4B" }}
              >
                <div className="aboutWenigroContent ">
                  <h3 style={{ marginTop: "40px" }}>ABOUT WENIGRO</h3>
                  <p>
                    Wenigro Limited is a Nigerian conglomerate at the forefront
                    of innovation in the Agrotech and Energy industries. With a
                    strong commitment to sustainable development, we aim to
                    revolutionize agriculture and power in Nigeria by leveraging
                    cutting-edge technologies and delivering integrated
                    solutions. Our diverse portfolio of businesses, including
                    Wenigro Power and our Agrotech division, positions us as a
                    key driver of positive change in these vital sectors.
                  </p>
                  <div
                    style={{
                      color: "#5CBD72",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    Learn More <EastIcon />{" "}
                  </div>
                </div>
              </div>
            </section>

            <section
              className="section3 bg-white  flex flex-col items-center"
              style={{ marginTop: "45px" }}
            >
              <div className="powerContainer flex  justify-center">
                <div className="powerContentM">
                  <h3>WENIGRO POWER</h3>
                  <p>
                    Wenigro Power, a division of Wenigro Limited, is dedicated
                    to transforming Nigeria’s energy landscape.By offering
                    innovative energy solutions, we empower individuals and
                    businesses to access reliable, clean, and affordable power.
                  </p>
                  <Box
                    sx={{
                      bgcolor: "#5DBE72",
                      color: "white",
                      height: "40px",
                      width: "90%",
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": { cursor: "pointer", bgcolor: "GrayText" },
                    }}
                  >
                    Details
                  </Box>
                </div>
              </div>
              <div className="wenPowerContainerM">
                <div className="wenPowerImgM"></div>
              </div>
            </section>

            <section
              className="section4 bg-white  flex flex-col items-center"
              style={{ marginTop: "45px" }}
            >
              <div className="powerContainer flex  justify-center">
                <div className="powerContentM">
                  <h3>WENIGRO FARMS</h3>
                  <p>
                    Wenigro Power, a division of Wenigro Limited, is dedicated
                    to transforming Nigeria’s energy landscape.By offering
                    innovative energy solutions, we empower individuals and
                    businesses to access reliable, clean, and affordable power.
                  </p>
                  <Box
                    sx={{
                      bgcolor: "#5DBE72",
                      color: "white",
                      height: "40px",
                      width: "90%",
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": { cursor: "pointer", bgcolor: "GrayText" },
                    }}
                  >
                    Details
                  </Box>
                </div>
              </div>
              <div className="wenPowerContainerM">
                <div className="wenFarmsImgM"></div>
              </div>
            </section>
            <section className="section5" style={{ marginTop: "45px" }}>
              <div className="wenigroRevoContainer relative">
                <h1 className="exampletest"> WENIGRO </h1>
                <div className="wenigroRevoContent flex flex-col items-center px-4">
                  <h3
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: "700",
                    }}
                  >
                    HOW WENIGRO IS REVOLUTIONISING AGRICULTURE AND POWER
                  </h3>
                  <p
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    At Wenigro Limited, we believe in harnessing technology and
                    expertise to create a positive impact on Nigeria’s
                    agricultural and energy sectors.
                  </p>
                </div>
              </div>
            </section>

            <section className="section6 p-5">
              <div className="" style={{ width: "100%", height: "25rem" }}>
                <Carousel autoplay style={{ height: "100%" }}>
                  <div style={{ height: "100%" }}>
                    <div className="image11M">
                      <div
                        style={{
                          border: "2px solid white",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="image12M"></div>
                  </div>
                  <div>
                    <div className="image13M"></div>
                  </div>
                </Carousel>
              </div>
            </section>
          </div>
        </>
      )}

      <Footer isNotMobileScreens={isNotMobileScreens} />
    </div>
  );
};
