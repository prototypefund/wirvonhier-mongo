const res = [
  "Inserting Locations",
  db.locations.insert({"_id":"5f3c105d11dab64631e140a1","geo":{"type":"Point","coordinates":[8.4698152,49.4881117]},"createdAt":"Tue, 18 Aug 2020 17:31:09 GMT","modifiedAt":"1,597,771,869,123","__v":0}),
  db.locations.insert({"_id":"5f3c366c11dab610bae140a6","geo":{"type":"Point","coordinates":[7.1106178,52.03017639999999]},"createdAt":"Tue, 18 Aug 2020 20:13:32 GMT","modifiedAt":"1,597,781,612,339","__v":0}),
  db.locations.insert({"_id":"5f3c394811dab63894e140aa","geo":{"type":"Point","coordinates":[6.7926671,51.4363392]},"createdAt":"Tue, 18 Aug 2020 20:25:44 GMT","modifiedAt":"1,597,782,344,526","__v":0}),
  db.locations.insert({"_id":"5f4d2fac11dab647aee140b2","geo":{"type":"Point","coordinates":[8.9491408,48.9686049]},"createdAt":"Mon, 31 Aug 2020 17:13:16 GMT","modifiedAt":"1,598,893,996,287","__v":0}),
]
printjson(res);
