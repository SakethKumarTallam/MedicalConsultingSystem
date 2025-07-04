// /********************************************************************
//   patient.js is part of controller for handleing patient information.
//   It use for managing patient models.
// ********************************************************************/

// const express = require('express');
// const router = express.Router();
// const {Patient} = require('../models/Patient');
// const asyncHandler = require('express-async-handler');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const APIFeatures = require('../helpers/apiFeatures');

// // GET Request in REST API (GET ALL)
// // getAllPatient() is use for getting all patient in the database
// exports.getAllPatient = asyncHandler(async (req, res) => {
//   // Execute query : query.sort().select().skip().limit()
//   const feature = new APIFeatures(
//     Patient.find().select('-passwordHash'),
//     req.query
//   )
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();
//   // Get data
//   const patient = await feature.query;

//   // return HTTP response 
//   res.status(200).json({
//     status: 'sucess',
//     DateTime: req.requestTime,
//     result: patient.length,
//     data: patient,
//   });
// });

// // GET Request in REST API (GET by id)
// // getPatient() is use for getting all patient in the database
// exports.getPatient = asyncHandler(async (req, res) => {
//   // Get data
//   const patient = await Patient.findById(req.params.id).select('-passwordHash');
//   if (!patient) {
//     return res.status(404).json({
//       status: 'fail',
//       message: "can't find the patient",
//     });
//   }
//   // return HTTP response
//   res.status(200).json({
//     status: 'sucess',
//     DateTime: req.requestTime,
//     data: patient,
//   });
// });

// // POST Request in REST API 
// // createPatient() is use for create patient in the database
// exports.createPatient = asyncHandler(async (req, res) => {
//   // get patient from HTTP request
//   let patient = new Patient({
//     name: req.body.name,
//     email: req.body.email,
//     passwordHash: bcrypt.hashSync(req.body.password, 10),
//     phone: req.body.phone,
//     gender: req.body.gender,
//     birthdate: req.body.birthdate,
//     IDcard: req.body.IDcard,
//     allergy: req.body.allergy,
//     bloodType: req.body.bloodType,
//     // currentAddress: req.body.currentAddress,
//     // relative: req.body.relative,
//   });
//   // create new patient
//   patient = await patient.save();

//   // return HTTP response
//   res.status(201).json({
//     status: 'sucess',
//     data: patient,
//   });
// });

// // PUT Request in REST API (by id)
// // updatePatient() is use for update patient in the database
// exports.updatePatient = asyncHandler(async (req, res) => {
//   // get password from HTTP request
//   if (req.body.password) {
//     req.body.passwordHash = bcrypt.hashSync(req.body.password, 10) // hashing
//   }
//   // find and update
//   const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   // return HTTP response
//   if (!patient) {
//     return res.status(404).json({
//       status: 'fail',
//       message: "can't find the patient",
//     });
//   }
//   res.status(200).json({
//     status: 'sucess',
//     data: {
//       patient,
//     },
//   });
// });

// // DELETE Request in REST API (by id)
// // deletePatient() is use for update patient in the database
// exports.deletePatient = asyncHandler(async (req, res, next) => {
//   // find and delete
//   await Patient.findByIdAndDelete(req.params.id);
//   // return HTTP response
//   res.status(204).json({
//     status: 'sucess',
//     data: null,
//   });
// });

// // checkPatientLogin() use to checking patient token information
// exports.checkPatientLogin = asyncHandler(async (req, res) => {
//   // set local variable to be use with other middleware
//   res.send(res.locals);
// });

// // controller for patient Login
// exports.patientLogin = asyncHandler(async (req, res) => {
//   const patient = await Patient.findOne({email: req.body.email});
//   const secret = process.env.secret;
//   if (!patient) {
//     return res.status(400).json({
//       status: 'fail',
//       data: null,
//       message: 'Incorrent Email or Password',
//     });
//   }
//   // decrypt password have validation.
//   if (patient && bcrypt.compareSync(req.body.password, patient.passwordHash)) {
//     const token = jwt.sign(
//       {
//         id: patient.id,
//         type: 'patient',
//       },

//       secret
//     );

//     // return Token as HTTP response
//     res.status(200).json({user: patient.email, token: token});
//   } else {
//     res.status(400).json({
//       status: 'fail',
//       data: null,
//       message: 'Incorrent Email or Password',
//     });
//   }
// });


// /********************************************************************
//   patient.js is part of controller for handling patient information.
//   It is used for managing patient models.
// ********************************************************************/
// const express = require('express');
// const router = express.Router();
// const { Patient } = require('../models/Patient');
// const asyncHandler = require('express-async-handler');
// const jwt = require('jsonwebtoken');
// const APIFeatures = require('../helpers/apiFeatures');

// exports.getAllPatient = asyncHandler(async (req, res) => {
//   const feature = new APIFeatures(
//     Patient.find().select('-password'),
//     req.query
//   )
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();

//   const patient = await feature.query;

//   res.status(200).json({
//     status: 'success',
//     DateTime: req.requestTime,
//     result: patient.length,
//     data: patient,
//   });
// });

