angular.module("app.main.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/page-not-found/page-not-found.html","<!DOCTYPE html><html><body><div class=\"row\"><div class=\"col-md-12\"><h2>Page Not Found!</h2><p>The page you trying to reach could not be found.</p></div></div></body></html>");
$templateCache.put("main/welcome/welcome.html","<!DOCTYPE html><html><body><div class=\"row\"><div class=\"col-md-12\"><h2>Welcome to OASP4JS application seed!</h2><p>Go to <a href=\"#/component-1/dialog-a\">dialog A</a> of the component 1.</p><p>Go to <a href=\"#/component-2/dialog-b\">dialog B</a> of the component 2.</p></div></div></body></html>");}]);