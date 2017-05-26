/* GET private page */
module.exports.profilePrivate = function(req, res){
res.render('profilePrivate', { title: 'Private Profile' });

var tradesAndServices = {};
tradesAndServices['Plumber'] = ['', 'Faucet Leak', 'Gas Appliance Instal', 'Pipework'];
tradesAndServices['Electrician'] = ['', 'Appliance Testing', 'Electrical Fitting Instal', 'Power/Fuse Issue'];
tradesAndServices['Carpenter'] = ['', 'Fixture/Furniture Repair', 'Cabinets'];
tradesAndServices['AC/Refrigeration'] = ['', 'AC', 'Fridge', 'Freezer', 'Ducting'];
tradesAndServices['Gardening/Landscaping'] = ['', 'Mowing', 'Earthworks', 'Tree Removal', 'Transplanting'];
tradesAndServices['Labourer'] = ['', 'Construction', 'Landscaping', 'Production Line', 'Warehouse'];

function ChangeServiceList() {
    var tradeList = document.getElementById("trade");
    var serviceList = document.getElementById("service");
    var seltrade = tradeList.options[tradeList.selectedIndex].value;
    while (serviceList.options.length) {
        serviceList.remove(0);
    }
    var trades = tradesAndServices[seltrade];
    if (trades) {
        var i;
        for (i = 0; i < trades.length; i++) {
            var trade = new Option(trades[i], i);
            serviceList.options.add(trade);
        }
    }
} 
};

/* GET public page */
module.exports.profilePublic = function(req, res) {
    res.render('profilePublic', {
        title: 'Public Profile',
        pageHeader: {
            title: 'Matt\'s Gardening'
        },
        sidebar: {
            context: 'Provides high quality mowing and tree removal services',
            callToAction: 'don\'t take our word for it!  check our reviews!',
        },
        location: {
            name: 'Matt\'s Gardening',
            address: '1, Grassy Ln, Perth 6000',
            rating: 5,
            Services: ['Mowing', 'Tree Removal'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            availability: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '4:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: true
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Matt ',
                rating: 1,
                timestamp: '5 May 2017',
                reviewText: 'Terrible.. May as well have just done burnouts on my lawn.'
            }, {
                author: 'Kit ',
                rating: 5,
                timestamp: '20 May 2017',
                reviewText: 'Did a great job and even tidied the rest of the garden as well for no additional cost!'
            }]
        }
    });
};

/* GET review form page */
module.exports.addReview = function(req, res){
res.render('addReview', { title: 'Add Review' });
};

/* GET tradie signup form page */
module.exports.tradieSignup = function(req, res){
res.render('tradieSignup', { title: 'Sign Up' });
};
