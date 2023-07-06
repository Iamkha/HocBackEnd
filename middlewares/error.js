const catchError = (err, req, res, next) => {
  res.status(err.catchError).json({
    success: false,
    statusCode: err.statusCode,
    message: err.message,
  });
};

module.exports = catchError;
