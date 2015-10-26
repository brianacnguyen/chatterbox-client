var InsertMessageFormSubmitView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	events: {
		'click': function() {
			this.model.submitMessage();
		}
	},
	render: function(){
		return this.$el.html('<input id="submit" type=BUTTON value="Submit your message">');
	}
});