import { createContext, useContext, ReactNode } from 'react'
import { useAnimation } from 'framer-motion'

interface AnimationsContextType {
  navbarAnimation: any;
  iconsAnimation: any;
  backgroundAnimation: any;
  elementsSequenceAnimation: () => Promise<void>;
}

const AnimationsContext = createContext<AnimationsContextType | undefined>(undefined)

interface AnimationsProviderProps {
  children: ReactNode;
}

export const AnimationsProvider = ({ children }: AnimationsProviderProps) => {
  const navbarAnimation = useAnimation()
  const iconsAnimation = useAnimation()
  const backgroundAnimation = useAnimation()
  const eyeAnimation = useAnimation()



  // const placeholderAnimation = useAnimation()

  const elementsSequenceAnimation = async () => {
    if (window.innerWidth > 800 && window.innerHeight > 400) {
      navbarAnimation.set({ y: 100 })
      await navbarAnimation.start({
        y: 0,
        opacity: 1,

        transition: { duration: 1.5, delay: 5 },
      })
      await iconsAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, delay: 0.8 },
      })
    } else {
      navbarAnimation.set({ y: -100 })
      await iconsAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, delay: 6.5 },
      })
      await navbarAnimation.start({
        y: 0,
        opacity: 1,

        transition: { duration: 1.5, delay: 0.8 },
      })
    }

  }

  return (
    <AnimationsContext.Provider value={{ navbarAnimation, iconsAnimation, backgroundAnimation, elementsSequenceAnimation }}>
      {children}
    </AnimationsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAnimations = () => {
  const context = useContext(AnimationsContext)
  if (context === undefined) {
    throw new Error('useAnimations must be used within an AnimationsProvider')
  }
  return context
}
