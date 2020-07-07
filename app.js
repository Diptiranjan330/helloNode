const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('If you See this, It means it worked'))

app.listen(port, () => console.log(`Deployed v2 successfully  ${port}!`))
