import {useState} from 'react';
import Modal from 'components/Modal/Modal';
import scss from './ImageGalleryItem.module.scss'

export default function ImageGalleryItem({ id, webformatURL, tags, largeImageURL }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <li className={scss.ImageGalleryItem} key={id}>
                <img
                    className={scss.ImageGalleryItemImage}
                    src={webformatURL}
                    alt={tags}
                    onClick={toggleModal}
                />
            </li>
            {isModalOpen && <Modal toggleModal={toggleModal}>
                <img className={scss.ModalImg} src={largeImageURL} alt={tags} />
            </Modal>}
        </>
    );
};



