data
// returns in mongolab
{
    "country": "United States"
}
// returns in mongolab ui
{
    "screenName": "pss80"
}


//stats
db.tweetstreams.stats()

db.people.stats()

// in terminal
db.tweetstreams.aggregate([
  {$match: { "country": "United States"}},
  { $group: {"_id": "$queryTerm", total:{$sum: "$followersCount"}}}
])

// search term by country with total potential audience
db.tweetstreams.aggregate([
  { $group: {_id: "$queryTerm", total:{$sum: "$followersCount"}}}
])

// search term by country with total potential audience
db.tweetstreams.aggregate([
  { $group: {_id: "$country", total:{$sum: "$followersCount"}}}
])

// search term by country US
db.tweetstreams.aggregate([
  {$match: { country: "United States"}},
  { $group: {_id: "$queryTerm", total:{$sum: "$followersCount"}}}
])


//  exists example
db.bookstore.find({ name: {$exists: true}})
db.tweetstreams.find({ country: {$exists: true}})
db.inventory.find( { qty: { $exists: true, $nin: [ 5, 15 ] } } )
// example distinct

//distinct
db.runCommand ( { distinct: "inventory", key: "dept" } )
db.runCommand ( { distinct: "tweetstreams", key: "country" } )
//
db.tweetstreams.aggregate(
  [
     {$group: {_id: "country", count: {$sum: 1}}}
  ]
)

db.collection.aggregate(
   [
      { $group: { _id: null, count: { $sum: 1 } } }
   ]

//aggregatino with a gorup
db.tweetstreams.aggregate (
  [
    {
      $group:
      {
        _id: { "country": {$country}}
      }
    }
  ]
)


   db.sales.aggregate(
      [
        {
          $group:
            {
              _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
              totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
              count: { $sum: 1 }
            }
        }
      ]
   )


{
    "_id": {
        "$oid": "55dbb0e1cf59dd0300cc8bc7"
    },
    "text": "Lol us af @lexizzzzlle  https://t.co/o1nhyh3Mf5",
    "country": "United States",
    "queryTerm": "lol",
    "followersCount": 4053,
    "friendsCount": 910,
    "listedCount": 43,
    "screenName": "lainalocz",
    "statusesCount": 71570,
    "favouritesCount": 11116,
    "dateCreated": {
        "$date": "2015-08-25T00:03:45.191Z"
    },
    "coordinates": [
        -117.184394,
        33.447541
    ],
    "__v": 0
}
