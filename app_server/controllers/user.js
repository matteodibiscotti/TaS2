/* GET search results page */
module.exports.searchResults = function(req, res){
    res.render('searchResults', {
        title: 'Search Results',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

module.exports.searchResults = function(req, res){
res.render('searchResults', { title: 'Search Results' });
};

/* GET search form page */
module.exports.newSearch = function(req, res){
res.render('newSearch', { title: 'Search Form' });
};

/* GET user signup form page */
module.exports.userSignup = function(req, res){
res.render('userSignup', { title: 'Sign Up' });
};
