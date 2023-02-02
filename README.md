# Blokton-form-email
### 🚀 [https://blokton-form-email.onrender.com/](https://form-email-nextjs.herokuapp.com/)

![Alt Text](/public/form-email.png)

![HTML](https://img.shields.io/badge/HTML-HTML5-orange) ![CSS](https://img.shields.io/badge/STYLE-CSS3-blue) ![Javascript](https://img.shields.io/badge/JavaScript-JavaScript-yellow) ![React](https://img.shields.io/badge/React-js-%2361dafb) ![MaterialUI](https://img.shields.io/badge/Material-UI-blue)
#

### 📋 Descrição:
 É um formulario criado para coletar informações de clientes interessados em simular financiamentos para compra de moto.
 O cliente acessa o formulário, realiza o preenchimento e envia o formulario prenchido para o vendedor.
 O vendedor recebe o as informações do formulario por email.

### 🔧 Descrição técnica
 - Neste projeto foi utilziado NEXTJS, REACT, Material UI, NODEJS, FORMIDABLE, SENDGRID
 - O formulario foi construido com Material UI.
 - A coleta das informações após formulario prenchido foi realizado com REACT HOOKS usando useRef, useState.
 - Foi utilizado o proprio backend do NEXT para receber as informações do formulario por API REST.
 - Com Nodejs utilizando a biblioteca FORMIDABLE foi possivel manipular e montar o email com as informações do formulario e as fotos.
 - Após email pronto, as informações são enviadas para o vendedor cadastrado na aplicação.
 - Aplicação esta rodando na RENDER, render.com.
#

### 📄 Aprendizado
Neste projeto tive vários desafios, entre eles destaco:
 - Integração do Material UI com nextjs
 - Contrução da inteface de forma responsiva com material UI
 - Coleta da informação com os hooks do react criando um arquivo json.
   - partes da interface é dinamica e se altera conforme resposta do usuario
 - Coleta da Foto dos documentos utilizando api do brownser e da camera do celular
  - Foi criado um preview das fotos para que usuario valide a foto
 - Envio da foto para o backend usando formData.
 - Criação de uma api no next em que recebe os dados coletados e as fotos e envia um email com todos os dados para os vendedores.
 - No deploy da aplicação, foi constatado que a vercel não recebe arquivos como fotos no backend, pois não temos opção de gravação no fileSystem, para contornar, o app foi hospedado a principio na heroku, porem agora esta hospedado na Render.com.
 - O deploy é utilizado com método CI/CD

## Autor: Junior Alves
[![Linkedin](https://img.shields.io/badge/Linkedin-Junior%20Alves-blue)](https://www.linkedin.com/in/junior-alves-54559070/)
[![Instagram](https://img.shields.io/badge/Instagram-%40junioralvesbr4-%23e4405f)](https://www.instagram.com/junioralvesbr4/)
![gmail](https://img.shields.io/badge/Gmail-jrnalves%40gmail.com-red)
