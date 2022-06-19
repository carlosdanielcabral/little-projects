# Little Projects

## Descrição
Nesta aplicação é possível verificar se um número pertence à sequência de Fibonacci, obter dados de faturamento de uma distribuidora fictícia, obter dados de faturamento fictícios de estados brasileros e fazer a inversão de uma string.

## Tecnologias utilizadas
### Frontend
HTML, CSS, Javascript, React

### Backend
Javascript, Node, Express, Joi

## Rodando a aplicação

### Com Docker
```bash
docker-compose up
```

### Sem Docker
#### Instalando as dependências
```bash
 cd frontend
 npm install
 cd ../backend
 npm install
 cd ..
 ```
 
 #### Rodando a aplicação
 ```bash
 cd frontend
 npm start &
 cd ../backend
 npm start &
 ```

## Documentação da API
Com a aplicação rodando, acesse http://localhost:3001/api-docs para ter acesso à documentação da API.
