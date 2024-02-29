require('dotenv').config()
const Job = require('./models/Job')
const connectDB = require('./db/connect')
const mockData = require('./MOCK_DATA.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(mockData)
        console.log(`Success !!`);
        process.exit(0)
    }
    catch (err) {
        console.log(err);
        process.exit(1)
    }
}

start();