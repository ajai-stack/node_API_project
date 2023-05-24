const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const empRoute = require('./Rouets/empRoutes')
const mongoose = require('mongoose')

app.get("/",(req, res) => {
    res.send("Hi server started successfully!!!!!!!")
})

app.use(cors())
app.use(bodyParser.json())
app.use('/empRoutes', empRoute)

mongoose.connect("mongodb://0.0.0.0:27017/RegisterDB",{useNewUrlParser:true})
.then(()=>console.log('connected to database'))
.catch(Error => console.log(Error))
app.listen(3400)
console.log('server is running')















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// const appRoutes = require('./routes/appRoutes')
// app.use(appRoutes);

// mongoose.connect("mongodb://0.0.0.0:27017/RegisterDB",{useNewUrlParser:true})
// .then(()=>console.log('connected to database'))
// .catch(Error => console.log(Error))



