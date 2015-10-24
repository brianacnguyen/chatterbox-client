var TitleView = Backbone.View.extend({
	tagName: 'div id="main"',
	initialize: function() {
		this.render();
	},
	render: function(){
		return this.$el.html('<h1>Twittler</h1>');
	},
});