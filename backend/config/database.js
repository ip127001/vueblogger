if (process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: "mongodb://rk1996:rohitk1761996@ds219000.mlab.com:19000/vueblogger" }
} else {
    module.exports = {mongoURI: "mongodb://localhost/posts"}
}

