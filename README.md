![Rick and Morty](https://firebasestorage.googleapis.com/v0/b/enme-b7107.appspot.com/o/name.png?alt=media)

# Rick And Morty frontend client

Esta aplicação tem o intuito de consumir a [api de Rick And Morty](https://rickandmortyapi.com/graphql) utilizando `ReactJS` e `GraphQL`.

## Como utilizar esta aplicação?

Faça o clone do respositório para a sua máquina local, instale as dependências (utilizando o comando `yarn` dentro da pasta raiz do projeto) e depois `yarn start`.

## Scripts

In the project directory, you can run:

### `yarn start`

Starta a aplicação em seu `localhost`.
Abra [http://localhost:3000](http://localhost:3000) para vê-la no browser.

### `yarn test`

Starta todos os suites de testes unitários presentes na aplicação.

### `yarn build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

### `yarn apollo:schema`

Faz download do GraphQL Schema diretamente da API, sendo desnecessário baixá-lo manualmente.

### `yarn apollo:codegen`

Do schema baixado pelo comando anterior, 
cria todas as tipagens do `Typescript` para as requisições na API, tornando a experiência de desenvolvimento muito mais flúida e confiável.

### `yarn storybook`

Starta o [Storybook](https://storybook.js.org/), software que permite a visualização dos componentes da aplicação, sem necessidade de starta toda ela.

## Dependências

1) Node: > 14.0.0
