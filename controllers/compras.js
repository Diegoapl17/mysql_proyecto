
const Compra = require('../models/compras');


const { response , request} = require('express');

 const comprasGet = async (req, res) => {
    try {
        const compras = await Compra.findAll();
        res.json({ compras });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
};

const comprasPost = (req, res = response)=>{
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const compras = new Compra(body) 
        compras.save()
        // res.json(producto);
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

const comprasPut = (req, res = response)=>{

    const {idCompra, descripcionCompra,  estadoCompra,  proveedores_idProveedor } = req.body
    let mensaje = 'Modificación exitosa'
    try{
        Compra.updateMany({idCompra: idCompra}, 
            { $set: { descripcionCompra: descripcionCompra, estadoCompra: estadoCompra,  proveedores_idProveedor:proveedores_idProveedor }})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'+req.body.descripcionCompra
    }

    res.json({
        msg: mensaje
    })
}



const comprasDelete = (req, res = response)=>{
    const {idCompra} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
         Compra.findByIdAndDelete({idCompra: idCompra})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports ={
    comprasGet,
    comprasPut,
    comprasPost,
    comprasDelete
}