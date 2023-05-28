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
  const [vendor, setVendor] = useState("");
  const [model, setModel] = useState("");
  const { deviceDetect } = require("react-device-detect");
  const [cameraCount, setCameraCount] = useState(0);
  const [dataStatus, setDataStatus] = useState(false);
  const [IP, setIP] = useState("");
  const [res, setRes] = useState({});

  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   console.log(res.data);
  //   setIP(res.data.IPv4);
  //   setCity(res.data.city);
  //   setCountry(res.data.country_name);
  // };

  // const getData = async () => {
  //   try {
  //     const apiKey = "7969|0UCnUjP39LSSMehYKDO803ff2QFbyhyOjX3obGei"; // Replace with your IPX API key
  //     const res = await axios.get(`https://ipxapi.com/geo?api_key=${apiKey}`);
  //     if (res.data.status === "success") {
  //       setIpStatus(true);
  //     }
  //     console.log(res.data);
  //     // setCountry(res.data.country_name);
  //   } catch (error) {
  //     console.error("Error fetching geolocation data:", error);
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const apiKey = "7969|0UCnUjP39LSSMehYKDO803ff2QFbyhyOjX3obGei"; // Replace with your IPX API key
  //     const res = await axios.get("https://ipxapi.com/api/ip", {
  //       headers: {
  //         Authorization: `Bearer ${apiKey}`,
  //         Accept: "application/json",
  //       },
  //     });
  //     console.log(res.data);

  //     // setIP(res.data.ip);
  //     // setCity(res.data.city);
  //     // setCountry(res.data.country);
  //   } catch (error) {
  //     console.error("Error fetching geolocation data:", error);
  //   }
  // };

  const getIP = async () => {
    try {
      const res = await axios.get("https://api.ipify.org?format=json");
      return res.data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return null;
    }
  };

  const getData = async () => {
    try {
      const ip = await getIP();
      if (!ip) {
        throw new Error("Unable to fetch IP address.");
      }
      setIP(ip);
      const apiKey = "7969|0UCnUjP39LSSMehYKDO803ff2QFbyhyOjX3obGei"; // Replace with your IPX API key
      const res = await axios.get(`https://ipxapi.com/api/ip?ip=${ip}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
      });
      if (res.data.status === "success") {
        setDataStatus(true);
        setRes(res.data);
      }
      // console.log(res.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
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
    if (false) {
      getData();
    }
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
      <div className="deviceInfo" id="deviceInfo">
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
            {isTablet ? (
              <span>
                Tablet: true
                <br></br>
              </span>
            ) : null}{" "}
            OS: {osName} {osVersion} <br></br>
            Browser: {browserName} Version: {browserVersion} <br></br>
            GPU: {gpu} <br></br>
            {dataStatus ? (
              <span>
                IP Address: {IP} <br></br>
                Country: {res.country} <br></br>
                City: {res.city} <br></br>
                ZIP Code: {res.zip} <br></br>
                ISP: {res.isp} <br></br>
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
