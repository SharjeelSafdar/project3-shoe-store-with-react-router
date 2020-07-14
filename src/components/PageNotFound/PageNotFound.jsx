import React from 'react'
import { Typography } from '@material-ui/core'
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h4">
                Page not found. Make sure the URL is correct.
            </Typography>
        </div>
    )
}

export default PageNotFound;