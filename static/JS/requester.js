/* eslint-disable */

/**
 * AJAX call to get solution of a day and show it on the site
 * @param {int} dayNumber Which solution to request from the server 
 */
function getSolution(dayNumber) {
  fetch(`/days/${dayNumber}`, { method: 'POST'})
  .then(response => response.json())
  .then((resp) => {
    const header = document.createElement('h2');
    header.innerText = 'Response:'
    const responseElement = document.createElement('h3');
    responseElement.innerText = resp;
    const div = document.getElementById('response');
    div.appendChild(header);
    div.appendChild(responseElement);
  });
}