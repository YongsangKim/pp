	
var currentPath = decodeURIComponent(window.location.pathname).split("/");

// highlight
$('.hljs').each(function (i, block) { 

    var $this = $(block);
    var lang = $this.attr('class').split(/\s+/);
    var result = hljs.highlight(lang[1], convertHighlight($this[0]).trim(), true);
    
    $this.html(result.value)
});

function convertHighlight (elem) {
    var text      = elem.innerHTML;
    var leadingws = text.match(/^\n?(\s*)/)[1].length;
    var regex     = new RegExp('\\n+\\s{' + leadingws + '}','g');
    var md        = text.replace(regex,'\n');
    
    var content = md.replace(/disabled=""|readonly=""/gi, function(x){
       return x.replace('=""', ''); 
    });

    return content;
}