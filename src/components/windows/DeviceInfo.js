import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Draggable from "react-draggable";
import Window from "./Window";

import {
  osVersion,
  osName,
  browserVersion,
  browserName,
  deviceType,
} from "react-device-detect";

const DeviceInfo = ({
  theme,
  setTheme,
  setVisibility,
  zIndexxx,
  setZindexxx,
}) => {
  const [ip, setIP] = useState("");
  const [contry, setCountry] = useState("");
  const [city, setCity] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    setCity(res.data.city);
    setCountry(res.data.country_name);
  };
  useEffect(() => {
    document.getElementById("deviceInfo").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
    console.log(zIndexxx);
    getData();
  }, []);

  return (
    <Draggable
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("deviceInfo").style.zIndex = zIndexxx;
        console.log(zIndexxx);
      }}
    >
      <div className="deviceInfo" id="deviceInfo" style={theme.field}>
        {/* <div id="window" style={theme.window}>
          <span id="title" style={{ color: theme.window.color }}>
            Device Info
          </span>
          <button id="useless-btn" className="btn yellow" />
          <button
            className="btn red"
            onClick={() => {
              document.getElementById("deviceInfo").style.display = "none";
            }}
          />
        </div> */}

        <Window
          title="Device Info"
          elementId="deviceInfo"
          theme={theme}
          setVisibilityWindow={setVisibility}
          onStart={() => {
            setZindexxx(zIndexxx + 1);
            document.getElementById("deviceinfo").style.zIndex = zIndexxx;
            console.log(zIndexxx);
          }}
        />
        <div style={theme.field}>
          <div className="aboutText">
            Viewing from: {deviceType} <br></br>
            Browser: {browserName} Version: {browserVersion} <br></br>
            Your IP Address is {ip} <br></br>
            Your Country is {contry} <br></br>
            Your City is {city} <br></br>
            OS: {osName} {osVersion} <br></br>
            {/* if ? isBrowser: {isBrowser} <br></br> */}
            {/* {isMobile} ? {mobileVendor} mobileModel:{mobileModel} : {null} */}
            {/* {isMobile ? <div>{mobileVendor} mobileModel:{mobileModel} <div/> : null} */}
            <div></div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DeviceInfo;
