/*global Mustache */
'use strict';
//cars
   var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

var DRIVY = DRIVY || {};
/*
function AssocierImages(){
   if(car.id=="p306")
     <html:img page="p306.png" border="0" />
  }
*/
(function starter () 
{

  var render = function render (actors) {
    var template = document.querySelector('#template').innerHTML;

    Mustache.parse(template);   // optional, speeds up future uses

    var rendered = Mustache.render(template, {'actors': actors});

    document.querySelector('#actors').innerHTML = rendered;
  };

    var rendercar = function rendercar (cars) {
    var template = document.querySelector('#template').innerHTML;

    Mustache.parse(template);   // optional, speeds up future uses

    var rendered = Mustache.render(template, {'cars': cars});

    document.querySelector('#cars').innerHTML = rendered;
  };

  var button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    var car = DRIVY.getCar();

    var begin = document.querySelector('.begin').value;
    var end = document.querySelector('.end').value;
    var distance = document.querySelector('.distance').value;
    var option = document.querySelector('.option').checked;

    var actors = DRIVY.payActors(car, begin, end, distance, option);
    var cars = DRIVY.getCar();


    render(actors);
    rendercar(cars);
    //associerImages();
    return;
  });
}
()

);
