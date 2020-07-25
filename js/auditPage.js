$(function(){
	Bmob.initialize("b37e3a5bbf848b3d", "HELLO6");
	const query = Bmob.Query("PreConsultant");
	query.find().then(res => {
	    console.log(res)
		var template = $('#template');
		var fileList = '';
		$.each(res, function(i, items) {
			if(items.underBuildName){
				items.underBuildName=items.underBuildName
			}else{
				items.underBuildName=''
			}
			fileList += '<tr><td id="id" style="display: none;">' + items.objectId + '</td><td id="meetName">' + items.name +
				'</td><td id="expectName">' + items.underBuildName +
				'</td><td id="expectStartTime">' + items.createdAt +
				'</td><td class="activeText">' + '查看更多详情' + '</td></tr>';
		});
		template.html(fileList);
	});
	$("#datas tbody").on("click", "tr", function() {//详情
		var data = new Array();
		var td = $(this).find("td");
		for (var i = 0; i < td.length; i++) {
			data.push(td.eq(i).text());
		}
		console.log(data[0])
		window.location = "auditPageDetail.html?id=" + data[0];
	});
})