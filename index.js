const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.sendFile('./static/index.html',{
        root: __dirname
    })
});

app.get('/nosotros', (req, res) =>{
    res.sendFile('./static/nosotros.html',{
        root: __dirname
    })
});

app.get('/contactanos', (req, res) =>{
    res.sendFile('./static/contactanos.html',{
        root: __dirname
    })
})

app.listen(4000)
console.log(`Server on port ${4000}`)

app.use((req, res)=>{
    res.status(404).send('No se encontró tu página...!')
})
