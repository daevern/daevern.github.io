
//query form
const form = document.getElementById('query-form');

//text input field
const query = document.getElementById('query');

//set onsubmit
form.onsubmit = function(event){
	event.preventDefault();

	// get value in input field
	const queryTerm = query.value;
	console.log (queryTerm);
}
function getTaggedPhotos(tagName){
fetch('https://api.tumblr.com/v2/tagged?tag=gif&api_key=4eAMJbCQ8YCuUd4bMqVvzkqE3YBrzF1961FH6x4CdzWOs16gB1')
 .then(function(response){
    return response.json();  
 })
 .then(function(result){
   const items = result.response;

   for (let i = 0; i < items.length; i++){
	 const item = items[i];

	 if (item.photos != undefined){
	 	const altSize= item.photos[0].alt_Size
		const imgSrc = altSizes[altSizes.length - 3].url;

		const img = document.createElement('img');
		img.src = imgSrc;

		const li = document.createElement('li');
		li.appendChild(img);
		li.innerHTML = imgSrc;

		list.appendChild(li);
	  }
	}
})}

     
