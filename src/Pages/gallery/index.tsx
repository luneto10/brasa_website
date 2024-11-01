import React, { useState, useEffect } from 'react';
import GalleryPictureFrame from './galleryPictureFrame/gallery_picture_frame';
import styles from './Gallery.module.scss';
import Pagination from '../../components/pagination/pagination';

const itemsPerPage = 12;

export default function Gallery() {
    const images = [];
    for (let i = 1; i <= 30; i++) {
        images.push({
            img: require(`../../assets/images/image-${i}.jpg`),
            description: `Evento Picnic dia ${i}`,
        });
    }

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(images.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onNext={handleNextPage} 
                onPrev={handlePrevPage} 
            />

            <div className={styles.galleryContainer}>
                {currentItems.map((image, index) => (
                    <GalleryPictureFrame 
                        key={index} 
                        img={image.img} 
                        description={image.description} 
                    />
                ))}
            </div>
            
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onNext={handleNextPage} 
                onPrev={handlePrevPage} 
            />
        </div>
    );
}