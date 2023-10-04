import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MainBarChart from './MainBarChart';
import Paper from '@mui/material/Paper';
import MainDatasheet from './MainDatasheet';

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ marginTop: '2rem' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ backgroundColor: 'white', marginBottom: '1.8rem' }}>
              <Paper elevation={3} sx={{ height: 'inherit' }}>
                <MainDatasheet />
              </Paper>
            </Grid>
            <Grid item xs={12} sx={{ height: '70vh' }} style={{ backgroundColor: 'white', marginBottom: '2rem' }}>
              <Paper elevation={3} sx={{ height: 'inherit' }}>
                <MainBarChart />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}