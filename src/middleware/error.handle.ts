const errorHandle = (err: Error, res: Response, req: Request, next: Function) => {
  console.error(err.stack);

  let statusCode: number = 500
  let message: string = "Internal Server Error"

  switch (err.name) {
    case "Not Found":
      statusCode = 404
      message = err.message
      break;
    case "Bad request":
      statusCode = 400
      message = err.message
      break;
    default:
  }

}
export {errorHandle}

