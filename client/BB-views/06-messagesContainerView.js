var MessagesContainerView = Backbone.View.extend({
	initialize: function(){
		this.fetch();
	},
	fetch: function() {
		var context = this;
		$.ajax({
			url: fetchServer,
			type: 'GET',
			contentType: 'application/json',
			data: {order: '-createdAt'},
			success: function(data) {
				fetchedData = data.results;
				context.render();
			},
			error: function (data) {
				console.error('chatterbox: Failed to retrieve message. Error: ', data);
			}
		});
	},
	render: function(){
		this.$el.children().detach();
		this.$el.html('<div id="posts></div>').append(
			this.collection.map(function(message) {
				return new MessageEntryView({model: message}).render();
			})
		)
	},
});