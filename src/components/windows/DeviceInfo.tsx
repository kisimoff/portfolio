// src/components/windows/DeviceInfo.tsx
import React from 'react'
import Window from './Window'
import { useWindows } from '@contexts/WindowsContext'
import { useClient } from '@contexts/ClientContext'

const DeviceInfo = () => {
  const { deviceInfoWindow } = useWindows()
  const { clientInfo } = useClient()

  return (
    <Window window={deviceInfoWindow}>
      <div className="aboutText">
        Viewing from: {clientInfo.deviceType} <br></br>
        {clientInfo.isMobile ? (
          <span>
            Device: {clientInfo.mobileVendor} {clientInfo.mobileModel}
            <br></br>
          </span>
        ) : null}{' '}
        {clientInfo.isTablet ? (
          <span>
            Tablet: true
            <br></br>
          </span>
        ) : null}{' '}
        OS: {clientInfo.osName} {clientInfo.osVersion} <br></br>
        Browser: {clientInfo.browserName} Version: {clientInfo.browserVersion} <br></br>
        GPU: {clientInfo.gpu} <br></br>
        {clientInfo.displayRes} <br></br>
        CPU Cores: {clientInfo.cpuCores}
        {clientInfo.ip ? (
          <span>
            <br></br>
            IP Address: {clientInfo.ip} <br></br>
            Location: {clientInfo.location}
            <br></br>
            ISP: {clientInfo.isp} <br></br>
            Coordinates: {clientInfo.coordinates}{' '}
            <br></br>
          </span>
        ) : null}
      </div>
    </Window>
  )
}

export default DeviceInfo
