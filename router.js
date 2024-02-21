const express = require('express');


const conexion = require('./database/db');


// router.get('/', (req, res)=>{
//     conexion.query('SELECT * FROM productos', (error, results)=>{
//         if (error) {
//             throw error;
//         }else{
//             res.send(results)
//         }
//     })
// });

module.exports = router;