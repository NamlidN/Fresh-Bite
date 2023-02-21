import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requered: [true, "Please provide first name"],
    minlength: 2,
    maxlength: 20,
    default: "John",
    trim: true,
  },
  lastName: {
    type: String,
    requered: [true, "Please provide last name"],
    minlength: 2,
    maxlength: 20,
    default: "Token",
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,

    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 4,
    // Passwortrückgabe wird unterbunden
    select: false,
  },

  // FÜR SPÄTER
  // street: {
  //     type: String,
  //     requered: [true, "Please provide a valid street name"],
  //     mindlength: 4,
  //     trim: true
  // },
  // number: {
  //     type: String,
  //     requered: [true, "Please provide a valid street number"],
  //     mindlength: 1,
  //     trim: true
  // },
  // postalCode: {
  //     type: Number,
  //     requered: [true, "Please provide a valid postal code"],
  //     mindlength: 3,
  //     trim: true
  // },
  // town: {
  //     type: String,
  //     requered: [true, "Please provide a valid town name"],
  //     mindlength: 1,
  //     trim: true
  // }
});

UserSchema.pre("save", async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified("name"));

  // Überprüfen, ob das Passwort des Benutzers geändert wurde
  if (!this.isModified("password")) return;
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

// JWT wird generiert und an den Client übergeben
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

// Vergleich des verschlüsselten Passworts (Rückgabe: true or false)
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcryptjs.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
