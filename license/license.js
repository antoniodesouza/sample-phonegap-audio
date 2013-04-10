/*
* Copyright (c) 2012, Intel Corporation. All rights reserved.
* File revision: 5 Decmber 2012
* Please see http://software.intel.com/html5/license/samples 
* and the included README.md file for license terms and conditions.
*
* This program is licensed under the terms and conditions of the 
* Apache License, version 2.0.  The full text of the Apache License is at
* http://www.apache.org/licenses/LICENSE-2.0
*
*/
var lictimer;
function onclickLicBack()
{
    var lpage = document.getElementById("licensepage");
    var hpage = document.getElementById("container");
    hpage.style.display = "block";
    lpage.style.display = "none";
    if (lictimer) {
        clearInterval(lictimer);
        lictimer = null;
    }
}
function onclickLicenseBtn() {
    var lpage = document.getElementById("licensepage");
    var hpage = document.getElementById("container");

    /* display the license page, hide titleView page*/
    hpage.style.display = "none";
    lpage.style.display = "block";
}
//determines the path to the media files on the device
function getPhoneGapPath() {

    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    return path;

};
function loadLicenseTxt() {
    }

