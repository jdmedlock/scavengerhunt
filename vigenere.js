// helpers
// helper
function ordA(a) {
  return a.charCodeAt(0) - 65;
}

// vigenere
function vigenere(text, key, decode) {
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}

// example
var text = "JHDJWUXFQUJDIMDIWISUF";
var key = "AA";
var enc = vigenere(text,key);
var dec = vigenere(enc,key,true);

//console.log(enc);
for (let i=65; i < 91; i++ ) {
   let thisKey = String.fromCharCode(i);
   console.log("key=", thisKey," text=", vigenere(enc,thisKey,true));
   for (let j=65; j < 91; j++ ) {
      thisKey = String.fromCharCode(i) + String.fromCharCode(j);
      console.log("key=", thisKey," text=", vigenere(enc,thisKey,true));
   }
}
