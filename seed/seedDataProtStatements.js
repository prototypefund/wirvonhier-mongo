const res = [
  "Inserting DataProtStatements",
  db.dataprotstatements.insert({"_id":"5f3ad65c33ed5b80c51edc87","version":"1.0.0","type":"dummy","language":"de","text":"dummy","html":"<h1>Dummy</h1>","markdown":"#dummy"}),
]
printjson(res);
