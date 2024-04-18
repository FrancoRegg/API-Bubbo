import { Response } from "express";
/*

*/
const handleHttp = ( res:Response, error: string, errorRaw?: any ) => {
  console.log(errorRaw);
  res.status(500)
  res.send({ error })
}
/*
const handleHttp = (res: Response, message = "Algo salio mal", code = 500) => {
  console.log(res, "Esta es la respuesta");
  
  res.status(code)
  res.send({error:message});
}
*/



export { handleHttp }