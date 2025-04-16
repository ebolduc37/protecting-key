
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'dc2994e1f6msh08332cbc48da963p1f26b2jsn4f679cbcdb5a',
		'x-rapidapi-host': 'id-tools.p.rapidapi.com'
  }
};

app.get('/extract', async (req, res) => {

  const baseUrl = 'https://id-tools.p.rapidapi.com/extract?';

  let query = `label=${req.query.label}`;
  query += `&productCode=${req.query.productCode}`;
  query += `&yearPrint=${req.query.yearPrint}`;
  query += `&logoStyle=${req.query.logoStyle}`;
  query += `&sizingSystem=${req.query.sizingSystem}`;
  query += `&typeface=${req.query.typeface}`;
  query += `&manufacturer=${req.query.manufacturer}`;
  query += `&labelNotation=${req.query.labelNotation}`;
  query += `&language=${req.query.language}`;
  query += `&laundryPosition=${req.query.laundryPosition}`;

  let result = "";
  
  try {
    const response = await fetch(baseUrl+query, options);
    result = await response.json();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// GET garment information as string
app.get('/identify', async (req, res) => {

  const baseUrl = 'https://id-tools.p.rapidapi.com/identify?';
  
  let query = `label=${req.query.label}`;
  query += `&productCode=${req.query.productCode}`;
  query += `&yearPrint=${req.query.yearPrint}`;
  query += `&logoStyle=${req.query.logoStyle}`;
  query += `&sizingSystem=${req.query.sizingSystem}`;
  query += `&typeface=${req.query.typeface}`;
  query += `&manufacturer=${req.query.manufacturer}`;
  query += `&labelNotation=${req.query.labelNotation}`;
  query += `&language=${req.query.language}`;
  query += `&laundryPosition=${req.query.laundryPosition}`;

  let result = "";
  
  try {
    const response = await fetch(baseUrl+query, options);
    result = await response.json();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
