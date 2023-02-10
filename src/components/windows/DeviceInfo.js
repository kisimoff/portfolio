import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Draggable from "react-draggable";
import Window from "./Window";
import Battery from "react-device-battery";

import {
  osVersion,
  osName,
  browserVersion,
  browserName,
  deviceType,
  mobileModel,
  mobileVendor,
  deviceDetect,
  isMobile,
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
  const [gpu, setGpu] = useState("");
  const [vendor, setVendor] = useState("");
  const [model, setModel] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(0);
  const { deviceDetect } = require("react-device-detect");
  const [cameraCount, setCameraCount] = useState(0);

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
    const gl = document.createElement("canvas").getContext("webgl");
    // try to get the extensions
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    // if the extension exists, find out the info.
    if (ext) {
      console.log(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      setGpu(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
    }
    if ("getBattery" in navigator) {
      const battery = navigator.getBattery();

      battery.then((battery) => {
        setBatteryLevel(battery.level * 100);
        console.log(battery.level * 100);
        console.log(battery);

        battery.addEventListener("levelchange", () => {
          setBatteryLevel(battery.level * 100);
        });
      });
    }

    getData();
  }, []);

  return (
    <Draggable
      cancel=".close-window"
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
            {isMobile ? (
              <span>
                Device: {mobileVendor} {mobileModel}
                <br></br>
              </span>
            ) : null}{" "}
            OS: {osName} {osVersion} <br></br>
            Browser: {browserName} Version: {browserVersion} <br></br>
            GPU: {gpu} <br></br>
            Your IP Address is {ip} <br></br>
            Your Country is {contry} <br></br>
            Your City is {city} <br></br>
            {/* <Battery
              onChange={(battery) => {
                console.log(battery);
              }}
              render={({ battery }) => <p>Battery Level: {battery}</p>}
            /> */}
            {/* Mobile Model: {mobileModel} <br></br> */}
            {/* Mobile Vendor: {mobileVendor} <br></br> */}
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
