var UpdateMessagesButtonView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	events: {
		'click': function() {
			this.model.getMessage();
		}
	},
	render: function(){
		return this.$el.html('<button id="update" type=BUTTON>Update Messages</button>');
	}
});