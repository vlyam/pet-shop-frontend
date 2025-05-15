// ПОРТАЛНОЕ МОДАЛЬНОЕ ОКНО: закрытие по фону, Escape и при клике на крестик
import { useEffect } from "react";
import { createPortal } from "react-dom";
import useBodyClass from "../../hooks/useBodyClass";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children }) => {
    const closeModal = (event) => {
        const { target, currentTarget } = event;
        if (target === currentTarget) {
            close(); // Закрываем, если клик по фону
        }
    };

    useEffect(() => {
        const handleEscape = ({ code }) => {
            if (code === "Escape") {
                close(); // Закрываем по Escape
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [close]);

    // Отключаем прокрутку body
    useBodyClass("body__no-scroll", true);

    return createPortal(
        <div onClick={closeModal} className={styles.overlay}>
            <div className={styles.content}>
                <div onClick={close} className={styles.close}></div>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;