//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

//Configurar nunjucks (tempalte engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    autoescape: false, // Permite colocar tags html dentro das variaveis
    noCache: true
})

//Início e configuração do servidor
server
//Get data from req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estáticos
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)