const express = require('express');
const srv = express();

srv.get('/', getHome);
srv.get('/sobre', getSobre);

srv.listen(3030);


function getHome(req, res){
    res.send(`
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quos minus porro fuga repellat aspernatur modi quisquam amet ipsa animi illum ipsum dignissimos aliquam possimus tempore libero, ad sequi obcaecati.
    `);
}

function getSobre (req, res){
    res.send(`
    <h1>Sobre</h1>
<p1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum optio iure soluta atque obcaecati reprehenderit labore nemo fugit aliquid distinctio sed excepturi accusantium blanditiis, quam ipsa necessitatibus debitis repellat delectus.
Nobis corrupti tenetur ullam reiciendis ipsam velit! Adipisci perferendis ex, molestias quidem, ullam corrupti facilis quas libero, rem autem tempore sed sunt dicta ipsum odit animi! Unde adipisci molestias quasi?</p1>
    `);
}
