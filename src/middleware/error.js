'use strict';

module.exports = (err, req, res, next) => {
  let error = { error: 'error: resource not found' };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};