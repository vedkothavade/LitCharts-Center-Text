// ==UserScript==
// @name        Litcharts Center Text
// @namespace   Violentmonkey Scripts
// @match       https://www.litcharts.com/
// @include     *://*litcharts.com/*
// @grant       none
// @version     1.0
// @author      -
// @description Use with uBlock Origin to Block useless elements
// ==/UserScript==

var textToCenter = $(".col-sm-9");
textToCenter.removeClass ("col-sm-9");
