import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
}

export default function Pagination({ currentPage, totalPages, onNext, onPrev }: PaginationProps) {
    return (
        <div className={styles.pagination}>
            <button onClick={onPrev} disabled={currentPage === 1}>
            ❮
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={onNext} disabled={currentPage === totalPages}>
            ❯
            </button>
        </div>
    );
}
