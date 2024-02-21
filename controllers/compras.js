

const { response , request} = require('express');

const comprasGet = (req, res = response)=>{

    //esta es una forma 
    const query = req.query;

    //si lo desectructuramos solo mostramos o obtenemos el valor que nos interesa
    const { apikey , nombre } = req.query;

    res.json({
        msg: 'get api -controlador',
        nombre,
        apikey
    });
}

const comprasPost = (req, res = response)=>{

    const body = req.body;

    res.json({
        msg: 'post api -controlador',
        body
    });
}

const comprasPut = (req, res = response)=>{

    const id = req.params.id;

    res.json({
        msg: 'put api -controlador',
        id
    });
}



const comprasDelete = (req, res = response)=>{
    res.json({
        msg: 'delete api -controlador'
    });
}

module.exports ={
    comprasGet,
    comprasPut,
    comprasPost,
    comprasDelete
}