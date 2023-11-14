# Versão brasileira 🇧🇷

Projeto desenvolvido para o teste técnico da MKS

### Página Inicial

<div style="display: inline_block">
  <img src="./public/preview/home-default.png" width="600"/> 
  <img src="./public/preview/home-open-cart.png" width="600"/>   
</div>

### Modo Noturno

<div style="display: inline_block">
  <img src="./public/preview/home-dark-theme.png" width="600"/> 
  <img src="./public/preview/home-open-cart-dark-theme.png" width="600"/>   
</div>

### Animação de Carregamento

<div style="display: inline_block">
  <img src="./public/preview/home-loading.png" width="600"/> 
</div>

Disponível em: https://mks-front-end-challenge1.vercel.app/

## Sobre o Projeto

Projeto desenvolvido para o teste técnico de front-end da MKS

Abaixo segue a lista de algumas das funcionalidades implementadas:

- Conceitos de SSR (para otimizar a experiência do usuário que estiver utilizando o site, bem como mecanismos de busca- SEO) e CSR
- Redux para compartilhamento dos dados entre componentes
- React Query para gerenciamento de dados assíncronos e comunicação com API
- Cacheamento de dados
- Mudança de tema utilizando o ThemeProvider do Styled-Components
- Requisições com Axios
- Skeleton Loading
- Testes unitários utilizando a React Testing Library e Jest

## Tecnologias

Abaixo seguem as ferramentas e frameworks utilizados no projeto: <br/>

<div style="display: inline_block"> 
  <img alt="Gui-Next" height="30" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img alt="Gui-React" height="30" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Gui-Redux" height="30" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white">
  <img alt="Gui-React-Query" height="30" src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
  <img alt="Gui-Axios" height="30" src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white">
  <img alt="Gui-Jest" height="30" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
  <img alt="Gui-React-Testing-Library" height="30" src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red">  
  <img alt="Gui-Ts" height="30" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Gui-Styled-Components" height="30" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">  
  <img alt="Gui-Figma" height="30" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>


## Como Rodar

1. Clone este repositório
2. Adicione a URL da API nas variáveis de ambiente (exemplo no arquivo .env.example)
3. Instale as dependências
```bash
npm i
```
4. Rode a aplicação com
```bash
npm run dev
```
5. Você pode opcionalmente buildar o projeto 
```bash
npm run build
```
6. E executar a versão de produção
```bash
npm start
```
7. Por último, acesse http://localhost:3000 no seu navegador para vizualizar a aplicação

## Testes

Para rodar os testes execute o comando
```bash
npm test
```