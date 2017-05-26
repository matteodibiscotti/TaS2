var tradesAndServices = {};
tradesAndServices['Plumber'] = ['', 'Faucet Leak', 'Gas Appliance Install', 'Pipework'];
tradesAndServices['Electrician'] = ['', 'Appliance Testing', 'Electrical Fitting Install', 'Power/Fuse Issue'];
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
