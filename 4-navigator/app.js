'use strict'
const addressLat = 30;
const addressLong = 30 ;
const positionLat = 10;
const positionLong = 10;

const distanLat = addressLat - positionLat;
const distanLong = addressLong -positionLong;

console.log (Math.sqrt(distanLat * distanLat + distanLong * distanLong))