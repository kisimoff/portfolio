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
  mobileModel,
  mobileVendor,
  isTablet,
  deviceDetect,
  isMobile,
  isIOS,
} from "react-device-detect";

const DeviceInfo = ({
  theme,
  setTheme,
  setVisibility,
  zIndexxx,
  setZindexxx,
}) => {
  const [gpu, setGpu] = useState("");
  const [cpuCores, setCpuCores] = useState("");

  const [vendor, setVendor] = useState("");
  const [model, setModel] = useState("");
  const { deviceDetect } = require("react-device-detect");
  const [cameraCount, setCameraCount] = useState(0);
  const [dataStatus, setDataStatus] = useState(false);
  const [IP, setIP] = useState("");
  const [res, setRes] = useState({});
  const [displayRes, setDisplayRes] = useState('');
  async function getGeoData() {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      // console.log(response);
      if (response.status === 200) {
        setRes(response.data);
        setDataStatus(true);
      }
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  }



  useEffect(() => {
    document.getElementById("deviceInfo").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
    // console.log(zIndexxx);
    const gl = document.createElement("canvas").getContext("webgl");
    // try to get the extensions
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    // if the extension exists, find out the info.
    if (ext) {
      // console.log(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      setGpu(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
    }
    setCpuCores(navigator.hardwareConcurrency.toString());
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    setDisplayRes(`Screen Resolution: ${screenWidth} x ${screenHeight}`)

    // console.log(`CPU Cores: ${cpuCores}`);

    setRes(getGeoData());
  }, []);

  return (
    <Draggable
      cancel=".close-window"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("deviceInfo").style.zIndex = zIndexxx;
        // console.log(zIndexxx);
      }}
    >
      <div className="deviceInfo" id="deviceInfo">
        <Window
          title="Device Info"
          elementId="deviceInfo"
          theme={theme}
          setVisibilityWindow={setVisibility}
          onStart={() => {
            setZindexxx(zIndexxx + 1);
            document.getElementById("deviceinfo").style.zIndex = zIndexxx;
            // console.log(zIndexxx);
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
            {isTablet ? (
                <span>
                Tablet: true
                <br></br>
              </span>
            ) : null}{" "}
            OS: {osName} {osVersion} <br></br>
            Browser: {browserName} Version: {browserVersion} <br></br>
            GPU: {gpu} <br></br>
            {displayRes} <br></br>
            CPU Cores: {cpuCores}
            {dataStatus ? (
                <span>
                <br></br>
                IP Address: {res.ip} <br></br>
                Location:{" "}
                  {res.city + ", " + res.region + ", " + res.country_name}
                  <br></br>
                ISP: {res.org} <br></br>
                Coordinates: {res.latitude + " N, " + res.longitude + " W"}{" "}
                  <br></br>
              </span>
            ) : null}
            <div></div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DeviceInfo;
