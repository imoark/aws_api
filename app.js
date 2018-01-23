'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let input = event.message
    let miles = input * 0.62137119
    let info = input + " kilometer(s) is " + miles + " mile(s)"
    callback(null, info);
    //callback('Something went wrong');
};