// exports.getPatient = asyncHandler(async (req, res) => {
//   const patient = await Patient.findById(req.params.id).select('-password');
//   if (!patient) {
//     return res.status(404).json({
//       status: 'fail',
//       message: "Can't find the patient",
//     });
//   }
//   res.status(200).json({
//     status: 'success',
//     DateTime: req.requestTime,
//     data: patient,
//   });
// });

// exports.createPatient = asyncHandler(async (req, res) => {
//   let patient = new Patient({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     phone: req.body.phone,
//     gender: req.body.gender,
//   });

//   patient = await patient.save();

//   res.status(201).json({
//     status: 'success',
//     data: patient,
//   });
// });

// exports.updatePatient = asyncHandler(async (req, res) => {
//   const updateFields = {
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     gender: req.body.gender,
//     birthdate: req.body.birthdate,
//     IDcard: req.body.IDcard,
//     bloodType: req.body.bloodType,
//     allergy: req.body.allergy,
//     currentAddress: req.body.currentAddress,
//     relative: req.body.relative,
//   };

//   const patient = await Patient.findByIdAndUpdate(req.params.id, updateFields, {
//     new: true,
//     runValidators: true,
//   });

//   if (!patient) {
//     return res.status(404).json({
//       status: 'fail',
//       message: "Can't find the patient",
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     message: 'Profile updated successfully',
//     data: patient,
//   });
// });

// exports.deletePatient = asyncHandler(async (req, res) => {
//   await Patient.findByIdAndDelete(req.params.id);
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// });

// exports.checkPatientLogin = asyncHandler(async (req, res) => {
//   res.send(res.locals);
// });

// exports.patientLogin = asyncHandler(async (req, res) => {
//   const patient = await Patient.findOne({ email: req.body.email });
//   const secret = process.env.secret;

//   if (!patient) {
//     return res.status(400).json({
//       status: 'fail',
//       data: null,
//       message: 'Incorrect Email or Password',
//     });
//   }

//   if (patient.password === req.body.password) {
//     const token = jwt.sign(
//       {
//         id: patient.id,
//         type: 'patient',
//       },
//       secret
//     );

//     res.status(200).json({ user: patient.email, token: token });
//   } else {
//     res.status(400).json({
//       status: 'fail',
//       data: null,
//       message: 'Incorrect Email or Password',
//     });
//   }
// });
/********************************************************************
  patient.js is part of controller for handling patient information.
  It is used for managing patient models.
********************************************************************/
const express = require('express');
const router = express.Router();
const { Patient } = require('../models/Patient');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const APIFeatures = require('../helpers/apiFeatures');

exports.getAllPatient = asyncHandler(async (req, res) => {
  const feature = new APIFeatures(
    Patient.find().select('-password'),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const patient = await feature.query;

  res.status(200).json({
    status: 'success',
    DateTime: req.requestTime,
    result: patient.length,
    data: patient,
  });
});

exports.getPatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id).select('-password');
  if (!patient) {
    return res.status(404).json({
      status: 'fail',
      message: "Can't find the patient",
    });
  }
  res.status(200).json({
    status: 'success',
    DateTime: req.requestTime,
    data: patient,
  });
});

exports.createPatient = asyncHandler(async (req, res) => {
  let patient = new Patient({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  patient = await patient.save();

  res.status(201).json({
    status: 'success',
    data: patient,
  });
});

exports.updatePatient = asyncHandler(async (req, res) => {
  const updateFields = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    birthdate: req.body.birthdate,
    IDcard: req.body.IDcard,
    bloodType: req.body.bloodType,
    allergy: req.body.allergy,
    currentAddress: req.body.currentAddress,
    relative: req.body.relative,
  };

  const patient = await Patient.findByIdAndUpdate(req.params.id, updateFields, {
    new: true,
    runValidators: true,
  });

  if (!patient) {
    return res.status(404).json({
      status: 'fail',
      message: "Can't find the patient",
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Profile updated successfully',
    data: patient,
  });
});

exports.deletePatient = asyncHandler(async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.checkPatientLogin = asyncHandler(async (req, res) => {
  res.send(res.locals);
});

exports.patientLogin = asyncHandler(async (req, res) => {
  const patient = await Patient.findOne({ email: req.body.email });
  const secret = process.env.secret;

  if (!patient) {
    return res.status(400).json({
      status: 'fail',
      data: null,
      message: 'Incorrect Email or Password',
    });
  }

  if (patient.password === req.body.password) {
    const token = jwt.sign(
      {
        id: patient.id,
        type: 'patient',
      },
      secret
    );

    res.status(200).json({ user: patient.email, token: token });
  } else {
    res.status(400).json({
      status: 'fail',
      data: null,
      message: 'Incorrect Email or Password',
    });
  }
});

exports.firebaseLogin = asyncHandler(async (req, res) => {
  const { email, name, photo, uid } = req.body;

  if (!email || !uid) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Google credentials',
    });
  }

  const secret = process.env.secret;

  let patient = await Patient.findOne({ email });

  if (!patient) {
    patient = new Patient({
      name: name || email.split('@')[0],
      email,
      password: uid,
      gender: 'Not specified',
      phone: '',
      photo: photo || '',
    });
    await patient.save();
  }

  const token = jwt.sign(
    {
      id: patient._id,
      type: 'patient',
    },
    secret
  );

  res.status(200).json({ user: patient.email, token });
});

