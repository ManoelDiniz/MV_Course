# MV_Course

Este é o repositório do projeto MV_Course. Aqui estão as instruções para configurar o ambiente de desenvolvimento e clonar este repositório.
Configurar chave SSH no github
Clonar o repositorio
    git clone git@github.com:ManoelDiniz/MV_Course.git
    
## Dependências

Certifique-se de que você tem as seguintes dependências instaladas no seu ambiente de desenvolvimento:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- TypeScript: Você pode instalá-lo globalmente com `npm install -g typescript`

Aqui estão as dependências listadas no arquivo `package.json`:

```json
{
  "dependencies": {
    "@types/axios": "^0.14.0",
    "axios": "^1.5.1",
    "pg": "^8.11.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-router-dom": "^6.16.0",
    "reflect-metadata": "^0.1.13",
    "sequelize": "^6.33.0",
    "sequelize-typescript": "^2.1.5",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^20.7.1",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.7",
    "@types/react-router-dom": "^5.3.3",
    "react-scripts": "5.0.1",
    "sequelize-cli": "^6.6.1",
    "typeorm": "^0.3.17",
    "typescript": "^4.9.5"
  }
}


Executando o projeto 
npm install # Para instalar as dependências
npm start   # Para iniciar o aplicativo em modo de desenvolvimento

