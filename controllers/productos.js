
const Producto = require('../models/productos');


const { response , request} = require('express');

 const productosGet = async (req, res) => {
    try {
        const producto = await Producto.findAll();
        res.json({ producto });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
};

const productosPost = (req, res = response)=>{
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const producto = new Producto(body); 
        producto.save()
        // res.json(producto);
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

const productosPut = async(req, res = response)=>{

    const {idProducto, estadoProducto,  nombreProducto, precioCompra ,precioVenta, saldoExistencias, stockMaximo, stockMinimo, categoriaProducto_idCategoriaProducto } = req.body
    let mensaje = 'Modificación exitosa'
    try{
            await Producto.update(
            {
                estadoProducto: estadoProducto,
                nombreProducto: nombreProducto,
                precioVenta: precioVenta,
                precioCompra: precioCompra,
                saldoExistencias: saldoExistencias,
                stockMaximo: stockMaximo, 
                stockMinimo: stockMinimo,
                categoriaProducto_idCategoriaProducto: categoriaProducto_idCategoriaProducto
            },
            {
                where: {
                    idProducto: idProducto
                }
            }
        );
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}



const productosDelete = async(req, res)=> {
    const {idProducto} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        await Producto.destroy({ where: { idProducto: idProducto } });
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports ={
    productosGet,
    productosPut,
    productosPost,
    productosDelete
}