define("tinymce/util/JSONP",["tinymce/dom/DOMUtils"],function(a){return{callbacks:{},count:0,send:function(c){var b=this,e=a.DOM,d=c.count!==undefined?c.count:b.count;var f="tinymce_jsonp_"+d;b.callbacks[d]=function(g){e.remove(f);delete b.callbacks[d];c.callback(g)};e.add(e.doc.body,"script",{id:f,src:c.url,type:"text/javascript"});b.count++}}});