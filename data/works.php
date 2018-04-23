<?php
    header("Content-Type:application/json");
    require_once("init.php");
	if(!$conn){
		echo("连接数据库失败?".mysql_error);
	}else{
		//echo("连接数据库成功?");
		$sql="SELECT * FROM liList";
		$output=sql_execute($sql);
        echo json_encode($output);
	}
?>