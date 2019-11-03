$(function() {  // This fires on dom-load.
    $(".tabbed-panel").tabs();
    $(".accordion-panel").accordion({ collapsible: true, active: false });
});

var Html5Utils = {};

Html5Utils.browserDescription = function() {
  return(BrowserDetect.browser + " " +
         BrowserDetect.version + " on " +
         BrowserDetect.OS);
};

Html5Utils.doesOrDoesNot = function(flag) {
  if (flag) {
    return("<i>does</i>");
  } else {
    return("does <i>not</i>");
  }
};

Html5Utils.browserSupport = function(flag) {
  var browserSupportSentence = 
    "Your browser (" + Html5Utils.browserDescription() + ") " +
    Html5Utils.doesOrDoesNot(flag) + " support this input element.";
  return(browserSupportSentence);
};

Html5Utils.browserSupportLong = function(flag) {
  var browserSupportSentence = 
    "Your browser " + Html5Utils.doesOrDoesNot(flag) + " support this input element." +
    "<ul>" +
    "<li><b>Short browser version: </b>" + Html5Utils.browserDescription() + "</li>" +
    "<li><b>Full user agent: </b>" + navigator.userAgent + "</li>" +
    "</ul>";
  return(browserSupportSentence);
};