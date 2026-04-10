"use client"

import { useState, useMemo, useEffect, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { downloads } from './downloadData'
import { FaFilePdf, FaVideo, FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

function useContainerWidth(isOpen: boolean) {
  const [width, setWidth] = useState(800)
  const updateWidth = useCallback(() => {
    const w = window.innerWidth
    // Mobile: full width, Desktop: modal max-width minus padding
    setWidth(w < 640 ? w : Math.min(w - 64, 1024) - 48)
  }, [])
  useEffect(() => {
    if (!isOpen) return
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [isOpen, updateWidth])
  return width
}

export default function DownloadsPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [filterCategory, setFilterCategory] = useState('All')
  const containerWidth = useContainerWidth(!!selectedFile)

  const categories = useMemo(() => {
    const cats = Array.from(new Set(downloads.map(d => d.category)))
    return ['All', ...cats]
  }, [])

  const filtered = filterCategory === 'All'
    ? downloads
    : downloads.filter(d => d.category === filterCategory)

  const selectedItem = downloads.find(d => d.fileName === selectedFile)
  const selectedTitle = selectedItem?.title
  const isVideo = selectedItem?.type === 'video'
  const isExternal = !!selectedItem?.externalUrl

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFile) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [selectedFile])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Downloads
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Browse and view our resources. Click on any document to preview it.
          </p>
        </div>

        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-16">No documents available yet. Check back soon!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((item) => (
              <button
                key={item.fileName}
                onClick={() => { setSelectedFile(item.fileName); setPageNumber(1); setNumPages(0); setScale(1.0) }}
                className={`text-left bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 group hover:-translate-y-1 border-2 ${
                  selectedFile === item.fileName ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${
                    item.type === 'video' ? 'from-purple-500 to-indigo-500' : 'from-red-500 to-pink-500'
                  } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.type === 'video' ? <FaVideo className="text-white text-lg sm:text-xl" /> : <FaFilePdf className="text-white text-lg sm:text-xl" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{item.description}</p>
                    <span className="inline-block mt-2 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {selectedFile && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-white shadow-2xl w-full h-full sm:w-[95vw] sm:h-[90vh] sm:max-w-5xl sm:rounded-2xl flex flex-col">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-3 py-2 border-b bg-gray-50 sm:rounded-t-2xl flex-shrink-0">
                <h3 className="font-semibold text-gray-800 truncate mr-2 text-xs sm:text-base">{selectedTitle}</h3>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {!isVideo && (
                    <>
                      <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="p-1.5 hover:bg-gray-200 rounded-lg" title="Zoom out">
                        <FaSearchMinus className="text-gray-600 text-sm" />
                      </button>
                      <span className="text-xs text-gray-500 w-10 text-center">{Math.round(scale * 100)}%</span>
                      <button onClick={() => setScale(s => Math.min(2.5, s + 0.2))} className="p-1.5 hover:bg-gray-200 rounded-lg" title="Zoom in">
                        <FaSearchPlus className="text-gray-600 text-sm" />
                      </button>
                    </>
                  )}
                  {!isExternal && (
                    <a
                      href={`/downloads/${selectedFile}`}
                      download
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors ml-1"
                    >
                      Download
                    </a>
                  )}
                  <button onClick={() => setSelectedFile(null)} className="p-1.5 hover:bg-gray-200 rounded-lg" title="Close">
                    <FaTimes className="text-gray-600 text-sm" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center">
                {isVideo && isExternal ? (
                  <iframe
                    src={selectedItem?.externalUrl}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : isVideo ? (
                  <video
                    controls
                    autoPlay
                    className="max-w-full max-h-full"
                    src={`/downloads/${selectedFile}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Document
                    file={`/downloads/${selectedFile}`}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={<p className="text-gray-500 py-20 text-center">Loading PDF...</p>}
                    error={<p className="text-red-500 py-20 text-center">Failed to load PDF.</p>}
                  >
                    <Page pageNumber={pageNumber} width={containerWidth} scale={scale} />
                  </Document>
                )}
              </div>

              {/* Page Navigation */}
              {!isVideo && numPages > 1 && (
                <div className="flex items-center justify-center gap-3 px-3 py-2 border-t bg-gray-50 sm:rounded-b-2xl flex-shrink-0">
                  <button
                    onClick={() => setPageNumber(p => Math.max(1, p - 1))}
                    disabled={pageNumber <= 1}
                    className="p-2 hover:bg-gray-200 rounded-lg disabled:opacity-30"
                  >
                    <FaChevronLeft />
                  </button>
                  <span className="text-xs sm:text-sm text-gray-600">Page {pageNumber} of {numPages}</span>
                  <button
                    onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
                    disabled={pageNumber >= numPages}
                    className="p-2 hover:bg-gray-200 rounded-lg disabled:opacity-30"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
