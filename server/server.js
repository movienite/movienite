const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
const apiRouter = require('./routes/api.js');




/* Initialize app/express */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Serve initial static index.html front page */
app.use(express.static(path.resolve(__dirname, '../client')));

/* Define route handlers */
app.use('/api', apiRouter);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/* Start server */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
