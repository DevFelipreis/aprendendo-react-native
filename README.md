# E-Tech Collection

E-Tech Collection é um aplicativo móvel desenvolvido com React Native e Expo, que permite aos usuários encontrar pontos de coleta de resíduos eletrônicos. O aplicativo apresenta uma interface amigável e funcionalidade para login, registro e visualização de locais de coleta.

## Índice

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Características

- Tela de login e registro de usuários.
- Visualização de pontos de coleta de resíduos eletrônicos no mapa.
- Interface intuitiva e responsiva.
- Estilos personalizados utilizando fontes do Google Fonts.

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [expo-google-fonts](https://github.com/expo/google-fonts)
- [axios](https://axios-http.com/docs/intro) (para requisições HTTP, se necessário)

## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/etech-collection.git
   cd etech-collection
   ```

2. **Instale as dependências**:

   Se você estiver usando o npm:

   ```bash
   npm install
   ```

   Ou, se preferir o Yarn:

   ```bash
   yarn install
   ```

3. **Instale o Expo CLI (se ainda não estiver instalado)**:

   ```bash
   npm install -g expo-cli
   ```

4. **Inicie o aplicativo**:

   ```bash
   npx expo start
   ```

5. **Abra o aplicativo no seu dispositivo ou emulador**.

## Uso

Após iniciar o aplicativo, você verá uma tela de carregamento seguida pela tela de login. Você pode criar uma nova conta ou fazer login em uma conta existente. Após o login, você poderá visualizar a lista de pontos de coleta de resíduos eletrônicos.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
E-Tech Collection/
│
├── assets/                   # Imagens e outros recursos estáticos
├── src/
│   ├── navigation/           # Configuração da navegação
│   ├── screens/              # Telas do aplicativo
│   ├── utils/                # Funções utilitárias e configurações de estilo
│   └── App.js                # Componente principal do aplicativo
│
├── App.js                    # Ponto de entrada do aplicativo
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Documentação do projeto
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

1. Faça um fork do repositório
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas alterações (`git commit -m 'Adicionando uma nova feature'`)
4. Faça um push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [GNU GENERAL](LICENSE).
```

### Personalizações

1. **Substitua** `https://github.com/seu-usuario/etech-collection.git` pela URL real do seu repositório.
2. **Adicione** informações específicas sobre o funcionamento do seu aplicativo, se necessário.
3. **Adicione** instruções sobre como criar e configurar uma conta, se for relevante.
4. **Inclua** mais detalhes na seção de contribuições, se você quiser orientações específicas.

Sinta-se à vontade para ajustar o conteúdo e o formato conforme necessário!
