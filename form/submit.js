const baseUrl = "http://hi.sandy"

function submit() {
	let request = new XMLHttpRequest()
	let name = document.getElementById('submit').value
	request.open('POST', baseUrl)
	request.setRequestHeader("Content-Type", "application/json")
	request.send(`{"name": "${name}"}`)
}
