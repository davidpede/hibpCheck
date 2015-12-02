<?php
$modx = new modX();
$modx->initialize('web');
 
$c = $modx->newQuery('modUser');
$c->leftJoin('modUserProfile','Profile');
 
// add column names that u want to show
$c->select(array(
    'modUser.*',
    'Profile.fullname',
    'Profile.email',
    'Profile.blocked',
));
 
$users = $modx->getCollection("modUser",$c);
 
foreach($users as $user){
    $userArray = $user->toArray();
    $output = $userArray['username']."==".$userArray['fullname'];
}

return $output;
?>