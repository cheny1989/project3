const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const { nodeName } = require('jquery')
const cookieParser = require('cookie-parser');


const app = express()
const PORT = 8080 || process.env.PORT

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api', require('./ApiRouter'))


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
