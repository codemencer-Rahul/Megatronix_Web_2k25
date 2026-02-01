import React from 'react'

const ModalImage = ({setModalImage, modalImage}) => {
    return (
       <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              animation: 'fadeIn 0.3s ease-out'
            }}
            onClick={() => setModalImage(null)}
          >
            {/* Modal Image */}
            <div
              className="max-w-3xl max-h-[70vh]"
              style={{
                animation: 'zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <img
                src={modalImage}
                alt="Event poster"
                className="w-full h-full object-contain rounded-lg"
                style={{
                  border: '3px solid var(--yellow-primary)',
                  boxShadow: '0 0 40px rgba(118, 200, 147, 0.4)'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
    )
}

export default ModalImage
