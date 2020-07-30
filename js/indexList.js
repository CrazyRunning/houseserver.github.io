$(function() {
	var page_index = 0;
	loadData(page_index)
	var estateLists = [];
	var loadingTip = '点击加载更多';
	$("#moreData").click(function() {
		console.log('更多', ++page_index)
		if (loadingTip == '点击加载更多') {
			loadData(++page_index)
		} else {
			alert('已加载全部')
		}
	});

	function loadData(page_index) {
		Bmob.initialize("b37e3a5bbf848b3d", "HELLO6");
		const query = Bmob.Query("Building");
		var page_size = 4;
		query.limit(page_size);
		// 跳过几条
		var estateList = []
		query.skip(page_index * page_size);
		query.find().then(res => {
			console.log(res)
			var template = $('#template');
			var fileList = '';
			estateList = estateLists
			console.log('estateList', estateList)
			// console.log(that.data.page_index, page_size, estateList && estateList.length > 0)
			if (estateList && estateList.length > 0) {
				estateList = estateList.concat(res)
			} else {
				estateList = res
			}
			console.log(res)
			console.log(estateList)
			estateLists = estateList
			if (res.length < page_size) {
				loadingTip = "已加载全部"
			}
			$.each(estateList, function(i, items) {
				fileList += '<tr><td id="id" style="display: none;">' + items.objectId + '</td><td id="meetName">' + items.buildName +
					'</td><td id="expectStartTime">' + items.buildAddress +
					'</td><td id="buildPictures"><img style="width:100px;height:100px" src=' + items.buildPictures[0] +
					' /></td><td class="button" id="addHouseType">' + '添加户型' + '</td><td class="button" id="openMess">' +
					'添加开盘信息' + '</td><td  class="button" id="registraInfor">' + '添加意向登记表' +
					'</td><td  class="button" id="shakeResult">' + '添加摇号结果' + '</td><td  class="button" id="BuildDetailMore">' +
					'添加更多详情' + '</td><td  class="button" id="addRoomPricePic">' +
					'添加一房一价和公示方案' + '</td><td  class="button" id="detailApplicantsNum">' +
					'添加楼盘的报名人数' + '</td><td  class="button" id="projetDescription">' +
					'添加楼盘详情项目简介' + '</td></tr>';
			});
			template.html(fileList);
		});
	}
	$("#datas tbody").on("click", "tr", function() { //详情
		var data = new Array();
		var td = $(this).find("td");
		for (var i = 0; i < td.length; i++) {
			data.push(td.eq(i).text());
		}
		console.log(data[0], '点击')
	});
	$("#datas tbody").on("click", "#addHouseType", function() { //添加户型
		var tdSeq = $(this).parent().find("td").index($(this)); //当前列索引
		var trSeq = $(this).parent().parent().find("tr").index($(this).parent()); //当前行索引
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		console.log(TaskType, '---点击添加户型---', $(this).parent().children().eq(0));
		window.location = "houseType.html?id=" + TaskType;
	});
	$("#datas tbody").on("click", "#openMess", (function() { //开盘信息
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		console.log(TaskType, '---点击开盘信息---');
		window.location = "openMess.html?id=" + TaskType;
	}))
	$("#datas tbody").on("click", "#registraInfor", (function() { //意向登记表
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		console.log(TaskType, '---点击意向登记表---', $(this).parent().children().html());
		window.location = "registraInfor.html?id=" + TaskType;
	}))
	$("#datas tbody").on("click", "#shakeResult", (function() { //意向登记表
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		console.log(TaskType, '---点击意向登记表---', $(this).parent().children().html());
		window.location = "shakeResult.html?id=" + TaskType;
	}))
	$("#datas tbody").on("click", "#BuildDetailMore", (function() { //意向登记表
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		window.location = "BuildDetailMore.html?id=" + TaskType;
	}))
	$("#datas tbody").on("click", "#addRoomPricePic", (function() { //意向登记表
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		window.location = "addRoomPricePic.html?id=" + TaskType;
	}))
	$("#datas tbody").on("click", "#detailApplicantsNum", (function() { //意向登记表
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		window.location = "detailApplicantsNum.html?id=" + TaskType;
	}))
	$("#datas tbody").on("click", "#projetDescription", (function() { //意向登记表
		let TaskType = $(this).parent().children().eq(0).text(); //用children()
		window.location = "projetDescription.html?id=" + TaskType;
	}))

})
