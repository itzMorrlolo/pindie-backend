const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pagesRouter = require('./routes/page')
const apiRouter = require('./routes/api')
const cookieParser = require("cookie-parser");

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(), 
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public'))
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 