var app = require('./config/server.js');

var port = 8080;
app.listen(port, function(){
    console.log('Servidor HTTP esta escutando na porta ' + port);
});
