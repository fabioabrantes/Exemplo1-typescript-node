interface ImailTo{
  name:string;
  email:string;
}
interface ImailMessage{
  subject:string;
  body:string;
  attachment?:string;
}
interface ImailDTO{
  to:ImailTo;
  message:ImailMessage;
}
class EmailServices{
  sendEmail({to,message}:ImailDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}
export default EmailServices;