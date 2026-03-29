"use client";
import { useState } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

export const Modal = (
  {
    content: Content,
    isShowModal, 
    setIsShowModal
  }: {
    content: React.ReactElement,
    isShowModal: boolean, 
    setIsShowModal: (value: boolean) => void
  }) => {
    return createPortal((
      <div className={styles.modalBackground} onClick={() => setIsShowModal(false)}>
        <div className={styles.modal} onClick={() => setIsShowModal(false)}>
          <div className={styles.modalBox}>
            <div className={styles.closeButton} >
              <button onClick={() => setIsShowModal(false)}>✕</button>
            </div>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              {Content}
            </div>
          </div>
        </div>
      </div>
    ), document.body);
}