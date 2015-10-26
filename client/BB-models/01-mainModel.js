var MainModel = Backbone.Model.extend({
	initialize: function(){
		var context = this;
		this.set('updateMessagesButtonModel', new UpdateMessagesButtonModel());
		this.set('insertMessageFormSubmitModel', new InsertMessageFormSubmitModel());
		setInterval(function(){
			context.set('updatedData', new MessagesContainerCollection(fetchedData));
		}, 500);
	}
});