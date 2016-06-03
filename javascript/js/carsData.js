'use strict';
var carsData = (function() {
    var carsElement = document.getElementById('carsListing'),
        successHandler = function(data) {
            //console.log(data);
            carsElement.innerHTML = data.data;
            //return data.data;
        },
        errorHandler = function(status) {
            carsElement.innerHTML = "<p>Could not resolve given url.</p>\n" +
                "<p>" + status + " error</p>\n";
        };

    return {
        getCars: function(getUrl) {
            var url = 'data/cars.json', //getUrl, //'data/cars.json',
                xhr = new XMLHttpRequest(),
                dataWrapper;

            xhr.open('get', url, true);
            xhr.onreadystatechange = function() {
                var status;
                var data;
                // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
                if (xhr.readyState == 4) { // `DONE`
                    status = xhr.status;
                    if (status == 200) {
                        data = JSON.parse(xhr.responseText);
                        successHandler && successHandler(data);
                        //dataReturner(data);
                        return data;
                    } else {
                        errorHandler && errorHandler(status);
                    }
                }
            };
            xhr.send();
            //return 'xx';
        }

    }
})();
