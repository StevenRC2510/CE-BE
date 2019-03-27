const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routeConfig = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

// default options

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
.then(() => {
  console.info('Connected to Database Successfully');
  return app.listen(process.env.PORT, () => {
    console.info(`Example app listening on port ${process.env.PORT}!`);
  });
})
.catch((err) => {
  if (err) throw err;
});

app.use(cors());
  routeConfig(app);
