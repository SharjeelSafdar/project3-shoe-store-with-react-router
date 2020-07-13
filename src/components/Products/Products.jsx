import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Typography } from '@material-ui/core'

import styles from './Products.module.css'

const Men = () => {
    const { category } = useParams();
    return (
        <div className={styles.container}>
            <div className={styles.fieldset}>
                <div className={styles.legend}>
                    <Typography variant="h5">
                        {`${category[0].toUpperCase() + category.slice(1)}'s Collection`}
                    </Typography>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Men;