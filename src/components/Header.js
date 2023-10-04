import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PieChartIcon from '@mui/icons-material/PieChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import TableChartIcon from '@mui/icons-material/TableChart';
import Tooltip from '@mui/material/Tooltip';


export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="drawer"
            sx={{ mr: 4 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'flex' } }}>
            <Tooltip title="막대그래프">
              <IconButton 
                size="large" 
                aria-label="graph" 
                color="inherit"
              >
                <EqualizerIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="원형그래프">
              <IconButton
                size="large"
                aria-label="graph"
                color="inherit"
              >
                <PieChartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="띠그래프">
              <IconButton
                size="large"
                aria-label="graph"
                color="inherit"
              >
                <WidthNormalIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="꺾은선그래프">
              <IconButton
                size="large"
                aria-label="graph"
                color="inherit"
              >
                <SsidChartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="도수분포표">
              <IconButton
                size="large"
                aria-label="graph"
                color="inherit"
              >
                <TableChartIcon />
              </IconButton>
            </Tooltip>
            
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}