import React from 'react';
import { useTheme } from '@contexts/ThemeContext'
//ref https://github.com/botoxparty/XP.css/blob/main/themes/XP/_buttons.scss

interface CustomButtonProps {
    onClick: () => void;
    buttonText: string;
}
const CustomButton = (props: CustomButtonProps) => {
    const { themeValues } = useTheme()

    return (
        <button className='text-sm p-0.5 min-w-20' style={themeValues.button} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
};

export default CustomButton;
