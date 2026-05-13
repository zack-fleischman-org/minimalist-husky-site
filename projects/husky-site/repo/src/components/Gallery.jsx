import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    title: 'Snowy Gaze',
    cols: { xs: 1, sm: 2 },
  },
  {
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    title: 'Winter Spirit',
    cols: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80',
    title: 'Arctic Eyes',
    cols: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1547407139-3c921a66005c?w=800&q=80',
    title: 'Wild Heart',
    cols: { xs: 1, sm: 2 },
  },
  {
    src: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80',
    title: 'Northern Soul',
    cols: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1590419694346-595648495338?w=800&q=80',
    title: 'Blue Steel',
    cols: 1,
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <Container sx={{ py: { xs: 6, sm: 8, md: 10 }, maxWidth: 'lg' }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 1,
          fontSize: { xs: '1.5rem', sm: '2rem' },
          fontWeight: 300,
          letterSpacing: '-0.02em',
        }}
      >
        The Collection
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 6,
          fontSize: '0.9rem',
        }}
      >
        Siberian Huskies captured in their element
      </Typography>

      <ImageList
        variant="masonry"
        cols={{ xs: 1, sm: 2, md: 3 }}
        gap={16}
        sx={{ m: 0 }}
      >
        {photos.map((photo, index) => (
          <ImageListItem key={index}>
            <Card
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hovered === index ? 'translateY(-4px)' : 'none',
                boxShadow: hovered === index ? '0 12px 40px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <CardMedia
                component="img"
                image={photo.src}
                alt={photo.title}
                loading={index > 2 ? 'lazy' : 'eager'}
                sx={{
                  display: 'block',
                  height: 'auto',
                  transition: 'transform 0.5s ease',
                  transform: hovered === index ? 'scale(1.03)' : 'scale(1)',
                }}
              />
              <CardContent sx={{ p: 2, pb: '16px !important' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    color: 'text.secondary',
                  }}
                >
                  {photo.title}
                </Typography>
              </CardContent>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
