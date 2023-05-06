const express = require("express")
const app = express()
const PORT = 4000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/menuItems', async (req, res) => {
  try {
    const menuItems = await MenuItem.find()
    res.json(menuItems)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})
app.post('/api/menuItems', (req, res) => {
  const menuItems = req.body})
  res.send('menuItems saved successfully')
app.delete("/api/menuItems/:id",(req,res)=>{

  db.query(`DELETE FROM menuItems WHERE id=${Number(req.params.id)}`,
   (error,  results) => {
     if (error) return res.json({ error: error })
      res.json("deleted")
   })})
   app.put('/api/menuItems/:id', (req, res) => {
    const recipeId = req.params.id
    const { name, ingredients, instructions } = req.body
    db.query('UPDATE menuItems SET name = ?, ingredients = ?, instructions = ? WHERE id = ?', [name, ingredients, instructions, recipeId], (error, results) => {
      if (error) {
        console.error(error)
        res.status(500).send('Error updating menuItems')
      } else {
        res.send('menuItems updated successfully')
      }
    });
  });
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })