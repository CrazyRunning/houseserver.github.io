$(function() {
	Bmob.initialize("b37e3a5bbf848b3d", "HELLO6");

	const fileUploadControl = document.getElementById('profilePhotoFileUpload');
	const huxingPhotoFileUpload = document.getElementById('huxingPhotoFileUpload');
	huxingPhotoFileUpload.onchange = () => { //户型图片
		console.log(huxingPhotoFileUpload.files, 'huxingPhotoFileUpload')
		const pic = huxingPhotoFileUpload.files
		let file
		for (let item of pic) {
			file = Bmob.File(item.name, item);
			// var file = new Bmob.File(name, item[0]);
			console.log(file, 'file')
		}
		file.save().then(res => {
			console.log(res.length);
			console.log(res, '图片', huxingImgList);
			var tempFilePaths = huxingImgList
			if (tempFilePaths && tempFilePaths.length > 0) {
				tempFilePaths = huxingImgList.concat(res)
			} else {
				tempFilePaths = res
			}
			huxingImgList = tempFilePaths
			console.log(huxingImgList, huxingImgList.length)
			var len = huxingImgList;
			var tem = "";
			for (i = 0; i <= res.length; i++) { //只展示
				if (res[i] && res[i].url) {
					tem += "<div class='de" + parseInt(i + 1) +
						"' style='width:100px;display:inline'><img style='width:100px' src='" + res[i].url + "'></div>";
				}

			}
			for (var i = 0; i < huxingImgList.length; i++) { //提交数据
				if (huxingImgList[i] && huxingImgList[i].url) {
					console.log(huxingImgList[i].url, '========')
					huxingImgListUrl.push(huxingImgList[i].url)
				}
			}
			$("body").append(tem);
			//3、回显

		}).catch(error => {
			console.log(error)
		})
	}
	fileUploadControl.onchange = () => { //楼盘图片
		console.log(fileUploadControl.files, 'fileUploadControl')
		const pic = fileUploadControl.files
		let file
		for (let item of pic) {
			file = Bmob.File(item.name, item);
			// var file = new Bmob.File(name, item[0]);
			console.log(file, 'file')
		}
		file.save().then(res => {

			console.log(res.length);
			console.log(res, '图片', imgList);
			var tempFilePaths = imgList
			if (tempFilePaths && tempFilePaths.length > 0) {
				tempFilePaths = imgList.concat(res)
			} else {
				tempFilePaths = res
			}
			imgList = tempFilePaths
			console.log(imgList, imgList.length)
			var len = imgList;
			var tem = "";
			for (i = 0; i <= res.length; i++) { //只展示
				if (res[i] && res[i].url) {
					tem += "<div class='de" + parseInt(i + 1) +
						"' style='width:100px;display:inline'><img style='width:100px' src='" + res[i].url + "'></div>";
				}

			}
			for (var i = 0; i < imgList.length; i++) { //提交数据
				if (imgList[i] && imgList[i].url) {
					console.log(imgList[i].url, '========')
					imgListUrl.push(imgList[i].url)
				}
			}
			$("body").append(tem);
			//3、回显

		}).catch(error => {
			console.log(error)
		})
	}
})
var imgList = [];
var imgListUrl = [];
var huxingImgList = [];
var huxingImgListUrl = [];

function getMyDate(str) {
	var oDate = new Date(str),
		oYear = oDate.getFullYear(),
		oMonth = oDate.getMonth() + 1,
		oDay = oDate.getDate(),
		oHour = oDate.getHours(),
		oMin = oDate.getMinutes(),
		oSen = oDate.getSeconds(),
		oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSen); //最后拼接时间  
	return oTime;
};
//补0操作
function getzf(num) {
	if (parseInt(num) < 10) {
		num = '0' + num;
	}
	return num;
}
$("#submitBtn").click(function() { //提交数据
	// console.log($("#articleForm").serialize())
	console.log(imgListUrl, 'imgListimgListimgListimgList')
	console.log(huxingImgListUrl)
	var buildNameValue = $("#buildName").val();
	var buildPriceValue = $("#buildPrice").val();
	var houseTotalPriceValue = $("#houseTotalPrice").val();
	var otherNameValue = $("#otherName").val();
	var propertyTypeValue = $("#propertyType").val();
	if ($("#ownerYears").val()) {
		var ownerYearsValue = Number($("#ownerYears").val());
	} else {
		var ownerYearsValue = 0;
	}
	if ($("#parkingNumber").val()) {
		var parkingNumberValue = $("#parkingNumber").val();
	} else {
		var parkingNumberValue = '';
	}
	if ($("#houseTotalNumb").val()) {
		var houseTotalNumbValue = $("#houseTotalNumb").val();
	} else {
		var houseTotalNumbValue = '';
	}
	console.log($("#specialLabel").val(), '$("#specialLabel").val()')
	if ($("#specialLabel").val()) {
		var specialLabelValue = Number($("#specialLabel").val());
	} else {
		var specialLabelValue = 0;
	}
	var deliverDateValue = $("#deliverDate").val();
	var DeveloperValue = $("#Developer").val();
	var houseAreaRangeValue = $("#houseAreaRange").val();
	var greenRateValue = $("#greenRate").val();
	var plotRateValue = $("#plotRate").val();
	var buildAreaValue = $("#buildArea").val();
	var buildTotalAreaValue = $("#buildTotalArea").val();
	var buildAddressValue = $("#buildAddress").val();
	var salePhoneValue = $("#salePhone").val();
	var adminRegionValue = $("#adminRegion").val();
	var adminRegionCodeValue = $("#adminRegionCode").val();
	var buildPicturesValue = $("#buildPictures").val();
	var buildLocationValue = $("#buildLocation").val();
	var houseTypePicturesValue = $("#houseTypePictures").val();
	var isLikedByValue = $("#isLikedBy").val();
	var consultantersValue = $("#consultanters").val();
	var statusValue = $("#status").val();


	var preSaleDateValue = $("#preSaleDate").val();
	var guessSaleDateValue = $("#guessSaleDate").val();
	var shakingDateValue = $("#shakingDate").val();
	var registerDateValue = $("#registerDate").val();
	var registerEndDateValue = $("#registerEndDate").val();
	var houseCount1Value = $("#houseCount1").val();
	var announceDateValue = $("#announceDate").val();
	var houseChsDtValue = $("#houseChsDt").val();
	var supplyInforDateValue = $("#supplyInforDate").val();
	var deliverDateValue = $("#deliverDate").val();
	var houseAreaMaxValue = $("#houseAreaMax").val();
	var houseAreaMinValue = $("#houseAreaMin").val();
	var houseTypeValue = $("#houseType").val();
	var commitCountValue = $("#commitCount").val();
	var hasVisitNumberValue = $("#hasVisitNumber").val();
	var labelsValue = $("#labels").val();

	const queryArray = new Array();
	// 构造含有50个对象的数组
	console.log(list, 'list')
	// for (var i = 0; i < 2; i++) {
	var queryObj = Bmob.Query('Building');
	if (buildNameValue) {
		queryObj.set("buildName", buildNameValue);
	}
	if (buildPriceValue) {
		queryObj.set("buildPrice", Number(buildPriceValue));
	}
	if (houseTotalPriceValue) {
		queryObj.set("houseTotalPrice", Number(houseTotalPriceValue));
	}
	if (otherNameValue) {
		queryObj.set("otherName", otherNameValue);
	}
	if (propertyTypeValue) {
		queryObj.set("propertyType", propertyTypeValue);
	}
	if (ownerYearsValue) {
		queryObj.set("ownerYears", ownerYearsValue);
	}
	if (deliverDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(deliverDateValue)
		}
		console.log(data,typeof(data),'deliverDate')
		queryObj.set("deliverDate", data);
	}
	if (DeveloperValue) {
		queryObj.set("Developer", DeveloperValue);
	}
	if (houseAreaRangeValue) {
		queryObj.set("houseAreaRange", houseAreaRangeValue);
	}
	if (greenRateValue) {
		queryObj.set("greenRate", greenRateValue);
	}
	if (plotRateValue) {
		queryObj.set("plotRate", plotRateValue);
	}
	if (parkingNumberValue) {
		queryObj.set("parkingNumber", parkingNumberValue);
	}
	if (houseTotalNumbValue) {
		queryObj.set("houseTotalNumb", houseTotalNumbValue);
	}
	if (buildAreaValue) {
		queryObj.set("buildArea", buildAreaValue);
	}
	if (buildTotalAreaValue) {
		queryObj.set("buildTotalArea", buildTotalAreaValue);
	}
	if (buildAddressValue) {
		queryObj.set("buildAddress", buildAddressValue);
	}
	if (salePhoneValue) {
		queryObj.set("salePhone", salePhoneValue);
	}
	if (adminRegionValue) {
		queryObj.set("adminRegion", adminRegionValue);
	}
	if (adminRegionCodeValue) {
		queryObj.set("adminRegionCode", adminRegionCodeValue);
	}
	// console.log(imgListUrl != [], 'buildPicturesList !=[]', imgListUrl.length > 0)
	if (imgListUrl.length > 0) {
		queryObj.set("buildPictures", imgListUrl);
	}
	if (statusValue) {
		queryObj.set("status", statusValue);
	}
	// if(!specialLabelValue){
	queryObj.set("specialLabel", specialLabelValue);
	// }
	if (buildLocationValue) {
		if (buildLocationValue.indexOf('，') >= 0) {
			queryObj.set("buildLocation", buildLocationValue.split('，').map(Number));
		} else { //不存在中文
			queryObj.set("buildLocation", buildLocationValue.split(',').map(Number));
		}
	}
	if (huxingImgListUrl.length > 0) {
		queryObj.set("houseTypePictures", huxingImgListUrl);
	}
	if (isLikedByValue) {
		queryObj.set("isLikedBy", isLikedByValue);
	}
	if (consultantersValue) {
		queryObj.set("consultanters", consultantersValue);
	}


	if (preSaleDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(preSaleDateValue)
		}
		queryObj.set("preSaleDate", data);
	}
	if (guessSaleDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(guessSaleDateValue)
		}
		queryObj.set("guessSaleDate", data);
	}
	
	if (shakingDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(shakingDateValue)
		}
		queryObj.set("shakingDate", data);
	}
	if (registerDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(registerDateValue)
		}
		console.log(data, typeof(data),'registerDate')
		queryObj.set("registerDate", data);
	}
	if (registerEndDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(registerEndDateValue)
		}
		queryObj.set("registerEndDate", data);
	}
	if (houseCount1Value) {
		queryObj.set("houseCount1", Number(houseCount1Value));
	}
	if (announceDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(announceDateValue)
		}
		queryObj.set("announceDate", data);
	}
	if (houseChsDtValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(houseChsDtValue)
		}
		queryObj.set("houseChsDt", data);
	}
	if (supplyInforDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(supplyInforDateValue)
		}
		queryObj.set("supplyInforDate", data);
	}
	if (deliverDateValue) {
		let data = {
			"__type": "Date",
			"iso": getMyDate(deliverDateValue)
		}
		queryObj.set("deliverDate", data);
	}
	if (houseAreaMaxValue) {
		queryObj.set("houseAreaMax", Number(houseAreaMaxValue));
	}else{
		queryObj.set("houseAreaMax",0);
	}
	if (houseAreaMinValue) {
		queryObj.set("houseAreaMin", Number(houseAreaMinValue));
	}else{
		queryObj.set("houseAreaMin",0);
	}
	if (houseTypeValue) {
		queryObj.set("houseType", houseTypeValue);
	}
	if (commitCountValue) {
		queryObj.set("commitCount", Number(commitCountValue));
	}else{
		queryObj.set("commitCount", 0);
	}
	if (hasVisitNumberValue) {
		queryObj.set("hasVisitNumber", Number(hasVisitNumberValue));
	}else{
		queryObj.set("hasVisitNumber", 0);
	}
	if (labelsValue) {
		if (labelsValue.indexOf('，') >= 0) {
			queryObj.set("labels", labelsValue.split('，'));
		} else { //不存在中文
			queryObj.set("labels", labelsValue.split(','));
		}
	}
	queryArray.push(queryObj);
	// 传入刚刚构造的数组
	console.log(preSaleDateValue, shakingDateValue, '事件', houseAreaMaxValue)
	Bmob.Query('Building').saveAll(queryArray).then(result => {
		console.log(result[0], result);
		if(result[0].success){
			alert('添加成功')
		}else{
			alert('添加失败')
		}
		location.reload()
	}).catch(err => {
		console.log(err);
	});

})



