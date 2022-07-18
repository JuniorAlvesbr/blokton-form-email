import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import InputText from '../components/InputText';
import InputRadio from '../components/InputRadio';
import UploadImage from '../components/UploadImage';

import { Container, Typography, Box, Stack } from '@mui/material';
import { docPessoal, estadoCivil, conjugeInfo, endereco, tempoResidencia, empresa, referencias, banco } from '../src/inputText'

const boxStyle = { p: 2, border: '1px solid #c4c4c4', borderRadius: '10px' }

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [civilRadioValue, setCivilRadioValue] = useState("Solteiro")
  const [addressRadioValue, setAddressRadioValue] = useState("")

  const [docImage, setDocImage] = useState()
  const [addressImage, setAddressImage] = useState()
  const [salarioImage, setSalarioImage] = useState()

  const formRef = useRef(null)
  const router = useRouter()

  const handleCivilRadioChange = (e) => setCivilRadioValue(e.target.value)
  const handleAddressRadioChange = (e) => setAddressRadioValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(false)

    const formData = new FormData()

    const formElements = [...formRef.current.elements]

    const getElementText = formElements.filter(element => element.type === 'text')

    getElementText.forEach(element => formData.append(element.name, element.value.trim()))

    formData.append('estadoCivil', civilRadioValue)
    formData.append('addressTime', addressRadioValue)

    docImage && formData.append('docPessoal', docImage)
    addressImage && formData.append('docAddress', addressImage)
    salarioImage && formData.append('docSalario', salarioImage)

    fetch('/api/send', {
      method: "POST",
      body: formData
    })
      .then(response => {
        setLoading(false)
        router.push('success')
      })
      .catch(err => {
        router.push('/fail')
      })
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align='center' color="primary.main">
          Formulário da Blockton
        </Typography>

        <Stack component="form" ref={formRef} spacing={4} method="POST" type="Submit" onSubmit={handleSubmit}>

          <Box sx={boxStyle}>
            <InputText props={docPessoal} />

            <UploadImage
              id="docPessoal"
              text="Tirar foto da CNH ou RG"
              image={docImage}
              setImage={setDocImage}
            />
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

            {civilRadioValue === "Casado" && <InputText props={conjugeInfo} />}
          </Box>

          <Box sx={boxStyle}>
            <Typography variant="h4" component="h1" gutterBottom color="secondary.main">
              Endereço:
            </Typography>

            <UploadImage
              id="address"
              text="Tirar foto do comprovante de endereço"
              image={addressImage}
              setImage={setAddressImage}
            />

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

            <InputText props={empresa} />

            <UploadImage
              id="renda"
              text="Tirar foto do comprovante de Renda"
              image={salarioImage}
              setImage={setSalarioImage}
            />
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
