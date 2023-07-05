import { IconButton, useMediaQuery,Box } from "@mui/material";
import Wenigrologo from "assets/wenLogo.png";
import {Close, MenuOutlined} from "@mui/icons-material";
import "./styles/navbar.css"
import { useState } from "react";
export const Navbar = ({ isNotMobileScreens }) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  console.log(isMobileMenuToggled)
  return (
    <div>
      {isNotMobileScreens ? (
        <>
          <nav className="flex justify-between items-center px-12 py-5">
            <img
              src={Wenigrologo}
              style={{ width: "8.8rem", height: "2.6rem", marginRight: "45px" }}
            />
            <li className="navItem">Home</li>
            <li className="navItem">Products</li>
            <li className="navItem">Contact Us</li>
            <li className="navItem">FAQ</li>
            <div className="flex">
              <div className="navfarms mr-6">Wenigro Farms</div>
              <div className="navfarms">Wenigro Power</div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="flex justify-between items-center px-8 py-5">
            <img
              src={Wenigrologo}
              style={{ width: "8.8rem", height: "2.6rem", marginRight: "0px" }}
            />
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <MenuOutlined sx={{ fontSize: "2rem" }} />
            </IconButton>
            {isMobileMenuToggled && (
              <Box
                position="fixed"
                right="0"
                bottom="0"
                height="100%"
                zIndex="10"
                maxWidth="500px"
                minWidth="300px"
                sx={{ bgcolor: "#F3F4F6" }}
              >
                <Box display="flex" justifyContent="flex-end" p="1rem">
                  <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <li className="navItem mb-5">Home</li>
                  <li className="navItem mb-5">Products</li>
                  <li className="navItem mb-5">Contact Us</li>
                  <li className="navItem mb-5">FAQ</li>
                  <div className="navfarms mb-5 ">Wenigro Farms</div>
                  <div className="navfarms">Wenigro Power</div>
                </Box>
              </Box>
            )}
          </nav>
        </>
      )}
    </div>
  );
};
