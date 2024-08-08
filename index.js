const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
});
app.post('/addition', (req, res) => {
	const { num1, num2 } = req.body;
	const result = parseFloat(num1) + parseFloat(num2);
	res.json({ result });
});
app.post('/subtraction', (req, res) => {
	const { num1, num2 } = req.body;
	const result = parseFloat(num1) - parseFloat(num2);
	res.json({ result });
});
app.post('/multipilication', (req, res) => {
	const { num1, num2 } = req.body;
	const result = parseFloat(num1) * parseFloat(num2);
	res.json({ result });
});

app.post('/divison', (req, res) => {
	const { num1, num2 } = req.body;
	const result = parseFloat(num1) / parseFloat(num2);
	res.json({ result });
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");


});