function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("https://use.fontawesome.com/releases/v5.0.7/js/all.js", "js") //dynamically load and add this .js file 
loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css", "css") ////dynamically load and add this .css file
loadjscssfile("articles.css", "css")
loadjscssfile("../all.css", "css")
loadjscssfile("articles.js", "js")


