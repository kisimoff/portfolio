import React, { useState, useEffect } from 'react'
import Terminal from 'react-console-emulator'
import axios from 'axios'
import app from './app.txt'
import css from './css.txt'
import index from './index.txt'

import Draggable from 'react-draggable'
import Window from './Window'
// import {
//   useWindupString,
//   WindupChildren,
//   Pause,
//   Linebreaker,
//   Pace, 
// } from "windups";

const Terminal2 = ({
  theme,
  setVisibility,
  zIndexxx,
  setZindexxx,
  alabala,
  dark,
}) => {
  const [ip, setIP] = useState('')
  const [contry, setCountry] = useState('')
  const [city, setCity] = useState('')
  // Define commands here
  const commands = {
    delay: {
      description: 'Delays return of value by 1000 ms.',
      fn: () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve('Finished!'), 1000)
        })
      },
    },

    skills: {
      description: 'Lists my skills',
      fn: () => {
        return (
          <p>
            <b>Programming Languages: </b> C, C++, C#, Java, Python, Bash,
            JavaScript, TypreScript, Haskell, R, GoLang <br></br> <br></br>
            <b> Web Dev: </b> React, HTML, CSS, Node, Flask, WordPress,
            Firebase, Nginx <br></br> <br></br>
            <b> Experience with: </b>
            React-Native, MySQL, Git, Docker, Travis-Ci, NPM, Docker, Ubuntu
            Server, Hyperledger Fabric, IPFS, Tensorflow, Keras <br></br>{' '}
            <br></br>
            <b>Design: </b>
            Adobe Photoshop, Adobe Premiere Pro, Figma
          </p>
        )
      },
    },
    contact: {
      description: 'Displays all contact information',

      fn: () => {
        return (
          <div style={{ textDecoration: 'none' }}>
            <p>
              <b>Phone Number:</b>{' '}
              <a style={{ color: '#995cdb' }} href="tel:+447423533367">
                {' '}
                +447423533367{' '}
              </a>{' '}
              <br></br> <br></br>
              <b>Email:</b>
              <a
                style={{ color: '#995cdb' }}
                href="mailto:kisimovvalentin@gmail.com"
              >
                {' '}
                kisimovvalentin@gmail.com{' '}
              </a>{' '}
              <br></br> <br></br>
              <b>GitHub:</b>{' '}
              <a
                style={{ color: '#995cdb' }}
                href="https://github.com/vtwenty3"
              >
                {' '}
                https://github.com/vtwenty3{' '}
              </a>{' '}
              <br></br> <br></br>
              <b>LinkedIn:</b>{' '}
              <a
                style={{ color: '#995cdb' }}
                href="https://www.linkedin.com/in/valentin-kisimov-2719b41a1/"
              >
                {' '}
                https://www.linkedin.com/in/valentin-kisimov-2719b41a1/{' '}
              </a>
              <br></br> <br></br>
            </p>
          </div>
        )
      },
    },

    ipconfig: {
      description: 'Displays your ip address',
      fn: () => {
        return <span>Your IP Address is {ip} </span>
      },
    },

    whereami: {
      description: 'Displays your location ',
      fn: () => {
        return (
          <span>
            Based on your ip you are in {contry}, {city}.{' '}
          </span>
        )
      },
    },
    resume: {
      description: 'Downloads my resume ',
      fn: () => {
        window.open(
          'https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing'
        )
        return (
          <span>
            Your are in {contry}, {city}{' '}
          </span>
        )
      },
    },
    tellmemore: {
      description: 'Tells you more about me',
      fn: () => {
        return <span>Under Construction...</span>
      },
    },
    ls: {
      description: 'lists all files and folders of the current directory',
      fn: () => {
        return (
          <p>
            app.js app.css index.js <br></br> animated components img
            <br></br>
          </p>
        )
      },
    },
    pwd: {
      description: 'shows current directory',
      fn: () => {
        return <p>home/kisimoffOS/app</p>
      },
    },
    cd: {
      description: 'changes directory',
      fn: () => {
        return <p>Premission denied</p>
      },
    },
    cat: {
      description: 'reads a file',
      fn: (args) => {
        return (
          <div>
            {args === 'app.js' ? (
              <object
                width="270"
                height="200"
                type="text/plain"
                data={app}
                border="0"
              ></object>
            ) : null}
            {args === 'app.css' ? (
              <object
                width="270"
                height="200"
                type="text/plain"
                data={css}
                border="0"
              ></object>
            ) : null}
            {args === 'index.js' ? (
              <object
                width="270"
                height="200"
                type="text/plain"
                data={index}
                border="0"
              ></object>
            ) : null}
          </div>
        )
      },
    },
    minios: {
      description: 'runs mini kisimoffos in the console',
      fn: () => {
        return (
          <div>
            <embed src="file.txt"></embed>
          </div>
        )
      },
    },
  }
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data)
    setIP(res.data.IPv4)
    setCity(res.data.city)
    setCountry(res.data.country_name)
  }
  useEffect(() => {
    document.getElementById('terminal2').style.zIndex = zIndexxx
    setZindexxx(zIndexxx + 1)
    getData()
  }, [])

  return (
    <Draggable
      cancel=".close-window, .no-drag"
      onStart={() => {
        setZindexxx(zIndexxx + 1)
        document.getElementById('terminal2').style.zIndex = zIndexxx
      }}
    >
      <div id="terminal2" className="terminal2">
        <Window
          dark={dark}
          title="Terminal"
          elementId="terminal2"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field} className="terminal-wrapper">
          <Terminal
            className="no-drag"
            ignoreCommandCase={true}
            autoFocus={true}
            style={{
              backgroundColor: '#0f0e0f',
              minHeight: '200px',
              borderRadius: '0px',
              height: '35vh',
              fontSize: '17px',
            }}
            messageStyle={{ color: '#12be46' }}
            contentStyle={{
              fontFamily: 'Ubuntu Mono',
              color: '#e3e3e3',
              fontSize: '17px',
              height: '60%',
            }}
            promptLabelStyle={{
              color: 'white',
              fontSize: '17px',
            }}
            inputTextStyle={{
              color: '#acacac',
              fontSize: '16px',
            }}
            promptLabel={
              <div id="query">
                <span style={{ color: '#e3e3e3' }}>root@user</span>:
                <span style={{ color: '#6590e0' }}>
                  <strong>~</strong>
                </span>
                $
              </div>
            }
            commands={commands}
            welcomeMessage={
              <div>
                Kisimoff OS [Version 2.3.10] \n (c) All rights reserved. \n
                <span> Type help to list commands. \n \n</span> <br></br>
              </div>
            }
          />
        </div>
      </div>
    </Draggable>
  )
}

export default Terminal2
