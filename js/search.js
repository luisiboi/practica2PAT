//Busqueda javascript
//el boton de submit me va a cambiar la página y me la va a rellenar de amiibos

const cButton = document.getElementById("search-form");
var amiibos = [];
cButton.addEventListener("submit",function(e){
	console.log("boton funciona")
	e.preventDefault();
	fetch("https://www.amiiboapi.com/api/amiibo/?name=bowser", {
		"method": 'GET',
		"dataType": 'json',
      	"headers": {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
	})
	/*fetch("https://n3evin-amiiboapi-v1.p.rapidapi.com/amiibo/?name=bowser", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d77b0845a1msh76126138a8f6e1ep154baajsnac6de884ab41",
		"x-rapidapi-host": "n3evin-amiiboapi-v1.p.rapidapi.com"
	}
	})*/
	.then(response => {
		if(response.ok){
			console.log("fetchOK");
			console.log(response);
			return response.text();
		} else {
			throw response;
		}}
	)
	.then(text => {
		amiibos=JSON.parse(text);
		console.log(amiibos);
		console.log(amiibos.amiibo[1].name)
		let html = '<div class="container marketing">';
		html += '<hr class="featurette-divider">'
		+ '<h2 class="featurette-heading">BOWSER HA COMPRADO LA PÁGINA</h2>'
		+'<div class="row featurette">'
				+'<div class="col-md-5 mx-auto">'
                     + '<p class="lead"> Ya no es una página de playstation, al realizar la petición http Bowser ha comprado el dominio, lo siento.</p>'
                     +  `<h6 class="featurette-heading">${amiibos.amiibo[1].name} : </h6>`
                     + '<p class="lead">Nuevo proprietario de la página</p>'
                +'</div>'
                + '<div class="col-md-7">'
                     +`<img src="${amiibos.amiibo[0].image}" class="featurette-image img-fluid mx-auto" width="500" height="500" preserveAspectRatio="xMidYMid slice" focusable="false">`
                +'</div>'
        + '</div>'
    + '</div>';
    document.getElementById("content").innerHTML = html;
	})
	return false;
})

/*function updatePeegi(){
	let html = '<div class="container marketing">';
		html += '<hr class="featurette-divider">'

		+ '<p>NINTENDO HA COMPRADO LA PÁGINA</p>'

		+'<div class="row featurette">'
				+'<div class="col-md-5 mx-auto">'
                     + '<p class="lead"> Ya no es una página de playstation, al realizar la petición fetch he comprado el dominio</p>'
                     +  `<h5 class="featurette-heading">${amiibo.name[1]} : </h5>`
                     + '<p class="lead">Nuevo proprietario de la página</p>'
                +'</div>'
                + '<div class="col-md-7">'
                     +`<img src="${amiibo.image[1]}" class="featurette-image img-fluid mx-auto" width="500" height="500" preserveAspectRatio="xMidYMid slice" focusable="false">`
                +'</div>'
        + '</div>'
    + '</div>';
    document.getElementById("content").innerHTML = html;
}*/