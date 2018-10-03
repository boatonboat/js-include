var modulelist = {
    "jquery.js" : "http://code.jquery.com/jquery-latest.min.js",
    "vue.js" : "https://unpkg.com/vue",
    "bootstrap.css":"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "underscore.js":"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js",
    "axios.js":"https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js",
    "moment.js":"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
    "fontawsome.css":"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "p5.js":"https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js",
    "three.js":"https://cdnjs.cloudflare.com/ajax/libs/three.js/97/three.min.js",
    "chart.js":"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js",
    "pixi.js":"https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.2/pixi.min.js",
    "socket.io.js":"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js",
    "d3.js":"https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.js"
    
}
function include(url) {
    var head = document.getElementsByTagName('head')[0];
    if(url.match("css")){
        if(modulelist[url]){
            url = modulelist[url];
        }
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        head.appendChild(link);
    }else{
        if(modulelist[url]){
            url = modulelist[url];
        }
        var script = document.createElement("script"); 
        script.src = url; 
        head.appendChild(script); 
    }
}
