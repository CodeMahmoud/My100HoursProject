import React from 'react';
import { card, CardHeader, CardContent, Typography, Grid, Divider, Card } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';


const Main = () => {
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Audio AI Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance is $200</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InforCard...*/}
                    Try saying: Add $100 to May expense
                </Typography>
                <Divider />
                <Form />

            </CardContent>
            <CardContent classNmae={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid items xs={12}>


                    </Grid>
                </Grid>
                  
            </CardContent>

        </Card>
    )
}

export default Main;
