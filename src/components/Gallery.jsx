import React from 'react';
import { Box, Container, ImageList, ImageListItem } from '@mui/material';

const photos = [
  { url: 'https://images.unsplash.com/photo-1596492784531-6e4531bf9505?w=800&q=80', caption: 'Snow runner' },
  { url: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80', caption: 'Blue eyes' },
  { url: 'https://images.unsplash.com/photo-1623387641168-d9803f690ea4?w=800&q=80', caption: 'Winter coat' },
  { url: 'https://images.unsplash.com/photo-1547407139-48d499943407?w=800&q=80', caption: 'Pack leader' },
  { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', caption: 'Playful spirit' },
  { url: 'https://images.unsplash.com/photo-1602541779959-1f6405ed5637?w=800&q=80', caption: 'Arctic soul' },
];

export default function Gallery() {
  return (
    <Container sx={{ py: { xs: 6, sm: 10 }, px: { xs: 2, sm: 3 } }}>
      <ImageList
        variant="masonry"
        cols={{ xs: 1, sm: 2, md: 3 }}
        gap={16}
        sx={{ m: 0 }}
      >
        {photos.map((photo, i) => (
          <ImageListItem
            key={i}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <img
              srcSet={`${photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${photo.url}?w=248&fit=crop&auto=format`}
              alt={photo.caption}
              loading="lazy"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
