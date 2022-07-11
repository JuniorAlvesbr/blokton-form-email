import { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

export default function UploadImage({ id, text, image, setImage }) {

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <Stack alignItems="center" spacing={2}>
      <label htmlFor={id}>
        <Input accept="image/*" id={id} type="file" onChange={handleImage} />
        <Button variant="contained" aria-label="upload picture" component="span" startIcon={<PhotoCamera />}>
          {text}
        </Button>
      </label>

      <Box>
        {image &&
          <Image
            src={URL.createObjectURL(image)}
            width={300}
            height={200}
          />}
      </Box>
    </Stack>
  )
}