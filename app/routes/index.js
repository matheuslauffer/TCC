module.exports = function(application){
	application.get('/', function(req, res){
		res.render('index');
	});
	application.post('/inicial', function(req, res){
		res.render('inicial');
	});
}
