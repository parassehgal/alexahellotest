const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*app.use(bodyParser.json({
  verify: function getRawBody(req, res, buf) {
    req.rawBody = buf.toString();
  }
}));*/

app.use(
		bodyParser.urlencoded(
		{ extended: true })
	);
app.use(bodyParser.json());

app.post('/hello',function(req,res){

	if (req.body.request.type === 'LaunchRequest') {
		var speechText = 'Welcome hello world';
		var speechOutput = "<speak>" + speechText + "</speak>"
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
		
		switch (req.body.request.intent.name)
		{
			case 'HelloWorldIntent':
			var speechText = 'Hii this is inside helloworld intent ';
			var speechOutput = "<speak>" + speechText + "</speak>"
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
			break;
			
			case 'SlotIntent':
			var speechText = 'Hii this is inside slot intent ';
			var speechOutput = "<speak>" + speechText + "</speak>"
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
			break;
			
			default : 
			var speechText = 'Hii  ';
			var speechOutput = "<speak>" + speechText + "</speak>"
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
		
		
	}

}).listen(process.env.PORT||9879);

console.log('Server running at 9879/');