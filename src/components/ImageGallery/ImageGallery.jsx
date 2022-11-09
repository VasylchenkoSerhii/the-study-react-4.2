import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import scss from './ImageGallery.module.scss';

export default function ImageGallery({ images }) {
    return (
        <ul className={scss.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                />
            ))}
            
        </ul>
    );
};
