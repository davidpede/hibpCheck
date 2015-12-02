var Hibp = function(config) {
    config = config || {};
    Hibp.superclass.constructor.call(this,config);
};
Ext.extend(Hibp,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {}
});
Ext.reg('hibp',Hibp);
Hibp = new Hibp();