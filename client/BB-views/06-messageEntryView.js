var MessageEntryView = Backbone.View.extend({
	template: _.template('<p class="users" id="<%= username %>"><%= username %></p>template<br><div class="messages" id="<%= username %>"><%= text %></div>'),
	events: {

	},
	render: function(){
		return this.$el.html(this.template(this.mode.attributes));
	}
});