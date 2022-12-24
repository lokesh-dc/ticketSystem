const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express()
const cors = require('cors');
const authRouter = require('./features/users/users.router');
const ticketRouter = require('./features/tickets/tickets.router');
const bookmarkRouter = require("./features/bookmarks/bookmarks.router");


app.use(express.json())
app.use(cors());

app.get('/', (req, res) => res.send('hello'))
app.use("/auth", authRouter);
app.use("/tickets", ticketRouter);
app.use("/bookmarks", bookmarkRouter)


app.listen(8080, async () => {
    await dbConnect()
    console.log('server started on port 8080')
})