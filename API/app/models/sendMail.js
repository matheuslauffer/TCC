function sendMail(partida){
  var convocados = partida.atletasConvocados;
  var contatos = [];
  var i = 0;

  convocados.forEach(function(convocado, i){
    contatos[i] = {email : convocado.email};
    i++;
  });

  var nodemailer = require('nodemailer');

  var $usuario = 'bora.jogar.adm@gmail.com';
  var $senha = '98217394';

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: $usuario,
          pass: $senha
      }
  });

  for (var i = 0; i < contatos.length; i++) {
    var $destinatario = contatos[i].email;

    var mailOptions = {
        from: $usuario,
        to: $destinatario,
        subject: 'Novo convite recebido',
        text: 'Você foi convidado para uma partida! Revise seus convites!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
  }
  }


module.exports = function(){
  return sendMail;
};
