var SelectRoomEntryView = Backbone.View.extend({
	render: function(){
		var thisMessage = this.model.attributes;
		var thisEscapedMessage = {};
		for (var key in thisMessage) {
			var newKey = escapeHtml(key);
			var newValue = escapeHtml(thisMessage[key]);
			thisEscapedMessage[newKey] = newValue;
		};
		var room = thisEscapedMessage.roomname;
		return this.$el.html('<option id="' + room + '" value= "' + room + '">' + room + '</option>');
	}
});
