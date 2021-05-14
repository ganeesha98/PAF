function getRow() {
	var table = document.getElementById('table');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("item_id").value = this.cells[1].textContent;
			document.getElementById("name").value = this.cells[2].textContent;
			document.getElementById("category").value = this.cells[3].textContent;
			document.getElementById("description").value = this.cells[4].textContent;
			document.getElementById("price").value = this.cells[5].textContent;
			document.getElementById("quantity").value = this.cells[6].textContent;
		};
	}
}

function getRowSearch() {
	var table = document.getElementById('idTable');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("item_id").value = this.cells[1].textContent;
			document.getElementById("name").value = this.cells[2].textContent;
			document.getElementById("category").value = this.cells[3].textContent;
			document.getElementById("description").value = this.cells[4].textContent;
			document.getElementById("price").value = this.cells[5].textContent;
			document.getElementById("quantity").value = this.cells[6].textContent;
		};
	}
}

function getID() {
	var table = document.getElementById('table');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("item_id").value = this.cells[1].textContent;
		};
	}
}

function getIDserch() {
	var table = document.getElementById('idTable');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("item_id").value = this.cells[1].textContent;
		};
	}
}

function resetForm() {
	document.getElementById("item_id").value = "0";
	document.getElementById("name").value = "";
	document.getElementById("category").value = "";
	document.getElementById("description").value = "";
	document.getElementById("price").value = "";
	document.getElementById("quantity").value = "";
}

function save() {
	var item_id = $('#item_id').val();
	item_id = parseInt(item_id);
	if (item_id === 0) {
		if(ValidInput()){
			$.ajax({
				url : 'http://localhost:8080/item/webresources/ItemResources/Item',
				method : 'POST',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					$("#idTable").find("tr:gt(0)").remove();
					$("#table").find("tr:gt(0)").remove();
					load();
					resetForm();
					alert(data);
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}else{
			alert("Fill form");
		}
	}else{
		if(ValidInput()){
			$.ajax({
				url : 'http://localhost:8080/item/webresources/ItemResources/Item',
				method : 'PUT',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					$("#idTable").find("tr:gt(0)").remove();
					$("#table").find("tr:gt(0)").remove();
					load();
					resetForm();
					alert(data);
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}else{
			alert("Fill form");
		}
	}
}

function delet(){
	getID();
	swal({
		title: "Are you sure?",
		text: "Do you realy want to Delete this?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					url : 'http://localhost:8080/item/webresources/ItemResources/Item/' + $('#item_id').val(),
					method: 'DELETE',
					success: function (resultText) {
						$("#table").find("tr:gt(0)").remove();
						$("#idTable").find("tr:gt(0)").remove();
						load();
						swal("Deleted!", {
							icon: "success",
							});
						},
						error: function (jqXHR, exception) {
							swal("fail");
						}
					});
				} else {
					swal("Safe!");
				}
			});
}

function deletSearch(){
	getIDserch();
	swal({
		title: "Are you sure?",
		text: "Do you realy want to Delete this?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					url : 'http://localhost:8080/item/webresources/ItemResources/Item/' + $('#item_id').val(),
					method: 'DELETE',
					success: function (resultText) {
						$("#table").find("tr:gt(0)").remove();
						$("#idTable").find("tr:gt(0)").remove();
						load();
						swal("Deleted!", {
							icon: "success",
							});
						},
						error: function (jqXHR, exception) {
							swal("fail");
						}
					});
				} else {
					swal("Safe!");
				}
			});
}

function load() {
	$.ajax({
		url : 'http://localhost:8080/item/webresources/ItemResources/Items',
		method : 'GET',
		headers : {
			Accept : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(data, textStatus, errorThrown) {
			var items = [];
			$.each(data.item,function(key, val) {
				var index = key + 1;
				items.push("<tr>");
				items.push("<td>" + index + "</td>");
				items.push("<td>" + val.item_id + "</td>");
				items.push("<td>" + val.name + "</td>");
				items.push("<td>" + val.category + "</td>");
				items.push("<td>" + val.description + "</td>");
				items.push("<td>" + val.price + "</td>");
				items.push("<td>" + val.quantity + "</td>");
				items.push("<td><button onclick='getRow()' type='button' class='btn btn-info btn-fill'>Edit</button></td>");
				items.push("<td><button onclick='delet()' type='button' class='btn btn-danger btn-fill'>Delete</button></td>");
				items.push("</tr>");
			});
		$("<tbody/>", {
			html : items.join("")
		}).appendTo("#table");
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Ajax request fail");
		},
		timeout : 120000,
	});
}

function getJSON() {
	return JSON.stringify({
		"item_id" : $('#item_id').val(),
		"name" : $('#name').val(),
		"category" : $('#category').val(),
		"description" : $('#description').val(),
		"price" : $('#price').val(),
		"quantity" : $('#quantity').val(),
	});
}

function ValidInput(){
	var item_id = $('#item_id').val();
	var name = $('#name').val();
	var category = $('#category').val();
	var description = $('#description').val();
	var price = $('#price').val();
	var quantity = $('#quantity').val();
	var item_id = $('#item_id').val();
	var name = $('#name').val();
	var category = $('#category').val();
	var description = $('#description').val();
	var price = $('#price').val();
	var quantity = $('#quantity').val();
	if(item_id === "" || name === "" || category === "" || description === "" || price === "" || quantity === ""){
		return false;
	}else{
		return true;
	}
	return true;
}

function search(){
$("#idTable").find("tr:gt(0)").remove();
	var searchID = $('#searchID').val();
	if(searchID === ""){
		alert("Please Enter ID")
	}else{
	$.ajax({
		url : 'http://localhost:8080/item/webresources/ItemResources/Item/' + searchID,
		method : 'GET',
		headers : {
			Accept : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(data, textStatus, errorThrown) {
			var items = [];
			$.each(data,function(key, val) {
				var index = key + 1;
				items.push("<tr>");
				items.push("<td>" + index + "</td>");
				items.push("<td>" + val.item_id + "</td>");
				items.push("<td>" + val.name + "</td>");
				items.push("<td>" + val.category + "</td>");
				items.push("<td>" + val.description + "</td>");
				items.push("<td>" + val.price + "</td>");
				items.push("<td>" + val.quantity + "</td>");
				items.push("<td><button onclick='getRow()' type='button' class='btn btn-info btn-fill'>Edit</button></td>");
				items.push("<td><button onclick='delet()' type='button' class='btn btn-danger btn-fill'>Delete</button></td>");
				items.push("</tr>");
			});
		$("<tbody/>", {
			html : items.join("")
		}).appendTo("#idTable");
	},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Ajax request fail");
		},
		timeout : 120000,
		});
	}
}