var buildPicturesList = [];
$("#buildPictures").click(function() { //楼盘图片
	/*
		1、先获取input标签
		2、给input标签绑定change事件
		3、把图片回显
		 */
	//      1、先回去input标签
	var $input = $("#buildPictures");
	console.log($input)
	//      2、给input标签绑定change事件
	$input.on("change", function() {
		console.log(this)
		//补充说明：因为我们给input标签设置multiple属性，因此一次可以上传多个文件
		//获取选择图片的个数
		var files = this.files;
		var length = files.length;
		//3、回显
		$.each(files, function(key, value) {
			//每次都只会遍历一个图片数据
			var div = document.createElement("div"),
				img = document.createElement("img");
			// div.className = "pic";
			var fr = new FileReader();
			fr.onload = function() {
				img.src = this.result;
				// div.appendChild(img);
				document.body.appendChild(div);
				$(".buildPictures").append('<img src="' + img.src + '" class="suggestImg">')
				// document.body.appendChild(pic);
				buildPicturesList.push(img.src)
				$('.suggestImg').show()
				console.log(img.src, 'value')
			}


			fr.readAsDataURL(value);

		})
	})
	//4、我们把当前input标签的id属性remove
	$input.removeAttr("id");
	//我们做个标记，再class中再添加一个类名就叫test
	// var newInput = '<input class="uploadImg test" type="file" name="file" multiple id="file">';
	// $(this).append($(newInput));
})
var list = []
$("#houseTypePictures").click(function() { //户型图
	/*
	1、先获取input标签
	2、给input标签绑定change事件
	3、把图片回显
	 */
	//      1、先回去input标签
	var $input = $("#houseTypePictures");
	console.log($input)
	//      2、给input标签绑定change事件
	$input.on("change", function() {
		console.log(this)
		//补充说明：因为我们给input标签设置multiple属性，因此一次可以上传多个文件
		//获取选择图片的个数
		var files = this.files;
		var length = files.length;
		console.log("选择了" + length + "张图片");
		//3、回显
		$.each(files, function(key, value) {
			//每次都只会遍历一个图片数据
			var div = document.createElement("div"),
				img = document.createElement("img");
			// div.className = "pic";
			var fr = new FileReader();
			fr.onload = function() {
				img.src = this.result;
				// div.appendChild(img);
				document.body.appendChild(div);
				$(".pic").append('<img src="' + img.src + '" class="suggestImg">')
				// document.body.appendChild(pic);
				list.push(img.src)
				$('.suggestImg').show()
				console.log(img.src, 'value')
			}


			fr.readAsDataURL(value);

		})
	})
	//4、我们把当前input标签的id属性remove
	$input.removeAttr("id");
	//我们做个标记，再class中再添加一个类名就叫test
	// var newInput = '<input class="uploadImg test" type="file" name="file" multiple id="file">';
	// $(this).append($(newInput));
})


function reads(fil) {
	var reader = new FileReader();
	reader.readAsDataURL(fil);
	reader.onload = function() {
		console.log(reader.result, 'reader.result')
		$(".suggestImg").attr("src", reader.result);
		// document.getElementById("uploadBox").innerHTML += "<div class='divImg' id='uploadImg'><img src='" + reader.result +
		// 	"' class='imgBiMG'></div>";
	}
}
