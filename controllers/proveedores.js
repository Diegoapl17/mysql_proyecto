
const Proveedor = require('../models/proveedores');


const { response , request} = require('express');

 const proveedoresGet = async (req, res) => {
    try {
        const proveedor = await Proveedor.findAll();
        res.json({ proveedor });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
};

const proveedoresPost = (req, res = response)=>{
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const proveedor = new Proveedor(body); 
        proveedor.save()
        // res.json(producto);
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

const proveedoresPut = async(req, res = response)=>{

    const {idProveedor, estado,  nombreProveedor, correoProveedor ,direccionProveedor, telefonoProveedor } = req.body
    let mensaje = 'Modificación exitosa'
    try{
            await Proveedor.update(
            {
                estado: estado,
                correoProveedor: correoProveedor,
                nombreProveedor: nombreProveedor,
                direccionProveedor: direccionProveedor,
                telefonoProveedor: telefonoProveedor
            },
            {
                where: {
                    idProveedor: idProveedor
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



const proveedoresDelete = async(req, res)=> {
    const {idProveedor} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        await Proveedor.destroy({ where: { idProveedor: idProveedor } });
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports ={
    proveedoresGet,
    proveedoresPut,
    proveedoresPost,
    proveedoresDelete
}