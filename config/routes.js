const express = require('express')
const routes = express.Router()

let db = [
    {id: 1, Nome: 'Client1', Idade:'20'} ,
    {id: 2, Nome: 'Client2', Idade:'20'},
    {id: 3, Nome: 'Client3', Idade:'20'} 
]

//buscar dados
routes.get('/',(req,res) => {
    return res.send(db)
})

//inserir dados
routes.post('/add',(req,res)=>{
    const body = req.body

    if(!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
})


//deletar dados
routes.delete('/:id',(req,res)=> {
    const id = req.params.id

    let newDB = db.filter(item => item.id !== id); 

    db = newDB
    
    return res.status(200)
})   
 
 module.exports = routes



