import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';

const App = () => {
    return (
    <div>
        <Grind container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
            <Grind item xs={12} sm={4}>
                <Details />
            </Grind>
            <Grind item xs={12} sm={4}>
                Main
                
            </Grind>
            <Grind item xs={12} sm={4}>
                <Details />
            </Grind>
        </Grind>
    </div>
    )
}
export default App;