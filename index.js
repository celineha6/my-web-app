const express = require('express'); 
const app = express(); 


app.get('/', (req, res) => {
    res.send('Hello, class! This is my updated demo!');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
