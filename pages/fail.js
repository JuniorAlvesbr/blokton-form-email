import Link from 'next/link'
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Fail() {
  return (
    <Container maxWidth="md">
      <Box maxWidth={300} mx="auto" my={10}>
        <Typography align="center" component="h1" color="#ff1744" fontSize={30}>
          Falha ao enviar seu formulario
        </Typography>

        <Typography component="p" textAlign="center" my={2}>
          Tente novamente mais tarde
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