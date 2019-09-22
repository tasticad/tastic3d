// Blinking intro :
var p = jQuery("li p");
var Ta = jQuery(".Ta");
var A = jQuery(".A");
var S = jQuery(".S");
var Ti = jQuery(".Ti");
var I = jQuery(".I");
var C = jQuery(".C");
var E = jQuery(".E");
var D = jQuery(".D");

p.blinker({
    timeHidden: 25,
    intervalRangeStart: 50,
    intervalRangeStop: 200})

setTimeout(function() {
    jQuery(Ta).data("blinker").pause();
}, 1500);

setTimeout(function() {
    jQuery(Ti).data("blinker").pause();
}, 2000);

setTimeout(function() {
    jQuery(S).data("blinker").pause();
}, 2200);

setTimeout(function() {
	jQuery(A).data("blinker").pause();
}, 1800);

setTimeout(function() {
    jQuery(I).data("blinker").pause();
}, 2100);

setTimeout(function() {
	jQuery(C).data("blinker").pause();
}, 2250);

setTimeout(function() {
    jQuery(E).data("blinker").pause();
}, 2400);

setTimeout(function() {
    jQuery(D).data("blinker").pause();
}, 2000);


