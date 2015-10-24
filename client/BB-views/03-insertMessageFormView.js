var InsertMessageFormView = Backbone.View.extend({
	tagName: 'form',
	initialize: function() {
		this.render();
	},
	render: function(){
		return this.$el.html('<input id="newmessage" type=TEXT placeholder="What do you have in mind?">');
	}
});