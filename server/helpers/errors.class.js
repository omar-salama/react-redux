class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
  static notFound(message) {
    return new ApiError(message, 404);
  }
}

module.exports = ApiError;
