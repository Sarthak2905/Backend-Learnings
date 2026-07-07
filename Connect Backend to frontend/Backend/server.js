import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send("Server is Ready");
});

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title:'A Joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'A Joke',
            content:'This is second a joke'
        },
        {
            id:3,
            title:'A Joke',
            content:'This is a third joke'
        },
        {
            id:4,
            title:'A Joke',
            content:'This is a fourth joke'
        },
        {
            id:5,
            title:'A Joke',
            content:'This is a fifth joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
});