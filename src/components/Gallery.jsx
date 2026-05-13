import React from 'react';
import { Box, Container, ImageList, ImageListItem } from '@mui/material';

const photos = [
  { url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=800', caption: 'Snow runner' },
  { url: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=800&q=80', caption: 'Blue eyes' },
  { url: 'https://images.pexels.com/photos/4121035/pexels-photo-4121035.jpeg?w=800', caption: 'Winter coat' },
  { url: 'https://images.pexels.com/photos/2196747/pexels-photo-2196747.jpeg?w=800', caption: 'Pack leader' },
  { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', caption: 'Playful spirit' },
  { url: 'https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?w=800', caption: 'Arctic soul' },
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
