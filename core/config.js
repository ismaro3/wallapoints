module.exports = {
    db:
    {
        production: "mongodb://localhost/wallapoints-prod",
        development: "mongodb://localhost/wallapoints-dev",
        test: "mongodb://localhost/wallapoints-dev"

    },
    port:{
        production: 8888,
        development: 8888,
        test: 8889
    }

};
