// make SQL database so we can store username, pwd, and email 
const db = require('../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  // const {username, password, email} = req.body;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  // empty result = not in db

  // params has to be in an array
  const params = [username, password, email];

  // logic for if user inputted missing fields
  if (!username || !password || !email){
    return next('Missing username, password, and/or email in userController.createUser');
  }
  
  // query string
  // INSERT INTO table_name (column1, column2, column3, ...)
  // VALUES (value1, value2, value3, ...); 
  const queryString = 'INSERT INTO users_table (username, password, email) VALUES $1, $2, $3';

  db.query(queryString, params)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch(() => {
      return next({
        log: 'error inserting username, password, email',
        message: {
          err: 'userController.createUser: ERROR: Check server logs for details'
        }
      });
    });
}

module.exports = userController;