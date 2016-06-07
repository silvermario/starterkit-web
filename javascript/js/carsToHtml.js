'use strict'
var carsToHtml = (function() {

    var carsElement = document.getElementById('carsTable'),
        surroundWithTableDataTag = function(data) {
            return '<td>' + data + '</td>';
        },
        surroundWithTableRowTag = function(data) {
            return '<tr>' + data + '</tr>';
        },
        createLink = function(data) {
            return '<a href="' + data + '">LINK</a>'
        },
        createProgressBars = function(dataArray){
            var htmlContent = "";
            for( var i = 0; i < dataArray.length; i++){
                htmlContent += '<div class="progress">' +
                    '<div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="min-width: 6em; width:'+ dataArray[i].rating * 20 +'%">' +
                        dataArray[i].name +
                    '</div>' +
                '</div>';
            }
            return htmlContent;
        },
        createImgContent = function(data) {
            return '<img src="data/' + data + '" alt="'+ data +'" class="img-responsive" id="car-image"/>'
        },
        printCars = function(carsJSON) {
            //console.log(carsJSON);
            var htmlContent = "";
            for (var i = 0; i < carsJSON.data.length; i++) {
                htmlContent += surroundWithTableRowTag(surroundWithTableDataTag(carsJSON.data[i].manufacturer) +
                                                        surroundWithTableDataTag(carsJSON.data[i].model) +
                                                        surroundWithTableDataTag(carsJSON.data[i].price) +
                                                        surroundWithTableDataTag(createLink(carsJSON.data[i].wiki)) +
                                                        surroundWithTableDataTag(createProgressBars(carsJSON.data[i].quality)) +
                                                        surroundWithTableDataTag(createImgContent(carsJSON.data[i].img)));
            }
            carsElement.innerHTML = htmlContent;

        }

    return {
        printCars: printCars
    }
})();
