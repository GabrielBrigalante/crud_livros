const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json())
const porta = 3000;
app.set('port', porta);
let contador =2;
const livros = [
    {
        id: 1, 
        titulo: 'pequeno principe', 
        descricao: 'Le Petit Prince', 
        edicao: '1',
        autor: 'Antoine de Saint-Exupéry',
        isbn: '123456',
    },
    {
        id: 2, 
        titulo: 're:zero', 
        descricao: 'isekai', 
        edicao: '2',
        autor: 'Tappei Nagatsuki',
        isbn: '987654',
    },
    ]
    app.set('port', porta);
    app.get('/livros', (req, res, next) => {
        res.json(livros);
    })

    app.post('/livros', (req, res, next) => {
        const livro = req.body;
        livros.push({id: contador += 1, titulo: livro.titulo, descricao:
        livro.descricao, edicao: livro.edicao, autor: livro.autor, isbn: livro.isbn}); console.log(livros);
        res.status(201).json(livros)
    })

    app.put("/livros", (req, res, next) => {
        livros.forEach((livro) => {
            if(livro.id === req.body.id){
                livro.titulo = req.body.titulo;
                livro.descricao = req.body.descricao;
                livro.edicao = req.body.edicao;
                livro.autor = req.body.autor;
                livro.isbn = req.body.isbn;
            }
        })
        res.status(200).json(livros);
    })
 
    app.delete('/livros/:id', (req,res,next) =>{
        const idLivroDeletado = req.params.id;
        livros.forEach((livro, index) =>{
            if(livro.id == idLivroDeletado) livros.splice(index, 1)
    
        })
        res.status(200).json(livros);
    })
    const server = http.createServer(app);
    server.listen(3000);