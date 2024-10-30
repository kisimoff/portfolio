import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useWindows } from '@contexts/WindowsContext'
import Window from '@components/windows/Window'

import ResumePdf from '../../assets/Valentin-Kisimov-Resume.pdf'


const Resume = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { resumeWindow } = useWindows()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <Window window={resumeWindow}>
            <div>
                <Document file='../../assets/Valentin-Kisimov-Resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </Window>
    );
}
export default Resume