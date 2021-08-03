import express from 'express';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.use(express.static('public'))
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('index', { title: 'Viglet DaVinci'}));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});