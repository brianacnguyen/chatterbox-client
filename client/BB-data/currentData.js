var fetchServer =  'https://api.parse.com/1/classes/chatterbox';
var fetchedData = [{
	createdAt: "2015-10-25T23:08:22.764Z",
	objectId: "rswGVwtEbk",
	roomname: "Main",
	text: "Have a nice day!",
	updatedAt: "2015-10-25T23:08:22.764Z",
	username: "Greetings"
	}];
var updateData = function() {
	$.ajax({
		url: fetchServer,
		type: 'GET',
		contentType: 'application/json',
		data: {order: '-createdAt'},
		success: function(data) {
			fetchedData = data.results;
		},
		error: function (data) {
			console.error('chatterbox: Failed to retrieve message. Error: ', data);
		}
	});
};
setTimeout(updateData,0.00000000001); 
setInterval(updateData, 500); 