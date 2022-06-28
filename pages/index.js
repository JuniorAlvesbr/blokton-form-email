import { Container, Typography, Box, Stack, TextField } from '@mui/material';
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
        required={item.required}
        variant="standard"
        fullWidth
        margin="normal"
      />
    ))
  )
}


export default function Index() {
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

        </Stack>

      </Box>
    </Container>
  );
}
