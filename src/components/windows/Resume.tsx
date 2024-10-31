import { useState } from 'react';
import { useWindows } from '@contexts/WindowsContext';
import Window from '@components/windows/Window';
import ActionButton from '@components/ActionButton';

const pdfUrl = 'https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing';

const Resume = () => {
    const { resumeWindow, closeWindow } = useWindows();

    const handleOpenPdf = () => {
        window.open(pdfUrl, '_blank');
    };

    const handleCancel = () => {
        closeWindow('resume')
    };

    return (
        <Window window={resumeWindow}>
            <div className='p-4'>
                <p className='max-w-sm pb-4' >This would open the PDF in a new tab.</p>
                <div className='flex justify-center gap-2'>
                    <ActionButton onClick={handleOpenPdf} buttonText="OK" />
                    <ActionButton onClick={handleCancel} buttonText="Cancel" />
                </div>
            </div>
        </Window>
    );
};

export default Resume;
