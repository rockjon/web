Code Source:


<?php
if ($_FILES['file']['size'] > 0){

if($_FILES['file']['size'] <=100000){
if(move_upload_file($_FILES['file']['tmp_name'], "public_html/images/".$_FILES['file']['name'])){
// file upload

?> 
<script type="text/javascript">
parent.document.getElementById("message").innerHTML ="";

parent.document.getElementById("file").value ="";

window.parent.updatepicture("<?php echo 'public_html/images/'.$_FILES['file']["name"]; ?>");
</script>

<?php


} 
else{
//the upload failed
?>
<script type ="text/javascript">
parent.document.getElementById("message").innerHTML = "<font color='#ff0000'>There was a problem. </font>";
</script>
<?php
}


} else{
//the file is too big
?>
<script type ="text/javascript">
parent.document.getElementById("message").innerHTML = "<font color='#ff0000'>There was a problem, the file was too big </font>";
</script>


<script type ="text/javascript">
parent.document.getElementById("message").innerHTML
</script>
<?php
}
}
?>
