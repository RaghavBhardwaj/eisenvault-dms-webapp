tinymce.PluginManager.add("nonbreaking",function(c){var b=c.getParam("nonbreaking_force_tab");c.addCommand("mceNonBreaking",function(){c.insertContent((c.plugins.visualchars&&c.plugins.visualchars.state)?'<span class="mce-nbsp">&nbsp;</span>':"&nbsp;");c.dom.setAttrib(c.dom.select("span.mce-nbsp"),"data-mce-bogus","1")});c.addButton("nonbreaking",{title:"Insert nonbreaking space",cmd:"mceNonBreaking"});c.addMenuItem("nonbreaking",{text:"Nonbreaking space",cmd:"mceNonBreaking",context:"insert"});if(b){var a=+b>1?+b:3;c.on("keydown",function(f){if(f.keyCode==9){if(f.shiftKey){return}f.preventDefault();for(var d=0;d<a;d++){c.execCommand("mceNonBreaking")}}})}});