mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: false,
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    min: 0,
    required: false,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.findByDogName = (name, callback) => {
  const search = {
    name,
  };
  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);
// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
