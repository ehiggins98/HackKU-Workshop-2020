const Url = "https://go.hackku.org/api/get"
let loaded = 0

function getNames() {
	let request = new XMLHttpRequest()
	request.addEventListener("load", () => {
		console.log(request.status)
		if (request.status != 200) {
			return
		}
		let names  = JSON.parse(request.response)
		
		while (loaded < names.length) {
			let name = document.createElement('p')
			let text = document.createTextNode(names[loaded])
			name.appendChild(text)
			document.getElementById('text-box').appendChild(name)
			loaded++;
		}
	})
	request.open('GET', Url)
	request.send()	

}

getNames()
setInterval(getNames, 1000)
