const res = [
  "Inserting Users",
  db.users.insert({"_id":"5f3bd94511dab6c7bde1409e","roles":["businessowner"],"businesses":["5f3bd94611dab65619e1409f"],"acceptedDataProtStatements":["5f3ad65c33ed5b80c51edc87"],"friends":[],"email":"mail@alex-schell.de","password":"$2b$10$dxaJ0i0PNj0GHGpF2pTQjOK/kX6jNdt2KzmiSaaupaXkap3k4XSc.","createdAt":"8/18/2020, 1:36:05 PM","modifiedAt":"1,597,760,603,646","__v":1,"verification":{"email":"Tue, 18 Aug 2020 13:38:20 GMT"}}),
  db.users.insert({"_id":"5f3c35c911dab6fd52e140a3","roles":["businessowner"],"businesses":["5f3c35ca11dab67eaee140a4"],"acceptedDataProtStatements":["5f3ad65c33ed5b80c51edc87"],"friends":[],"email":"wesseler.moritz@gmail.com","password":"$2b$10$Be40P7N.DQ83ifbYqqWkueR/5KuG9Y5fhhGxEb5Y5VRdL2Urxfq5u","createdAt":"8/18/2020, 8:10:49 PM","modifiedAt":"1,597,781,470,396","__v":1,"verification":{"email":"Tue, 18 Aug 2020 20:11:10 GMT"}}),
  db.users.insert({"_id":"5f3c38a711dab63e2ae140a7","roles":["businessowner"],"businesses":["5f3c38a811dab650bfe140a8"],"acceptedDataProtStatements":["5f3ad65c33ed5b80c51edc87"],"friends":[],"email":"sfrisse@gmx.de","password":"$2b$10$hsYvJsivQFVma8BGNR9n1elvJ6T9/Ff9gTMoqzP9W8F/0oOTVrKBy","createdAt":"8/18/2020, 8:23:03 PM","modifiedAt":"1,597,782,831,807","__v":1,"verification":{"email":"Tue, 18 Aug 2020 20:33:51 GMT"}}),
  db.users.insert({"_id":"5f4d23a611dab6f9b9e140b0","roles":["businessowner"],"businesses":["5f4d23a711dab6328de140b1"],"acceptedDataProtStatements":["5f3ad65c33ed5b80c51edc87"],"friends":[],"email":"louisa.lippl@gmx.de","password":"$2b$10$2GuZzC7UBnqSHn5t5c/RyujM5dr1UGEQ/lGeRxGX655tbnV7CxJfu","createdAt":"8/31/2020, 4:21:58 PM","modifiedAt":"1,598,891,061,358","__v":1,"verification":{"email":"Mon, 31 Aug 2020 16:24:21 GMT"}}),
]
printjson(res);
