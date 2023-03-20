//uses in style in html with javascript

const placesStyle = document.getElementsByClassName('places');
for(const place of placesStyle)
{
    place.style.border= '2px solid red';
    place.style.backgroundColor = 'lightgrey'
}
const fruitsStyle = document.getElementById('fruits_container');
fruitsStyle.classList.add('text-middle')
fruitsStyle.classList.add('bg-for-fruitsContainer');