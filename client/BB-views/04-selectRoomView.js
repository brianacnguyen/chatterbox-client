var SelectRoomView = Backbone.View.extend({
	tagName: 'select id="rooms"',
	initialize: function() {
		this.render();
	},
	render: function(){
		$('#rooms').empty();
		this.$el.children().detach();
		this.$el.html(this.collection.map(function(message) {
			return new SelectRoomEntryView({model: message}).render();
		})
		)
	}
});