var MainView = Backbone.View.extend({
	initialize: function(){
		this.titleView = new TitleView();
		this.insertMessageFormView = new InsertMessageFormView();
		this.messagesContainerView = new MessagesContainerView({collection: this.model.get('currentData')});
	},
	render: function(){
		return this.$el.html(
			[this.titleView.$el
			.append(this.insertMessageFormView.$el),
			this.messagesContainerView.$el])
	},
});