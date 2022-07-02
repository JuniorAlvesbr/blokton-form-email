import { useRef, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import InputText from '../components/InputText';
import InputRadio from '../components/InputRadio';
import UploadImage from '../components/UploadImage';

import { Container, Typography, Box, Stack, Button } from '@mui/material';
import { docPessoal, estadoCivil, conjugeInfo, endereco, tempoResidencia, empresa, referencias, banco } from '../src/inputText'

const boxStyle = { p: 2, border: '1px solid #c4c4c4', borderRadius: '10px' }

const fetchApi = async (data) => {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  console.log(await response.json())
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [civilRadioValue, setCivilRadioValue] = useState("Solteiro")
  const [addressRadioValue, setAddressRadioValue] = useState("Solteiro")

  const formRef = useRef(null)

  const handleCivilRadioChange = (e) => setCivilRadioValue(e.target.value)
  const handleAddressRadioChange = (e) => setAddressRadioValue(e.target.value)

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

    getFormObject["estadoCivil"] = civilRadioValue
    getFormObject["Tempo Residencia"] = addressRadioValue

    console.log(getFormObject)

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
            <UploadImage id="imagePessoal" />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Estado Civil:
            </Typography>

            <InputRadio
              id="estadoCivil"
              label="Estado Civil"
              list={estadoCivil}
              radioValue={civilRadioValue}
              handleChange={handleCivilRadioChange}
            />

            <InputText props={conjugeInfo} />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Endereço:
            </Typography>

            <UploadImage id="address" />

            <InputText props={endereco} />

            <InputRadio
              id="tempoResidencia"
              label="Tempo Residência"
              list={tempoResidencia}
              radioValue={addressRadioValue}
              handleChange={handleAddressRadioChange}
            />
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Dados da Empresa:
            </Typography>
            <UploadImage id="renda" />
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
