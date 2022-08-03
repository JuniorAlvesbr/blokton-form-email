# Form-Email
[ACESSAR O APLICATIVO](https://form-email-nextjs.herokuapp.com/)
![Alt Text](/public/form-email.png)

![HTML](https://img.shields.io/badge/HTML-HTML5-orange) ![CSS](https://img.shields.io/badge/STYLE-CSS3-blue) ![Javascript](https://img.shields.io/badge/JavaScript-JavaScript-yellow) ![React](https://img.shields.io/badge/React-js-%2361dafb) ![MaterialUI](https://img.shields.io/badge/Material-UI-blue)
# Descrição:
É um formulario criado para coletar informações de clientes interessados em simular financiamentos para compra de moto.

# Descrição técnica
Este projeto foi criado com NEXTJS, utilizando todo o potencial do REACT e Material UI para components de HTML e CSS.

# Aprendizado
Neste projeto tive vários desafios, entre eles destaco:
 - Integração do Material UI com nextjs
 - Contrução da inteface de forma responsiva com material UI
 - Coleta da informação com os hooks do react criando um arquivo json.
   - partes da interface é dinamica e se altera conforme resposta do usuario
 - Coleta da Foto dos documentos utilizando api do brownser e da camera do celular
  - Foi criado um preview das fotos para que usuario pude-se validar a foto do usuario
 - Envio da foto para o backend usando formData.
 - Criação de uma api no next em que recebe os dados coletados e as fotos e envia um email com todos os dados para os vendedores.
 - No deploy da aplicação, foi constatado que a vercel não recebe arquivos como fotos no backend, pois não temos opção de gravação no fileSystem, para contornar, o app foi hospedado na heroku.

# Autor: Junior Alves
![LinkdIn](https://img.shields.io/badge/LinkedIn-Junior%20Alves-blue?link=https://img.shields.io/badge/LinkedIn-Junior%20Alves-blue)
![gmail](https://img.shields.io/badge/Gmail-jrnalves%40gmail.com-red)