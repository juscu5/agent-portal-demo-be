module.exports = (error, res) => {
  let statusCode = 500;
  if (Object.prototype.hasOwnProperty.call(error, 'status')) {
    statusCode = error.status;
  }

  return res.status(statusCode).send({
    message: error.message,
  });
};
