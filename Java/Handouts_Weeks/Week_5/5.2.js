db.zips.aggregate([{$group : { "_id" : { "state" : "$state", "city" : "$city"}, "pop" : {$sum : "$pop"}}}, {$match : { "_id.state" : {$in : ["CA", "NY"]}, "pop" : {$gt : 25000}}}, {$group : { "_id" : null,
pe� "pop" : {$avg : "$pop"}}}])
