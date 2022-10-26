/* eslint-disable */

/**
 * AJAX call to get solution of a day and show it on the site
 * @param {int} dayNumber Which solution to request from the server 
 */
function getSolution(dayNumber) {
  fetch(`/days/${dayNumber}`, { method: 'POST'})
  .then(response => response.json())
  .then((resp) => {
    console.log(resp);
    const header = document.createElement('h2');
    header.innerText = 'Response:'
    const responseElement = document.createElement('h3');
    responseElement.innerText = resp;
    const div = document.getElementById('response');
    div.appendChild(header);
    div.appendChild(responseElement);
  });
}

/**
 * AJAX call to get the second part solution to a days problem and show it on the site
 * @param {int} dayNumber Which solution to request from the server 
 */
 function getSolution2(dayNumber) {
  fetch(`/days/B_${dayNumber}`, { method: 'POST'})
  .then(response => response.json())
  .then((resp) => {
    console.log(resp);
    const header = document.createElement('h2');
    header.innerText = 'Response:'
    const responseElement = document.createElement('h3');
    responseElement.innerText = resp;
    const div = document.getElementById('response');
    div.appendChild(header);
    div.appendChild(responseElement);
  });
}
