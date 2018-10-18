const express = require("express"),
    cors= require('cors'),
    bodyParser = require("body-parser");
   
const app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
const NODE_PORT = process.env.PORT || 3000;

app.get('/car', (req, res)=>{
    console.log(req.query.plateNo);
    let vehicleNo = req.query.plateNo;
    if(vehicleNo == 'SGD1234R'){
        res.status(200).json(
            {
                plateNo: 'SGD1234R',
                brand: "Toyota",
                purchaseDate: new Date(),
                model: 'Camry 2.0'
            }
        );
    }else{
        res.status(500).json({error: "error wrong car !"})
    }
    
})
app.listen(NODE_PORT, ()=>{
    console.log(`listen at ${NODE_PORT}`);
})