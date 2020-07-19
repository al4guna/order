class CError {
	constructor(code, status, message, error) {
		this.code = code;
		this.status = status;
		this.message = message;
		this.stack = error ? error.stack: new Error().stack;
		this.error = error;
	}
}


CError.prototype = Object.create(Error.prototype);
CError.prototype.constructor = CError;

module.exports = CError;