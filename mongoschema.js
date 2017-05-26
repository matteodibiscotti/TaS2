/*
Note, this does not go here in the final project!
Only including it here to record stuff as we're going along,
code will be pasted elsewhere.
*/

var mongoose = require('mongoose');

var loginSchema = new mongoose.schema (
  {
    username:{type:String, required:true},
    password:{type:String, required:true}
  }
);


var userRegistrationSchema = new mongoose.schema (
  {
    username:{type:String, require:true},
    name:{type:String, require:true},
    businessName:{type:String, require:false},
    address:{type:String, require:false},
    suburb:{type:String, require:true},
    mobileNumber:{type:Number, require:true},
    email:{type:String, require:true} //may need to validate this e-mail address
  }
);


var jobRegistrationSchema = new mongoose.schema (
  {
    username:{type:String, require:true},
    trade:{type:String, require:true},
    jobLength:{type:Number, require:true},
    jobDescription:{type:String, require:true}
  }
);


var reviewSchema = new mongoose.schema (
  {
    username:{type:String, require:true},
    jobDescription:{type:String, require:true},
    rating:{type:Number, require:true},
    tradieReview:{type:String}
  }
);


mongoose.model('Login', loginSchema);
mongoose.model('User Registration', userRegistrationSchema);
mongoose.model('Job Registration', jobRegistrationSchema);
