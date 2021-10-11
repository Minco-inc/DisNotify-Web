
class DisNotify {
	constructor(config) {
		this.url = config.url;
		this.name = config.name;
		this.text = config.text;
	}

	send() {
		postData(this.url, {
			username: this.name,
			content: "@everyone " + this.name,
			embeds: [{
				title: this.name,
				description: this.text,
				color: 0x2f3136,
				timestamp: ""
				}]
		}).then(console.log);
	}
}

function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native JavaScript objects
}
