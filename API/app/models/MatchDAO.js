var objectID = require('mongodb').ObjectID;

function MatchDAO(connection) {
  this._connection = connection();
}

MatchDAO.prototype.newMatch = function (req, res, partida, application) {
    this._connection.open(function(err, mongoclient){
      mongoclient.collection("partidas", function(err, collection){
        collection.insert(partida, function(erro, partidaInserida){
            var sendMail = new application.app.models.sendMail(partida);
            res.json(partidaInserida);
        })
        mongoclient.close();
      });
    });
}

MatchDAO.prototype.getAllMatchs = function (res) {
  this._connection.open(function(err,mongoclient){
    mongoclient.collection("partidas", function(err, collection){
      collection.find().toArray(function(err, result){
        res.send(result);
      });
    });
    mongoclient.close();
  });
}

MatchDAO.prototype.getMatchByAdmin = function (res, admin) {
  this._connection.open(function(err,mongoclient){
    mongoclient.collection("partidas", function(err, collection){
      admin.name = {admin: "Matheus"};
      collection.find(admin.name).toArray(function(err, result){
        res.send(result);
      });
    });
    mongoclient.close();
  });
}

MatchDAO.prototype.getMyMatchs = function(res, administrador){
  this._connection.open(function(err, mongoclient){
     mongoclient.collection("partidas", function(err, collection){
      collection.find({admin:administrador,
                      "diahora": {$gte: new Date().toJSON()}}).toArray(function(err, result){
        res.send(result);
      });
     });
    mongoclient.close();
  });
}

MatchDAO.prototype.getMatchById = function(res, idPartida){
  this._connection.open(function(err, mongoclient){
     mongoclient.collection("partidas", function(err, collection){
      collection.find({"_id": objectID(idPartida)}).toArray(function(err, result){
        res.send(result);
      });
     });
    mongoclient.close();
  });
}

MatchDAO.prototype.getMyInvites = function(res, id){
  this._connection.open(function(err, mongoclient){
     mongoclient.collection("partidas", function(err, collection){
      collection.find({"atletasConvocados._id": id,
                      "diahora": {$gte: new Date().toJSON()}}
                    ).toArray(function(err, result){
        res.send(result);
      });
     });
    mongoclient.close();
  });
}

MatchDAO.prototype.confirmInvite = function(res, admin, match, confirmacao){
  this._connection.open(function(err, mongoclient){
     mongoclient.collection("partidas", function(err, collection){
      collection.update({$and:[{_id: objectID(match)},{"atletasConvocados._id":  admin}]},
        {$set:{"atletasConvocados.$.confirmado": confirmacao}},
        {},
        function(err, records){
          if(err){
						res.json(err);
					} else {
						res.json(records);
					}
          mongoclient.close();
        }
      )
      });
     });
   }

MatchDAO.prototype.sendInvites = function(partida){
  console.log(partida);
}

module.exports = function() {
  return MatchDAO;
};
