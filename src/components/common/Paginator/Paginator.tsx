import React from "react";
import styles from "../Paginator/Paginator.module.css";

type PaginatorType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
}

export let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PaginatorType) => {
    // Math.ceil округляет в большую сторону
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page => {
                return <span
                    className={currentPage !== undefined ? styles.selectedPage : currentPage}
                    onClick={(e) => {
                        onPageChanged(page)
                    }}>{page}</span>
            })}
        </div>
    )
}