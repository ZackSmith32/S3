var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);


class KafkaStream {
	
	constructor() {
		this.type = 'kafka';
		this.stream = {
			writable : 1,
			write : function(str) {
				console.log('test' + str);
				producer.send([{topic: "log-data", message: str}], function(err, data) {
					console.log("Kafka Data : " + data)
				})
			},
		}
	}
}
/*
class KafkaStream {
	
	constructor() {
		this.type = 'kafka';
		this.writable = {
			write: function(str) {
				console.log('test' + str);
			}
		}
	}
}
*/
module.exports = KafkaStream;