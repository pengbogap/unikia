<?php
    header("Content-Type:application/json");
    require_once("init.php");
	if(!$conn){
		echo("�������ݿ�ʧ��?".mysql_error);
	}else{
		//echo("�������ݿ�ɹ�?");
		$sql="SELECT * FROM liList";
		$output=sql_execute($sql);
        echo json_encode($output);
	}
?>