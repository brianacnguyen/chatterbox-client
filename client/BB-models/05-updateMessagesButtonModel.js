var UpdateMessagesButtonModel = Backbone.Model.extend({
	initialize: function(){
	},
	getMessage: function(){
		this.trigger('getMessage');
	}
});