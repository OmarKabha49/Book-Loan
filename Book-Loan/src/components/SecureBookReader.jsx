import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function SecureBookReader({ pdfUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const preventRightClick = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (
                (e.ctrlKey && e.key === 'p') ||
                (e.ctrlKey && e.key === 's') ||
                (e.ctrlKey && e.key === 'c') ||
                (e.ctrlKey && e.key === 'u')
            ) {
                e.preventDefault();
                alert("هذا المحتوى محمي بحقوق النشر ولا يمكن نسخه أو طباعته.");
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('contextmenu', preventRightClick);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('contextmenu', preventRightClick);
        };
    }, []);

    return (
        <div 
            className="flex flex-col items-center bg-gray-900 min-h-screen p-4 select-none print:hidden"
            onContextMenu={preventRightClick}
        >
            
            <div className="flex gap-4 mb-4 z-20">
                <button 
                    disabled={pageNumber <= 1} 
                    onClick={() => setPageNumber(prev => prev - 1)}
                    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    السابق
                </button>
                <span className="text-white flex items-center">
                    صفحة {pageNumber} من {numPages}
                </span>
                <button 
                    disabled={pageNumber >= numPages} 
                    onClick={() => setPageNumber(prev => prev + 1)}
                    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    التالي
                </button>
            </div>

            <div className="relative border-4 border-gray-700 shadow-2xl">
                
                <div className="absolute inset-0 z-10 bg-transparent w-full h-full"></div>

                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div className="text-white">جاري تحميل الكتاب المشفر...</div>}
                    error={<div className="text-red-500">حدث خطأ في تحميل الملف.</div>}
                    className="flex justify-center"
                >
                    <Page 
                        pageNumber={pageNumber} 
                        renderTextLayer={false} 
                        renderAnnotationLayer={false}
                        height={window.innerWidth < 768 ? 400 : 800}
                    />
                </Document>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-10">
                    <p className="text-6xl font-bold text-gray-500 rotate-45">محمي - مكتبتي</p>
                </div>
            </div>

        </div>
    );
}

export default SecureBookReader;