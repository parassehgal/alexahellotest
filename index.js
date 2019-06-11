const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.post('/hello',function(req,res){

	if (req.body.request.type === 'LaunchRequest') {
		var speechOutput = 'Welcome hello world';
		res.json({
		"version": "1.0",
			"response": {
			  "shouldEndSession": false,
			  "outputSpeech": {
				"type": "SSML",
				"ssml": speechOutput
			  }
			}
		});
	}
	else if (req.body.request.type === 'IntentRequest') {
		var speechOutput = 'Hii this is intent request';
		res.json({
		"version": "1.0",
			"response": {
			  "shouldEndSession": false,
			  "outputSpeech": {
				"type": "SSML",
				"ssml": speechOutput
			  }
			}
		});
	}

}).listen(process.env.PORT||9879);

console.log('Server running at 9879/');