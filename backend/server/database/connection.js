const mongoose = require('mongoose')
const databaseUrl = 'mongodb+srv://bforcica:S21BLp8hUqx3l967@cluster0.xxxxx.mongodb.net/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw error
  }
}
