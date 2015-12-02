<?php
$modx = new modX();
$modx->initialize('mgr');

$list = array('apple', 'orange', 'banana', 'strawberry');
$count = 4;

// The format of the output is not well documented, but it requires a node for "total" and "rows"
print '{"total":"'.$count.'","results":'.$modx->toJSON($list).',"success":true,"msg":"Got our rows..."}';
 
//error_log(print_r($list,true)); // <-- another debugging point
 
@session_write_close();
exit();
?>