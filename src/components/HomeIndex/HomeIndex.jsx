import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Paper } from '@material-ui/core'

import { ShoeCard } from '../components';
import styles from './HomeIndex.module.css'

const HomeIndex = ({ shoesData }) => {
    const ids = {
        men: Object.keys(shoesData["men"]),
        women: Object.keys(shoesData["women"]),
        kids: Object.keys(shoesData["kids"]),
    }
    const randNum = Math.floor((Math.random()*10000000))%24;
    return (
        <div className={styles.container}>
            <Typography variant="h5">Welcome to the Shoe Store</Typography>

            <Grid container justify="center" spacing={1} className={styles.section}>
                <Grid item xs={6}>
                    <Paper><img src={shoesData["women"][ids["women"][0]].images[0]} width="100%" alt="" /></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="center" spacing={1} direction="row">
                        <Grid item xs={6}>
                            <Paper><img src={shoesData["women"][ids["women"][1]].images[0]} width="100%" alt=""/></Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper><img src={shoesData["women"][ids["women"][2]].images[0]} width="100%" alt="" /></Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper><img src={shoesData["women"][ids["women"][3]].images[0]} width="100%" alt="" /></Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper><img src={shoesData["women"][ids["women"][4]].images[0]} width="100%" alt="" /></Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Link to="/men" className={styles.link}>
                <div className={styles.fieldset}>
                    <div className={styles.legend}>
                        <Typography variant="h5">Men's Collection</Typography>
                    </div>
                </div>
                <Grid container justify="center" spacing={3} className={styles.section}>
                    {[0,1,2,3,4,5].map( i => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            <ShoeCard shoe={shoesData["men"][ids["men"][(randNum+i)%24]]} />
                        </Grid>
                    ))}
                </Grid>
            </Link>

            <Link to="/women" className={styles.link}>
                <div className={styles.fieldset}>
                    <div className={styles.legend}>
                        <Typography variant="h5">Women's Collection</Typography>
                    </div>
                </div>
                <Grid container justify="center" spacing={3} className={styles.section}>
                    {[0,1,2,3,4,5].map( i => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            <ShoeCard shoe={shoesData["women"][ids["women"][(randNum+i)%24]]} />
                        </Grid>
                    ))}
                </Grid>
            </Link>

            <Link to="/kids" className={styles.link}>
                <div className={styles.fieldset}>
                    <div className={styles.legend}>
                        <Typography variant="h5">Kids' Collection</Typography>
                    </div>
                </div>
                <Grid container justify="center" spacing={3} className={styles.section}>
                    {[0,1,2,3,4,5].map( i => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            <ShoeCard shoe={shoesData["kids"][ids["kids"][(randNum+i)%24]]} />
                        </Grid>
                    ))}
                </Grid>
            </Link>
        </div>
    )
}

export default HomeIndex;