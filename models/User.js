'use strict'

exports = module.exports = function (app, mongoose) {
  var userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    email: String,
    gender: { type: String},
    age: {type:Number, default:0 },
    createdAt: {type: Date,default: Date.now},
    updateAt: Date
  })
    userSchema.set('autoIndex', (app.get('env') === 'development'))
    app.db.model('user', userSchema)
}
