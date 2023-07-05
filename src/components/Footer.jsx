import React from 'react'
import Wenigrologo from "assets/wenLogo.png";
import "./styles/footer.css";
export const Footer = ({ isNotMobileScreens }) => {
  return (
    <>
      {isNotMobileScreens ? (
        <>
          <div className="flex footer ">
            <div className="w-1/2 flex justify-center items-center">
              <div className="flex flex-col mr-3" style={{ width: "230px" }}>
                <img
                  src={Wenigrologo}
                  style={{ width: "8.8rem", height: "2.6rem" }}
                />
                <p
                  className="text-white"
                  style={{ fontSize: "1rem", fontWeight: "500" }}
                >
                  An except of about wemigro Lemited
                </p>
              </div>
              <div className="aboutWenigro flex flex-col">
                <h3>About Wenigro</h3>
                <p>FAQ</p>
                <p>Contact Us</p>
                <p>Career Page</p>
              </div>
            </div>
            <div className="w-1/2 productPart flex  items-center">
              <div className="aboutWenigro flex flex-col mr-20 ml-9">
                <h3>Product</h3>
                <p>Wenigro Power</p>
                <p>Agrotechnology</p>
              </div>
              <div className="aboutWenigro flex flex-col">
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>About</p>
                <p>BLog</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex footer ">
            <div className="w-1/2 flex justify-center items-center p-5">
              <div className="flex flex-col mr-2" style={{ width: "9rem" }}>
                <img
                  src={Wenigrologo}
                  style={{ width: "5.8rem", height: "2.0rem" }}
                />
                <p
                  className="text-white"
                  style={{ fontSize: "0.9rem", fontWeight: "500" }}
                >
                  An except of about wemigro Lemited
                </p>
              </div>
              <div className="aboutWenigro flex flex-col">
                <h3 style={{ fontSize: "0.9rem" }}>About Wenigro</h3>
                <p style={{ fontSize: "0.8rem" }}>FAQ</p>
                <p style={{ fontSize: "0.8rem" }}>Co ntact Us</p>
                <p style={{ fontSize: "0.8rem" }}>Career Page</p>
              </div>
            </div>
            <div className="w-1/2 productPart flex  items-center">
              <div className="aboutWenigro flex flex-col mr-4 ">
                <h3 style={{ fontSize: "0.9rem" }}>Product</h3>
                <p style={{ fontSize: "0.8rem" }}>Wenigro Power</p>
                <p style={{ fontSize: "0.8rem" }}>Agrotechnology</p>
              </div>
              <div className="aboutWenigro flex flex-col">
                <h3 style={{ fontSize: "0.9rem" }}>Quick Links</h3>
                <p style={{ fontSize: "0.7rem" }}>Home</p>
                <p style={{ fontSize: "0.7rem" }}>About</p>
                <p style={{ fontSize: "0.7rem" }}>Blog</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
