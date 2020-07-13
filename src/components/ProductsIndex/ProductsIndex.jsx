import React from 'react';
import { Grid } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'

import { ShoeCard } from '../components';
import styles from './ProductsIndex.module.css'

const ProductsIndex = ({ shoesData }) => {
    const { category } = useParams();
    return (
        <React.Fragment>
            <Grid container justify="center" spacing={3}>
                {Object.keys(shoesData[category]).map( id => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                        <Link to={id} className={styles.link}>
                            <ShoeCard shoe={shoesData[category][id]} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default ProductsIndex;