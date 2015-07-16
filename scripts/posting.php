<?php 
	require_once("db_connect.php");
	$homeresults=array();
	$homequery=mysql_query("SELECT *
								FROM post_journey JOIN user_details 
								ON ( post_journey.user_id = user_details.user_id )
								ORDER BY post_time DESC
								LIMIT 0 , 5",$con);
								
	while($row = mysql_fetch_array($homequery,MYSQL_ASSOC)){ 
		$row_array['j_id'] = $row['j_id'];
		$row_array['displayname'] = $row['displayname'];
		$row_array['imagename'] = $row['imagename'];
		$row_array['startingpoint'] = $row['startingpoint'];
		$row_array['destination'] = $row['destination'];
		$row_array['leaving_time'] = $row['leaving_time'];
		$row_array['no_of_seats'] = $row['no_of_seats'];
		$row_array['post_time'] = $row['post_time'];
		$row_array['per_head'] = $row['per_head_cost'];
		$row_array['vehicle'] = $row['vehicle'];
		$row_array['women'] = $row['preffered'];
		$row_array['smoking'] = $row['smoking'];
		array_push($homeresults,$row_array);
    }
		echo json_encode($homeresults);
		
	mysql_close($con);
?>

