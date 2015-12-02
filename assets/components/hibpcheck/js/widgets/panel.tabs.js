Hibp.panel.tabs = function(config) {
  config = config || {};
  Ext.applyIf(config,{
    border: false
    ,baseCls: 'modx-formpanel'
    ,cls: 'container'
    ,items: [{
      html: '<h2>Panel Heading</h2>' // panel heading
      ,border: false
      ,cls: 'modx-page-header'
    },{
      xtype: 'modx-tabs' // add tabs to panel
      ,items: [{
        title: 'Tab 01' // tab 01
        ,items: [{
          html: 'Tab 01 Description'
          ,cls: 'panel-desc'
        },{
          xtype: 'hibp-grid-tab'
          ,cls: 'main-wrapper'
          ,preventRender: true
        }]
      },{
        title: 'Tab 02' // tab 02
        ,items: [{
          html: 'Tab 02 Description'
          ,cls: 'panel-desc'
        },{
          html: 'Tab 02 Content'
          ,cls: 'main-wrapper'
        }]
      }]
    }]
  });
  Hibp.panel.tabs.superclass.constructor.call(this,config);
};
Ext.extend(Hibp.panel.tabs,MODx.Panel); //register the type of component
Ext.reg('hibp-panel-tabs',Hibp.panel.tabs); //register this component to its xtype