const express = require('express'); 
const app = express(); 
const PORT = 3000; 
 
const LOGIN = 'ladyxxa';   

app.get('/:datecode', (req, res) => { 
  const datecode = req.params.datecode; 
   
  const now = new Date(); 
  const day = String(now.getDate()).padStart(2, '0'); 
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = String(now.getFullYear()).slice(-2); // последние 2 цифры года 
  const todayCode = `${day}${month}${year}`; 
   
  if (datecode !== todayCode) { 
    return res.status(404).send('Not Found'); 
  } 
   
  const fullYear = now.getFullYear(); 
  const formattedDate = `${day}-${month}-${fullYear}`; 
   
  res.setHeader('Content-Type', 'application/json'); 
  res.json({ 
    date: formattedDate, 
    login: LOGIN 
  }); 
}); 
 
app.get('/api/rv/:str', (req, res) => { 
  const str = req.params.str; 
   
const regex = /^[a-z]+$/; 
if (!regex.test(str)) { 
return res.status(400).send('Bad Request: only lowercase latin letters allowed'); 
} 

const reversed = str.split('').reverse().join(''); 
res.send(reversed);  
}); 
// Запуск сервера 
app.listen(PORT, () => { 
console.log(`Server running on port ${PORT}`); 
});
