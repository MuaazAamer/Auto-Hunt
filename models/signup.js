import mongoose from "mongoose";

// Define the Signup schema
const SignupSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "Email is required"], // Field is mandatory with a custom error message
    unique: true, // Ensures unique email addresses
    lowercase: true, // Converts the email to lowercase for consistency
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email format validation
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"], // Field is mandatory with a custom error message
    minlength: [6, "Password must be at least 6 characters long"], // Minimum length validation
    select: false, // Excludes the password field from queries by default
  },
  created_at: {
    type: Date,
    default: Date.now, // Automatically sets the current date/time
  },
});

// Export the Signup model
export default mongoose.models.Signup || mongoose.model("Signup", SignupSchema);
