'use strict';
var carsData = (function() {
    var carsElement = document.getElementById('carsListing'),
        errorHandler = function(status) {
            carsElement.innerHTML = "<p>Could not resolve given url.</p>\n" +
                "<p>" + status + " error</p>\n";
        },
        getData = function() {
            return new Promise(function(resolve, reject) {
                var url = 'data/cars.json', //getUrl, //'data/cars.json',
                    xhr = new XMLHttpRequest();

                xhr.open('get', url, true);
                xhr.onreadystatechange = function() {
                    var status;
                    var data;

                    if (xhr.readyState == 4) { // `DONE`
                        status = xhr.status;
                        if (status == 200) {
                            data = JSON.parse(xhr.responseText);
                            resolve(data);
                        } else {
                            reject(Error("Network Error"));
                            errorHandler && errorHandler(status);
                        }
                    }
                };
                xhr.send();
                //return xhr.onreadystatechange();
            });
        }

    return {
        getCars: getData()
    }
})();
