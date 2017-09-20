# MauAcompanha
TCC dos alunos de computação.

## Deploy localhost
* dentro do dir MauAcompanha\angular
```
C:\xampp\htdocs\MauAcompanha\angular>npm install -g @angular/cli
```
* Instalar os node modules
```
C:\xampp\htdocs\MauAcompanha\angular>npm install
```
* Instalar módulo http
```
C:\xampp\htdocs\MauAcompanha\angular>npm install @angular/http
```
* Instalar módulo http
```
C:\xampp\htdocs\MauAcompanha\angular>npm install @angular/router
```

## Deploy no bluemix
* Compilar o typescript.
```
C:\xampp\htdocs\MauAcompanha\angular>ng build --prod
```
* Copiar arquivos .php e o manifest.yml para dentro da pasta dist.
* Fazer login com a conta no bluemix.
```
cf login
```
* Push nos arquivos, com instalação do buildpack.
```
cf push testeMauacompanha123 -b https://github.com/cloudfoundry/php-buildpack.git/
```
* Ir no painel do bluemix e reiniciar o app.
