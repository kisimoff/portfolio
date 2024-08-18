import { CgClose } from 'react-icons/cg'

function Window({ theme, title, setVisibilityWindow, children }) {
  return (
    <>
      <div className="flex flex-row items-center justify-between pl-4 cursor-move backdrop-blur-[23px] mb-[-1px]" style={theme.window}>
        <span id="title" className='text-fs-window-title' style={{ color: theme.window.color }}>
          {title}
        </span>
        <div>
          <a
            className="flex items-center justify-center w-[3em] text-center text-white font-black text-fs-window-title pt-2 pb-2 hover:bg-close-window-hover"
            style={theme.closeBtn}
            href="#"
            onClick={() => {
              setVisibilityWindow(false)
            }} > 
            <CgClose />
          </a>
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Window
