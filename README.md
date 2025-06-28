# React + TypeScript + Vite
Aplicação web do universo Rick and Morty, desenvolvida com React e TypeScript seguindo o padrão Atomic Design. Consome dados da Rick and Morty API.

--------------------------------------------------------

Tecnologias:
- React + TypeScript
- Styled-Components
- Storybook
- Atomic Design
- Vite (ou outro bundler)
- Rick and Morty API

--------------------------------------------------------

Estrutura do Projeto:

src/
  atoms/
    icon/
    image/
    text/
  molecules/
    characterCard/
  organisms/
    episodeCard/
    modal/
  utils/
  pages/
  styles/

--------------------------------------------------------

Como Executar:

1. Clone o repositório:
git clone https://github.com/victorhelopes/azs-web-rickandmorty.git
cd azs-web-rickandmorty

2. Instale as dependências:
yarn
ou
npm install

3. Inicie o servidor de desenvolvimento:
yarn dev
ou
npm run dev

4. Inicie o Storybook:
yarn storybook
ou
npm run storybook

--------------------------------------------------------

Funcionalidades:
- Listagem de episódios
- Modal com detalhes do episódio
- Visualização de personagens do episódio
- Componentes reutilizáveis e escaláveis com Atomic Design

--------------------------------------------------------

API:
Os dados são consumidos da Rick and Morty API (https://rickandmortyapi.com/documentation)

--------------------------------------------------------

Scripts disponíveis:
- yarn dev -> roda a aplicação
- yarn storybook -> abre o Storybook
- yarn build -> build de produção
- yarn lint -> executa o lint

--------------------------------------------------------

Licença:
MIT

Autor:
victorhelopes (https://github.com/victorhelopes)

```
