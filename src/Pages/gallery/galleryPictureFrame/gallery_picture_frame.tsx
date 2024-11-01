import styles from './GalleryPictureFrame.module.scss';

interface GalleryPictureFrameProps {
    img : string,
    description : string
}

export default function GalleryPictureFrame({ img, description }: GalleryPictureFrameProps) {
    return (
        <div className={styles.pictureFrame}>
            <img src={img} alt={description} className={styles.image} />
            <p className={styles.description}>{description}</p>
        </div>
    );
}