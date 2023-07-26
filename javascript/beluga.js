function calcularMedia() {
  var qtd = arguments.length;
  var total = 0;
  var x = 0;

  while (typeof arguments[x] === "number") {
    total += arguments[x];
    x++;
  }
  console.log("o total é " + total);
  return (total / qtd).toFixed(2);
}
