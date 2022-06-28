import { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';

import { Container, Typography, Box, Stack, TextField, Button } from '@mui/material';
import { docPessoal, estadoCivil, endereco, empresa, referencias, banco } from '../src/inputText'

const boxStyle = { p: 2, border: '1px solid #c4c4c4', borderRadius: '10px' }

const createInputText = (props) => {
  return (
    props.map((item, index) => (
      <TextField
        key={index}
        id={item.id}
        name={item.name}
        label={item.label}
        placeholder={item.placeholder}
        required={false}
        variant="standard"
        fullWidth
        margin="normal"
      />
    ))
  )
}

export default function Index() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align='center' color="primary.main">
          Formulário da Blockton
        </Typography>

        <Stack component="form" spacing={4}>

          <Box sx={boxStyle}>
            {createInputText(docPessoal)}
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Estado Civil:
            </Typography>
            {createInputText(estadoCivil)}
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Endereço:
            </Typography>
            {createInputText(endereco)}
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Dados da Empresa:
            </Typography>
            {createInputText(empresa)}
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Referências Pessoais:
            </Typography>
            {createInputText(referencias)}
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Dados do Banco:
            </Typography>
            {createInputText(banco)}
          </Box>

          <Box>
            <LoadingButton
              size="large"
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              fullWidth
            >
              Enviar
            </LoadingButton>
          </Box>

        </Stack>

      </Box>
    </Container>
  );
}
