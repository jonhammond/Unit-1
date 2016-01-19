var store1 = {
  '2015-01-06': [
    ['Dark Chocolate Crunchies', '4.39', 1],
    ['Mint Wafers', '1.19', 3],
    ['Peppermint Poppers', '2.48', 2],
    ['Peanut Butter Buttered Peanuts', '1.89', 6]
  ],
  '2015-01-07': [
    ['Dark Chocolate Crunchies', '4.39', 4],
    ['Berry Bites', '7.99', 3],
    ['Peppermint Poppers', '2.48', 1],
    ['Caramel Twists', '.60', 7]
  ],
  '2015-01-08': [
    ['Banana Bunches', '4.63', 1],
    ['Peppermint Poppers', '2.48', 3],
    ['Mint Wafers', '1.19', 7],
    ['Dark Chocolate Crunchies', '4.39', 2],
    ['Caramel Twists', '.60', 1]
  ],
  '2015-01-09': [
    ['Caramel Twists', '.60', 3],
    ['Peanut Butter Buttered Peanuts', '1.89', 2]
  ],
  '2015-01-10': [
    ['Peanut Butter Buttered Peanuts', '1.89', 7],
    ['Caramel Twists', '.60', 2],
    ['Berry Bites', '7.99', 3],
    ['Dark Chocolate Crunchies', '4.39', 8],
    ['Mint Wafers', '1.19', 2]
  ]
}

var store2 = {
  'inventory prices': {
      'Dark Chocolate Crunchies': 4.29,
      'Mint Wafers': 1.09,
      'Peppermint Poppers': 2.38,
      'Peanut Butter Buttered Peanuts': 1.79,
      'Berry Bites': 7.89,
      'Caramel Twists': .50,
      'Banana Bunches': 4.53
  },
  'sale dates': {
      'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
      'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
      'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
      'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
      'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Banana Bunches': ['2015-01-10', '2015-01-10']
  }
}

var store3 = [
  {
    'date':'2015-01-06',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':0
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':3
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-07',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':2
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':1
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':3
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-08',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':2
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':0
      }
    }
  },
  {
    'date':'2015-01-09',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':3
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':2
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':1
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-10',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':2
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':5
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':2
      }
    }
  }
]

var store4 = {
      'Dark Chocolate Crunchies': {
        'cost': 4.34,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08']
      },
      'Mint Wafers': {
        'cost': 1.14,
        'sold on': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09']
      },
      'Peppermint Poppers': {
        'cost': 2.43,
        'sold on': ['2015-01-07', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10', '2015-01-10']
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.84,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-08']
      },
      'Berry Bites': {
        'cost': 7.94,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10', '2015-01-10']
      },
      'Caramel Twists': {
        'cost': .55,
        'sold on': ['2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10']
      },
      'Banana Bunches': {
        'cost': 4.58,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-10']
      }
}

//FIRST SECTION

  //line 8
  // console.log(store1['2015-01-08'][0][1]);

  //line 9
  // console.log(store4['Dark Chocolate Crunchies']['cost']);

  //line 10
  // console.log(store2['sale dates']['Banana Bunches']);

  //line 11
  // console.log(store2['sale dates']['Banana Bunches'].length);

  //line 12
  // console.log(store4['Berry Bites']['sold on'].length);

  //line 13
  // var candy = 'Caramel Twists';
  // console.log(store2['sale dates'][candy]);

  //line 14
  // var candy2 = 'Mint Wafers';
  // console.log(store2['sale dates'][candy2]);

//SECOND SECTION

  //line 17
  // var mintWafersCost = store2['inventory prices']['Mint Wafers'];
  // console.log(mintWafersCost);

  //line 18

  // line 19
  // var pbbpSaleDates = store2['sale dates']['Peanut Butter Buttered Peanuts'];
  // console.log('pbbpSaleDates =' + pbbpSaleDates);

  // line 20 - YES. B/C you are updating the
  // value of the variable when declaring the
  // new variable, 'total'.
  // var total = pbbpSaleDates.push('2015-01-25', '2015-01-26');
  // console.log(pbbpSaleDates);

  // line 21
  // var ctBeforeDates = store2['sale dates']['Caramel Twists'];
  // console.log('dates before = ' + ctBeforeDates.length);
  // var ctMinusDates = store2['sale dates']['Caramel Twists'].pop();
  // console.log('dates after pop = ' + ctBeforeDates.length);

  // line 22
  // var berryBitesData = store3[1]['inventory sold']['Berry Bites'];
  // console.log(berryBitesData);

  // line 23
  // var berryBitesData = store3[1]['inventory sold']

  // line 26
  // var jan8 = store1
  // var newArray = [];
  // for (var i=0; i<store1['2015-01-08'].length; i++) {
  //   newArray.push(store1['2015-01-08'][i][0]);
  // }

  // console.log(newArray);

  // line 27
  // var counter = 0;
  // for (var i=0; i<store1['2015-01-08'].length; i++) {
  //   counter += (store1['2015-01-08'][i][2]);
  // }
  // console.log(counter);

  // line 28
  // var store3dates = [];

  // for (var i=0; i<store3.length; i++) {
  //   store3dates.push(store3[i].date);
  // }

  // console.log("Store3 sale dates: " + store3dates);

  // line 29

  // var cTwists = {};
  // var datesArray = store2['sale dates']['Caramel Twists'];
  // console.log(datesArray);

  // for (var i=0; i < datesArray.length; i++) {
  //   if (cTwists[datesArray[i]]) {
  //     ++cTwists[datesArray[i]];
  //   }
  //   else {
  //     cTwists[datesArray[i]] = 1;
  //   }
  // }

  // console.log(cTwists);

  // line 30
  // I was having problems logging the object, cTwists, to the console because I had put a string in front of the object, and then concatenated. I was able to increment the quantity sold by counting the number of times a date showed up, and then adding 1 to the value for each time that date showed up. To do this I used the shorthand ++.

// line 31

var store1dates = Object.keys(store1);
console.log(store1dates);

// line 32
console.log("The length of the array is: " + store1dates.length);

// line 33

for (var i=0; i<store1dates.length; i++) {
  var currentDate = store1dates[i];
  console.log(store1[currentDate]);
};

// line 34


