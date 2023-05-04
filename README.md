# Git

## configuração do usuario das alteraçoes 
Fonte ; [Configuração do git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)
### 1.1. Setando o nome
```js
$ git config --global user.name "Fulano de Tal"
```
### 1.2. Setando o Email
```js
$ git config --global user.email fulanodetal@exemplo.br
```

## subir alteraçoes para o repositorio remoto

### 1- verificar as alteraçoes 
```
git status
```
### 2- Adicionar as alteraçoes para o repositorio remoto
```
git add . 
```
### 3- conferir as alteraçoes para serem enviadas 
```
git status 
```
### 4- Preparar as alteraçoes para serem enviadas 
```
git commit -m "comentario"
```
### 5- Conferir a preparação 
```
git status
```
### 6- Envia as alteraçoes 
```
git push
```