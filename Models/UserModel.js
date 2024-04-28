import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true 
},
  password: { 
    type: String, 
    required: true 
},
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
},
  address: { 
    type: String 
},
  phoneNumber: { 
    type: String 
},
});

export default mongoose.model('User', userSchema);
