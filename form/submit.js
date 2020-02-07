const Url = "https://go.hackku.org/api/submit"

function submit() {
	let request = new XMLHttpRequest()
	let name = document.getElementById('submit').value
	request.open('POST', Url)
	request.setRequestHeader("Content-Type", "application/json")
	request.send(`{"name": "${name}"}`)
}
