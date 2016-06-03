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
        },
        dataWrapper = "",
        getData = function(callback) {
            var url = 'data/cars.json', //getUrl, //'data/cars.json',
                xhr = new XMLHttpRequest();


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
                        callback(data);
                        return data;
                    } else {
                        errorHandler && errorHandler(status);
                    }
                }
            };
            xhr.open('get', url, true);
            xhr.send();
            return xhr.onreadystatechange();
            //return 'xx';
        }

    return {
        getCars: function() {
            return getData(function(data){
              console.log(data); // Object {data: Array[5]}
              //return data;
            })
        }

    }
})();
