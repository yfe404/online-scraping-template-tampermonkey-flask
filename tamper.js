// ==UserScript==
// @name         scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.example.com/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @run-at document-end
// ==/UserScript==



(function() {
    'use strict';

    // Callback function to execute when data need to be persisted
    const callback = function(data) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://localhost:5000/');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Something went wrong.');
            }
            else if (xhr.status !== 200) {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send(encodeURI(data));
    };


    // Get the data
    // Call callback function to persists the data by sending it to listener 


})();
