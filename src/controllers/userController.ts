import {Request, Response} from 'express';

import EmailServices from '../services/emailServices';

const users = [{name:'Dabio',email:'xxx@gmail.com'}];


export default {
  async index(req:Request,res:Response){
    return  res.json(users);
  },
  async create(eq:Request,res:Response){
    const emailService = new EmailServices();
    emailService.sendEmail({
      to:{name:'fabio',email:'fff@gmail.com'},
      message:{subject:'bem vindo',body:'seja bem vindo'}
    });
      return res.send();
  }
}
