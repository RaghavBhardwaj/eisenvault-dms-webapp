tinymce.PluginManager.add("visualblocks",function(d,c){var f,e,b;if(!window.NodeList){return}function a(){var g=this;g.active(b);d.on("VisualBlocks",function(){g.active(d.dom.hasClass(d.getBody(),"mce-visualblocks"))})}d.addCommand("mceVisualBlocks",function(){var h=d.dom,g;if(!f){f=h.uniqueId();g=h.create("link",{id:f,rel:"stylesheet",href:c+"/css/visualblocks.css"});d.getDoc().getElementsByTagName("head")[0].appendChild(g)}d.on("PreviewFormats AfterPreviewFormats",function(i){if(b){h.toggleClass(d.getBody(),"mce-visualblocks",i.type=="afterpreviewformats")}});h.toggleClass(d.getBody(),"mce-visualblocks");b=d.dom.hasClass(d.getBody(),"mce-visualblocks");if(e){e.active(h.hasClass(d.getBody(),"mce-visualblocks"))}d.fire("VisualBlocks")});d.addButton("visualblocks",{title:"Show blocks",cmd:"mceVisualBlocks",onPostRender:a});d.addMenuItem("visualblocks",{text:"Show blocks",cmd:"mceVisualBlocks",onPostRender:a,selectable:true,context:"view",prependToContext:true});d.on("init",function(){if(d.settings.visualblocks_default_state){d.execCommand("mceVisualBlocks",false,null,{skip_focus:true})}});d.on("remove",function(){d.dom.removeClass(d.getBody(),"mce-visualblocks")})});