const express = require('express')
const bodyParser = require('body-parser')
const {join} = require('path')
const app= express()
const port =8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('*', (req,res,next)=>{
    let time = new Date()
    console.log(`${req.method} to ${req.originalUrl} at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
    next()
})

app.get('/build.js', (req,res)=>{
    if (req.header('Accept-Encoding').includes('br')){
        console.log('request br');
        res.set('Content-Encoding','br')
        res.set('Content-Type','application/javascript;charset=utf-8')
        res.sendFile(join(__dirname, 'dist','build.js.br'))
    }
    else 
    if (req.header('Accept-Encoding').includes('gz')){
        console.log('request gz');
        res.set('Content-Encoding','gzip')
        res.set('Content-Type','application/javascript;charset=utf-8')
        res.sendFile(join(__dirname, 'dist','build.js.gz'))
    }
    else{
        console.log('request none');
        res.sendFile(join(__dirname, 'dist', 'build.js'))
    }
})

app.use((req,res) =>{
    res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(port, '0.0.0.0', (req, res)=>{
    console.log(`Listening on localhost:${port}`)
})

