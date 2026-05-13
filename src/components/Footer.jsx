import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
          🐾 husky photos — made with love
        </Typography>
      </Container>
    </Box>
  );
}
