import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useWindows } from '@contexts/WindowsContext'
import Window from '@components/windows/Window'
import { pdfjs } from 'react-pdf';

import file from '@assets/Valentin-Kisimov-Resume.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { resumeWindow } = useWindows()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <Window window={resumeWindow}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </Window>
    );
}
export default Resume