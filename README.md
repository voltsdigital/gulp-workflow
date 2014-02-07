# Workflow com Gulp

Para utilizar o Gulp, primeiro é necessário baixar e instalar o [NodeJS](http://nodejs.org/download/)

> Esse Workflow é compatível com o Gulp 3.5+

Instale o Gulp globalmente:
```
[sudo] npm i -g gulp
```

Depois de baixar esse repositório, coloque-o em um diretório `src`, por exemplo, no seu projeto, e execute o comando:
```
npm install
```

para instalar todas as dependências do Gulp.

## Configuração

Edite o arquivo `gulp/assets-src.js` para definir os caminhos corretos para seus arquivos.

### Versão Mobile diferente de Desktop

Se o seu projeto tem uma versão mobile diferente do desktop, você pode chamar os assets passando o parâmetro `m` para pegar o diretório referente aos assets do mobile.

## Utilização

### `gulp w`

Assiste todos os arquivos JS e SASS e concatena.

### `gulp wjs`

Assiste todos os arquivos JS e concatena.

### `gulp wcss`

Assiste todos os arquivos SASS e concatena.

### `gulp`

Compila e concatena todos os JS e CSS e minifica-os.

