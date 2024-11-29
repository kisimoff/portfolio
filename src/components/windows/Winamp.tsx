import { useEffect } from 'react'
import Webamp from 'webamp'
import { useWindows } from '@contexts/WindowsContext'


const Winamp = () => {
  const { closeWindow } = useWindows()


  useEffect(() => {
    // Create a new Webamp instance when the component is mounted
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: 'DJ Mike Llama',
            title: 'Llama Whippin\' Intro',
          },
          url: 'https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3',
          duration: 5.322286,
        }, {
          metaData: {
            artist: 'Radio',
            title: 'SomaFM GrooveSalad',
          },
          url: 'https://ice1.somafm.com/groovesalad-128-mp3',
          duration: 0,
        },
        {
          metaData: {
            artist: 'Radio',
            title: 'House Music UK',
          },
          url: 'https://uk4-vn.mixstream.net/:8128/listen.mp3',
          duration: 0,
        },
        {
          metaData: {
            artist: 'Radio',
            title: 'Dance Radio UK',
          },
          url: 'https://dancestream.danceradiouk.com/stream/1/',
          duration: 0,
        },
        {
          metaData: {
            artist: 'Radio',
            title: 'Vanilla',
          },
          url: 'https://stream.vanillaradio.com:8012/stream',
          duration: 0,
        },
        {
          metaData: {
            artist: 'Radio',
            title: 'Urban',
          },
          // NOTE: Your audio file must be served from the same domain as your HTML
          // file, or served with permissive CORS HTTP headers:
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
          url: 'https://hydra.cdnstream.com/1537_128',
          duration: 0,
        },
      ],

      // Optionally, you can enable visualizations, playlists, etc.
      zIndex: 10, // Set custom zIndex for the player window
    })

    // Open Webamp
    if (Webamp.browserIsSupported()) {
      webamp.renderWhenReady(document.getElementById('webamp-container'))
    }

    // Register the onClose callback
    const unsubscribe = webamp.onClose(() => {
      // Code to execute when Webamp is closed
      closeWindow('winamp')
      // You can perform additional actions here
    })

    return () => {
      webamp.dispose()
    }
  }, [])

  return <div id="webamp-container" />

}

export default Winamp
