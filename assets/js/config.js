// window.ghostTheme1 = {};
window.ghostTheme1.baseUrl = 'http://localhost:2368';
window.ghostTheme1.config = { 
		
		logo: '[YOUR LOGO]',
		author: {			
				social: [
					{ 
						href: 'https://github.com/adamrw/',
					  icon: 'fa-github',
						title: 'Github'
					},
					{ 
						href: 'https://twitter.com/adamweiner/',
					  icon: 'fa-twitter',
						title: 'Twitter'
					},
					{ 
						href: 'https://www.linkedin.com/in/adamweiner',
					  icon: 'fa-linkedin',
						title: 'LinkedIn'
					},
					{ 
						href: 'mailto: adamwineguy@gmail.com',
					  icon: 'fa-envelope',
						title: 'Email'
					},
					{ 
						href: window.ghostTheme1.baseUrl + '/rss/',
					  icon: 'fa-rss',
						title: 'Rss'
					}
				]
		},
		disqus: {
				shortname: '[YOUR DISQUS SHORTNAME]'
		},
		google: {
				analytics: function(ga) {
					var account ='[YOUR GA ACCOUNT]';
					var domain = '[YOUR GA DOMAIN]';

					ga('create', account, domain);
					//ga('require', 'displayfeatures');
					ga('send', 'pageview');
				}
		},

		menu: [
				{ route: window.ghostTheme1.baseUrl + '/', text: 'Home'},
				{ route: window.ghostTheme1.baseUrl + '/about', text: 'About'},
				{ route: window.ghostTheme1.baseUrl + '/projects', text: 'Projects'},
				{ route: window.ghostTheme1.baseUrl + '/contact', text: 'Contact'}
		]
};

// changing text for theme commit
	
