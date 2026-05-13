import React from 'react';
import { Box, Typography, Container, Divider, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ mt: 4 }}>
      <Divider sx={{ mx: 'auto', maxWidth: 600, opacity: 0.3 }} />
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: '0.8rem',
            letterSpacing: '0.02em',
          }}
        >
          Photos sourced from{' '}
          <Link
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              borderBottom: '1px solid currentColor',
              '&:hover': { color: 'text.primary' },
            }}
          >
            Unsplash
          </Link>
          {' '}· Made with ❤️ for husky lovers
        </Typography>
      </Container>
    </Box>
  );
}
