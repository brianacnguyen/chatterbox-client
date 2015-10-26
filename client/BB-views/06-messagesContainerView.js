var MessagesContainerView = Backbone.View.extend({
	tagName: 'div id="posts"',
	initialize: function(){
		this.render();
	},
	render: function(){
		$('#posts').empty();
		this.$el.children().detach();
		this.$el.html(this.collection.map(function(message) {
				return new MessageEntryView({model: message}).render();
			})
		)
	},
});