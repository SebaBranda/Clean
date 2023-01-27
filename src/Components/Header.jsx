import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display:"flex", justifyContent:"space-evenly"}}>
            <Typography variant="h6">Inicio</Typography>
            <Typography variant="h6">Nuestra Empresa</Typography>
            <Typography variant="h6">Servicios</Typography>
            <Typography variant="h6">Ubicación</Typography>
            <Typography variant="h6">Contacto</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}