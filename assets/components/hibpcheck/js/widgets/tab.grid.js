Hibp.grid.tab = function(config) {
  config = config || {};
  Ext.applyIf(config,{
    id: 'hibp-grid-tab'
    //,url: Hibp.config.connectorUrl // the php connector file which point to the php processors
    //,baseParams: { action: 'mgr/doodle/getList' } // the php processor file to run and populate the grid
    ,fields: ['id','name','description','menu'] // add the fields we'll get from the AJAX request
    ,paging: true // add pagination
    ,remoteSort: true // allow columns to be sortable
    ,anchor: '97%' // grid to stretch the panel width, set it to 97% (3% less to account for padding)
    ,autoExpandColumn: 'name' // column to dynamically be the biggest column on the grid
    ,columns: [{
      header: 'ID'
      ,dataIndex: 'id'
      ,sortable: true
      ,width: 60
    },{
      header: 'Name'
      ,dataIndex: 'name'
      ,sortable: true
      ,width: 100
      //,editor: { xtype: 'textfield' } //editable by attaching an editor
    },{
      header: 'Description'
      ,dataIndex: 'description'
      ,sortable: false
      ,width: 350
      //,editor: { xtype: 'textfield' } //editable by attaching an editor
    }]
  });
  Hibp.grid.tab.superclass.constructor.call(this,config)
};
Ext.extend(Hibp.grid.tab,MODx.grid.LocalGrid); // change to MODx.grid.Grid
Ext.reg('hibp-grid-tab',Hibp.grid.tab); //register this component to its xtype