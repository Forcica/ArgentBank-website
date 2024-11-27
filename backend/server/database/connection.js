const mongoose = require('mongoose')
const databaseUrl = 'mongodb+srv://bforcica:S21BLp8hUqx3l967@cluster0.mongodb.net/argentBankDB?retryWrites=true&w=majority'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
