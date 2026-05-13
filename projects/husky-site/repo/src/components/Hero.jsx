import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=1600&q=80';

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          width: '100%',
          height: { xs: '50vh', sm: '60vh', md: '75vh' },
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
          },
        }}
      />
      <Container
        sx={{
          position: 'absolute',
          bottom: { xs: 24, sm: 40, md: 64 },
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            color: 'white',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          Beauty in the cold
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            mt: 1,
            fontSize: { xs: '0.95rem', sm: '1.1rem' },
            textShadow: '0 1px 10px rgba(0,0,0,0.2)',
          }}
        >
          A photo collection of Siberian Huskies
        </Typography>
      </Container>
    </Box>
  );
}
