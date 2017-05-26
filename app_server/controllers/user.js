/* GET search results page */
module.exports.searchResults = function(req, res){
    res.render('searchResults', {
        title: 'Search Results',
        pageHeader: {
            title: 'Trades and Services',
            strapline: 'Find local skilled tradies'
        },
        sidebar: "Support local business, get superior service",
        locations: [{
            name: 'Matt\'s Gardening,',
            address: '1 Grassy Ln, Perth 6000',
            rating: 3,
            services: ['Mowing', 'Tree Removal'],
            distance: '100m'
        }, {
            name: 'Kit\'s Refridgeration',
            address: '2 Grassy Ln, Perth 6000',
            rating: 4,
            services: ['AC', 'Ducting'],
            distance: '200m'
        }, {
            name: 'Power Plumbing',
            address: '3 Grassy Ln, Perth 6000',
            rating: 2,
            services: ['Faucet Leak', 'Gas Appliance Install'],
            distance: '250m'
        }]
    });
};

/*module.exports.searchResults = function(req, res){
res.render('searchResults', { title: 'Search Results' });
};*/

/* GET search form page */
module.exports.newSearch = function(req, res){
res.render('newSearch', { title: 'Search Form' });
};

/* GET user signup form page */
module.exports.userSignup = function(req, res){
res.render('userSignup', { title: 'Sign Up' });
};
