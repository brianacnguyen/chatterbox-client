var InsertMessageFormSubmitModel = Backbone.Model.extend({
	initialize: function(){
	},
	submitMessage: function() {
		var getUsername = function() {
			var arrayOfUsername = window.location.search.split("");
			var result = arrayOfUsername.slice(10,arrayOfUsername.length).join("");
			return result;
		};
		var getText = function() {
			return escapeHtml($('form #newmessage').val());
		};
		var getRoom = function(){
			return escapeHtml($('#rooms').val());
		};
		var Message = function() {
			this.username = getUsername();
			this.text = getText();
			this.roomname = getRoom();
		};
		var message = new Message();
		$.ajax({
			url: 'https://api.parse.com/1/classes/chatterbox',
			type: 'POST',
			data: JSON.stringify(message),
			contentType: 'application/json',
			success: function(data) {
				console.log('Success!');
			},
			error: function (data) {
				console.error('chatterbox: Failed to send message. Error: ', data);
			}
		});
		this.trigger('submitMessage');
	}
});