import { IconType } from 'react-icons'

export type WindowProps = {
    osIcon: IconType;
    xpIcon: string;
    caption: string;
    elementId: string;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    visibility: boolean;
  }
  
  