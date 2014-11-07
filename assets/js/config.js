window.ghostTheme1.config = { 
	
		logo: '[YOUR LOGO]',
		author: {			
				social: [
					{ 
						href: 'https://github.com/[YOUR ACCOUNT]',
					  icon: 'fa-github',
						title: 'Github'
					},
					{ 
						href: 'https://twitter.com/[YOUR ACCOUNT]',
					  icon: 'fa-twitter',
						title: 'Twitter'
					},
					{ 
						href: 'https://linkedin.com/[YOUR ACCOUNT]',
					  icon: 'fa-linkedin',
						title: 'LinkedIn'
					},
					{ 
						href: 'mailto:[YOUR EMAIL]',
					  icon: 'fa-envelope',
						title: 'Email'
					},
					{ 
						href: techno.baseUrl + '/rss/',
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
				{ route: '', text: 'Home'},
				{ route: ghostTheme1.baseUrl + '/about', text: 'About'},
				{ route: ghostTheme1.baseUrl + '/projects', text: 'Projects'}
		]
};

// change to see if commit possible
	
