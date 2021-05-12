const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req,res) => {
    res.json({hello : 'hello i am working'});
});

app.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;

    next(err);
})

//middleware
app.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Something went wrong'
    });
});

app.listen(port, console.log(`Server is running on port ${port}`));