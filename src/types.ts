import { IconType } from 'react-icons'
import { WindowKey } from './contexts/WindowsContext'

export type WindowProps = {
    osIcon: IconType;
    xpIcon: string;
    caption: string;
    elementId: WindowKey;
    close: () => void;
    openOrFocus: () => void;
    visibility: boolean;
    zIndex: number;
    iconPositionX: number;
    iconPositionY: number;
  }
  
  