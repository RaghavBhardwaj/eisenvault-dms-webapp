define(["dojo/_base/declare","alfresco/core/Core","alfresco/core/I18nUtils","alfresco/charts/ccc/Chart"],function(b,d,f,a){var c="alfresco.reports.PieChart";return b([a],{pvcChartType:"PieChart",explodedSliceRadius:0,valuesMask:f.msg(c,"label","{category}","{value}","{value.percent}"),i18nRequirements:[{i18nFile:"./i18n/PieChart.properties"}],createChartConfig:function e(){var g=this.inherited(arguments);if(this.valuesMask){g.valuesMask=this.valuesMask}if(this.explodedSliceRadius){g.explodedSliceRadius=this.explodedSliceRadius}return g}})});