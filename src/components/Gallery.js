import React, {useState} from 'react';

const Gallery = ({data}) => {
    
    const [model, setModel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openGallery = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModel(true);
    }
    const closeGallery = () => {
        setSelectedImage(null);
        setModel(false);
    }

    return (
        <section className='section overflow-scroll'>
            <div className='items-center px-16 pt-[100px] lg:pt-[140px] relative'>
                <div className='lg:columns-3 md:columns-2 columns-1'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} onClick={() => openGallery(item)}> {/* onClick={() => getImg(item)}*/}
                                <img className='h-full w-full py-2' src={item} alt='' />
                            </div>
                        )
                    })}
                </div>
            </div>
            {model && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80 z-50' style={{ height: '100vh' }}>
                    <div className='flex justify-center items-center'>
                    {/* Image */}
                    <img style={{ objectFit: 'contain', maxHeight: '90vh', maxWidth: '90vw' }} src={selectedImage} alt='' />
                    </div>
                    {/* Close button */}
                    <button
                        className='absolute top-2 left-5 text-white text-5xl font-primary font-bold focus:outline-none p-3'
                        onClick={closeGallery}
                    >
                        &times;
                    </button>
                </div>
                )}
        </section>
    );
};

export default Gallery;