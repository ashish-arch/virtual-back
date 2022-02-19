const mongoose = require('mongoose')
     //to validate the data

mongoose.connect("mongodb://name:pass@cluster0-shard-00-00-cmzqh.mongodb.net:27017,cluster0-shard-00-01-cmzqh.mongodb.net:27017,cluster0-shard-00-02-cmzqh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


