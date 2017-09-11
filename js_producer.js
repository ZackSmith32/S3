var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client('localhost:2181'),
    producer = new Producer(client);

payloads = [
        { topic: 'log-data', messages: 'hi'},
        { topic: 'log-data', messages: 'mom!' }
    ];

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('/Users/mba/scality_hackathon/test_stuff/ml-1m/ml-200')
});

console.log("after stream created");

producer.on('ready', function () {
	console.log("producer ready")
	// rl.on('line', function (line) {
	// 	console.log("in read line")
		

		// producer.send([{'topic': 'log-data', 'message' : line}], function(err, data) {
		producer.send(payloads, function(err, data) {
			console.log('Line from file:', data);
			if (err) {
				console.log(err)
			}
			
		})


	// });
});

producer.on('error', function (err) {})