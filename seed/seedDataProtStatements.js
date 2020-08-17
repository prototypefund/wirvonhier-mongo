const res = [
  "Inserting DataProtStatements",
  db.dataprotstatements.insert({ version: '1.0.0', type: 'dummy', language: 'de', text: 'dummy', html: '<h1>Dummy</h1>', markdown: '#dummy' }),
]
printjson(res);
