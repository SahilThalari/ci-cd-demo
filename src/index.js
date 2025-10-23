const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
res.json({ message: 'Hello from CI-CD demo!' });
});


app.get('/health', (req, res) => res.sendStatus(200));


if (require.main === module) {
app.listen(port, () => console.log(`Server running on port ${port}`));
}


module.exports = app; // export for tests