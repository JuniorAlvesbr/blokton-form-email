import { useRef, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import InputText from '../components/InputText';

import { Container, Typography, Box, Stack, TextField, Button } from '@mui/material';
import { docPessoal, estadoCivil, endereco, empresa, referencias, banco } from '../src/inputText'

const boxStyle = { p: 2, border: '1px solid #c4c4c4', borderRadius: '10px' }

const fetchApi = async (data) => {
  console.log(data)
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  console.log(await response.json())
}

export default function Home() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false);

  function handleLoadingButton() {
    setLoading(true);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formInputs = [...formRef.current.elements]

    const getTextFormInputs = element => element.type === "text"

    const formInputText = formInputs.filter(getTextFormInputs)

    const createObjectFromInputValues = (acc, input) => {
      return {
        ...acc,
        [input.name]: input.value.trim()
      }
    }

    const getFormObject = formInputText.reduce(createObjectFromInputValues, "")

    fetchApi(getFormObject)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align='center' color="primary.main">
          Formulário da Blockton
        </Typography>

        <Stack component="form" ref={formRef} spacing={4} method="POST" onSubmit={handleSubmit}>

          <Box sx={boxStyle}>
            <InputText props={docPessoal} />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Estado Civil:
            </Typography>
            <InputText props={estadoCivil} />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Endereço:
            </Typography>
            <InputText props={endereco} />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Dados da Empresa:
            </Typography>
            <InputText props={empresa} />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Referências Pessoais:
            </Typography>
            <InputText props={referencias} />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Dados do Banco:
            </Typography>
            <InputText props={banco} />
          </Box>

          <Box>
            <LoadingButton
              type="submit"
              size="large"
              onClick={handleLoadingButton}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              fullWidth
            >
              Enviar
            </LoadingButton>
            <Button variant='contained' fullWidth type="submit">Enviar</Button>
          </Box>

        </Stack>

      </Box>
    </Container>
  );
}
