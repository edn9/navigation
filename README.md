# Fundamentos React Navigation

Estudo de App[(\*)](https://app.rocketseat.com.br/journey/react-native-2025/contents) sobre fundamentos do React Native, desta vez aprendendo sobre React Navigation e seus componentes.

React Navigation é um conjunto de componentes feitos para iOS e Android com suporte a animações e gestos com intuito de ser usado como navegação entre paginas de diferentes formas e com diversas opções.

## Requerimentos

- [React-Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React-Navigation](https://reactnavigation.org/docs/getting-started)

## Navigators: Native Stack & Stack, Bottom Tabs & Drawer Navigation

### Navite Stack & Stack

Stack Navigators prove formas de seu app transicionar entre telas de uma forma que a cada nova tela, uma fica em cima da outra, criando uma "stack".

<!--![Stack Example](https://i.imgur.com/FcrO8Aa.gif)-->

[<img src="https://i.imgur.com/FcrO8Aa.gif" height="500px" alt="Stack Native example" />](https://i.imgur.com/FcrO8Aa.gif)

Ambos possuem mesmas similiridades, a diferença é que o Native Stack é uma versão que usa elementos nativos do hardware para melhorar a performance na hora de renderizar os componentes.

### Bottom Tabs

Uma barra de abas simples na parte inferior da tela que permite alternar entre diferentes rotas. As rotas são inicializadas sob demanda — os componentes de tela delas não são montados até serem focados pela primeira vez.

[<img src="https://i.imgur.com/68nnFcq.gif" height="500px" alt="Bottom Tabs example" />](https://i.imgur.com/68nnFcq.gif)

### Drawer Navigation

O Drawer Navigator renderiza uma gaveta de navegação na lateral da tela que pode ser aberta e fechada por gestos.

[<img src="https://i.imgur.com/Nq0qvW2.gif" height="500px" alt="Drawer Navigation example" />](https://i.imgur.com/Nq0qvW2.gif)
