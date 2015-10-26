var MainView = Backbone.View.extend({

	initialize: function(){
		this.titleView = new TitleView();
		this.insertMessageFormView = new InsertMessageFormView();
		this.insertMessageFormSubmitView = new InsertMessageFormSubmitView({model: this.model.get('insertMessageFormSubmitModel')});
		this.messagesContainerView = new MessagesContainerView({collection: this.model.get('currentData')});
		this.updateMessagesButtonView = new UpdateMessagesButtonView({model: this.model.get('updateMessagesButtonModel')});
		this.selectRoomView = new SelectRoomView({collection: this.model.get('currentData')});
		this.model.get('updateMessagesButtonModel').on('getMessage', function(view) {
			this.messagesContainerView = new MessagesContainerView({collection: this.model.get('updatedData')});
			this.render();
		},this);
	},
	render: function(){
		return this.$el.html(
			this.titleView.$el
			.append(this.insertMessageFormView.$el.append(this.insertMessageFormSubmitView.$el),
					this.selectRoomView.$el,
					this.updateMessagesButtonView.$el,  
					this.messagesContainerView.$el))
	},
});