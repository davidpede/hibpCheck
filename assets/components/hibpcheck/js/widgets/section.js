Ext.onReady(function() {
  MODx.load({ xtype: 'hibp-page-home'}); //component xtype to be displayed
});
Hibp.page.home = function(config) {
  config = config || {};
  Ext.applyIf(config,{
    components: [{
      xtype: 'hibp-panel-tabs' //content xtype this component displays
      ,renderTo: 'section-div' //where this component is rendered
    }]
  });
  Hibp.page.home.superclass.constructor.call(this,config);
};
Ext.extend(Hibp.page.home,MODx.Component);
Ext.reg('hibp-page-home',Hibp.page.home); //register this component to its xtype