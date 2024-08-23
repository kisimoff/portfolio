import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Window from './Window'

import {
  osVersion,
  osName,
  browserVersion,
  browserName,
  deviceType,
  mobileModel,
  mobileVendor,
  isTablet,
  isMobile,
} from 'react-device-detect'
import { useWindows } from '@contexts/WindowsContext'

const DeviceInfo = () => {
  const { deviceInfoWindow } = useWindows()


  const [gpu, setGpu] = useState('')
  const [cpuCores, setCpuCores] = useState('')

  const [dataStatus, setDataStatus] = useState(false)
  const [res, setRes] = useState({})
  const [displayRes, setDisplayRes] = useState('')
  async function getGeoData() {
    try {
      const response = await axios.get('https://ipapi.co/json/')
      if (response.status === 200) {
        setRes(response.data)
        setDataStatus(true)
      }
    } catch (error) {
      console.error('Error fetching IP address:', error)
    }
  }



  useEffect(() => {
    // document.getElementById('deviceInfo').style.zIndex = zIndexxx
    // setZindexxx(zIndexxx + 1)
    const gl = document.createElement('canvas').getContext('webgl')
    const ext = gl.getExtension('WEBGL_debug_renderer_info')
    if (ext) {
      // console.log(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      setGpu(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL))
    }
    setCpuCores(navigator.hardwareConcurrency.toString())
    const screenWidth = window.screen.width
    const screenHeight = window.screen.height
    setDisplayRes(`Screen Resolution: ${screenWidth} x ${screenHeight}`)
    setRes(getGeoData())
  }, [])

  return (

    <Window window={deviceInfoWindow}>
      <div className="aboutText">
          Viewing from: {deviceType} <br></br>
        {isMobile ? (
          <span>
              Device: {mobileVendor} {mobileModel}
            <br></br>
          </span>
        ) : null}{' '}
        {isTablet ? (
          <span>
              Tablet: true
            <br></br>
          </span>
        ) : null}{' '}
          OS: {osName} {osVersion} <br></br>
          Browser: {browserName} Version: {browserVersion} <br></br>
          GPU: {gpu} <br></br>
        {displayRes} <br></br>
          CPU Cores: {cpuCores}
        {dataStatus ? (
          <span>
            <br></br>
              IP Address: {res.ip} <br></br>
              Location:{' '}
            {res.city + ', ' + res.region + ', ' + res.country_name}
            <br></br>
              ISP: {res.org} <br></br>
              Coordinates: {res.latitude + ' N, ' + res.longitude + ' W'}{' '}
            <br></br>
          </span>
        ) : null}
      </div>
    </Window>
  )
}

export default DeviceInfo
