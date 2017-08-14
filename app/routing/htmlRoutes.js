var path= require("path")

module.export = function(app) {
	

	app.get('/home', function (req, res) {
		res.sendfile(path.join(__dirname + '../public/home.html')
	});

	app.get('/survey', function (req, res) {
		res.sendfile(path.join(__dirname + '../public/survey.html')
	});