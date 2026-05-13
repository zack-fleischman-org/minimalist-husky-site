import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: 'text.primary',
          }}
        >
          🐾 Huskies
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          A photo collection
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
