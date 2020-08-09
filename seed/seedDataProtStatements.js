const res = [
  db.dataprotstatements.insert({ version: '1.0.0', type: 'dummy', langauge: 'de', text: 'dummy', html: '<h1>Dummy</h1>', markdown: '#dummy' }),
]
printjson(res);
