define(["dojo/_base/declare","alfresco/menus/AlfMenuBarPopup","dojo/dom-class","dojo/_base/lang"],function(c,a,e,f){return c([a],{selectionTopic:null,_currentIconClass:null,updateIconOnSelection:false,postCreate:function d(){if(this.selectionTopic){this.alfSubscribe(this.selectionTopic,f.hitch(this,"handleSelection"))}else{this.alfLog("warn","No selection topic provided - AlfMenuBarSelect will not reflect selection!")}this.inherited(arguments);this._currentIconClass=this.iconClass},handleSelection:function b(g){this.alfLog("log","Selection detected",g);if(g){if(g.label){this.set("label",this.message(g.label))}else{if(g.value!=null){this.set("label",g.value.toString())}}if(this.iconNode&&this.updateIconOnSelection&&g.iconClass){e.remove(this.iconNode,this._currentIconClass);e.add(this.iconNode,g.iconClass)}}e.remove(this.domNode,"dijitMenuItemSelected")}})});