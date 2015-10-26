var MessageEntryView = Backbone.View.extend({
	render: function(){
		var thisMessage = this.model.attributes;
		var thisEscapedMessage = {};
		for (var key in thisMessage) {
			var newKey = escapeHtml(key);
			var newValue = escapeHtml(thisMessage[key]);
			thisEscapedMessage[newKey] = newValue;
		};
		var username = thisEscapedMessage.username;
		var text = thisEscapedMessage.text; 
		return this.$el.html('<p class="users" id="' + username + '">'+ username + '</p><div class="messages" id="'+ username + '">'+ text + '</div>');
	}
});