var script = document.createElement("script");
script.type = "application/javascript";
script.async = false;
script.src = safari.extension.baseURI + "inject.js";
document.documentElement.appendChild(script);
