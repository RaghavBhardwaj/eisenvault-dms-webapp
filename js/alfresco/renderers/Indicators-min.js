define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/Indicators.html","alfresco/core/Core","dojo/_base/array","dojo/_base/lang","dojo/dom-construct","service/constants/Default"],function(g,i,l,j,c,h,b,e,d){return g([i,l,c],{i18nRequirements:[{i18nFile:"./i18n/Indicators.properties"}],templateString:j,propertyToRender:null,postMixInProperties:function a(){this.renderedValue="";if(this.currentItem!=null&&this.propertyToRender!=null&&this.currentItem.node.properties[this.propertyToRender]!=null){this.renderedValue=this.getRenderedProperty(this.currentItem.node.properties[this.propertyToRender])}},postCreate:function f(){if(this.currentItem&&this.currentItem.indicators&&this.currentItem.indicators.length>0){h.forEach(this.currentItem.indicators,b.hitch(this,"addIndicator"))}},addIndicator:function k(m,p){var r=e.create("div",{"class":"status"},this.containerNode);if(m.action){e.create("a",{"class":"indicator-action","data-action":m.action},r)}var n={};if(m.labelParams!=null){for(var q=0;q<m.labelParams.length;q++){var s=m.labelParams[q].replace(/{/g,"").replace(/}/g,"");if(b.exists(s,this.currentItem)){s=b.getObject(s,false,this.currentItem)}n[q.toString()]=s}}var o=this.message(m.label,n);e.create("img",{src:d.URL_RESCONTEXT+"components/documentlibrary/indicators/"+m.icon,title:o,alt:m.id},r)}})});