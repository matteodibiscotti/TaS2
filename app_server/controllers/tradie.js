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
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
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
