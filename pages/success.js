import Link from 'next/link'
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Success() {
  return (
    <Container maxWidth="md">
      <Box maxWidth={300} mx="auto" my={10}>
        <Typography align="center" component="h1" color="#1de9b6" fontSize={30}>
          Formulario enviado com sucesso
        </Typography>

        <Typography component="p" textAlign="center" my={2}>
          Seu formulario foi enviado para o Alonsio que entrará em contato com voçê em breve
        </Typography>

        <Link href="/">
          <Button variant="contained" fullWidth>
            Voltar
          </Button>
        </Link>


      </Box>
    </Container >
  )
}