require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const connectDB = require('./config/db.config');

connectDB();

app.use(express.json());

// Connecting Routes
app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
