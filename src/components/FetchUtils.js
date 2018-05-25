/*jshint esversion: 6 */
require('es6-promise').polyfill();
require('isomorphic-fetch');


let responseData = response => {
  return response;
};

export function getData(dataURL) {
  let headers = { 
    mode: 'no-cors', 
    method : 'GET'
  };
  return fetch(dataURL, headers )
	.then(function(response) {
		if (response.status >= 400) {
			return "Bad response from server";
		}
		return response.text();
	});
}
