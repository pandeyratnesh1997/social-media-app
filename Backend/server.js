
const app = require('./app');
const connection = require('./Config/database')

app.listen(process.env.PORT, async()=>{
    await connection;
    console.log(`server is running on port ${process.env.PORT}`);
})

