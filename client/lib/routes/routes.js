if(Meteor.isClient){

	Router.configure({
	  layoutTemplate: 'mainLayout'
	});
	

	Router.route('/Home', function () {
	  this.render('home');
		}, {
		  name: 'home'
	});
	
	Router.route('/About', function () {
	  this.render('about');
		}, {
		  name: 'about'
	});
	
	Router.route('/Portfolio', function () {
	  this.render('portfolio');
		}, {
		  name: 'portfolio'
	});
	
	Router.route('/Blog', function () {
	  this.render('blog');
		}, {
		  name: 'blog'
	});
	
	Router.route('/Contact', function () {
	  this.render('contact');
		}, {
		  name: 'contact'
	});
	
	Router.route('/', function () {
	  this.redirect('home');
	});


}


