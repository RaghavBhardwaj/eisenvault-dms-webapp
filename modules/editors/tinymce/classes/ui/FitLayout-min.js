define("tinymce/ui/FitLayout",["tinymce/ui/AbsoluteLayout"],function(a){return a.extend({recalc:function(c){var b=c.layoutRect(),d=c.paddingBox();c.items().filter(":visible").each(function(e){e.layoutRect({x:d.left,y:d.top,w:b.innerW-d.right-d.left,h:b.innerH-d.top-d.bottom});if(e.recalc){e.recalc()}})}})});