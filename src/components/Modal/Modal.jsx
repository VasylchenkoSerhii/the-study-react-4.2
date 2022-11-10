import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import scss from './Modal.module.scss';

const modalRoot = document.getElementById("modal-root");

export default function Modal({ toggleModal, children }) {

    useEffect(() => {
        window.addEventListener('keydown', handleClickByEscape);
        return () => {
            window.removeEventListener('keydown', handleClickByEscape);
        };
    });

    const handleClickByEscape = e => {
        if (e.code === "Escape") {
            toggleModal();
        };
    };

    return createPortal(
        <div onClick={() => toggleModal()} className={scss.Overlay}>
            <div className={scss.ModalImg}>
                {children}
            </div>
        </div>,
        modalRoot
    );
};
