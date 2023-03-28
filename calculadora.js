<!DOCTYPE html>
<html>
<head>
	<title>Calculadora Básica</title>
	<script>
		function calcular() {
			// Obtener los valores de los inputs
			var num1 = document.getElementById("num1").value;
			var num2 = document.getElementById("num2").value;
			var operacion = document.getElementById("operacion").value;

			// Realizar la operación seleccionada
			if (operacion == "suma") {
				var resultado = parseFloat(num1) + parseFloat(num2);
			} else if (operacion == "resta") {
				var resultado = parseFloat(num1) - parseFloat(num2);
			} else if (operacion == "multiplicacion") {
				var resultado = parseFloat(num1) * parseFloat(num2);
			} else if (operacion == "division") {
				var resultado = parseFloat(num1) / parseFloat(num2);
			}

			// Mostrar el resultado
			document.getElementById("resultado").value = resultado;
		}
	</script>
</head>
<body>
	<h1>Calculadora Básica</h1>
	<form>
		<label>Número 1:</label>
		<input type="number" id="num1"><br><br>

		<label>Número 2:</label>
		<input type="number" id="num2"><br><br>

		<label>Operación:</label>
		<select id="operacion">
			<option value="suma">Suma</option>
			<option value="resta">Resta</option>
			<option value="multiplicacion">Multiplicación</option>
			<option value="division">División</option>
		</select><br><br>

		<input type="button" value="Calcular" onclick="calcular()"><br><br>

		<label>Resultado:</label>
		<input type="number" id="resultado"><br><br>
	</form>
</body>
</html>
