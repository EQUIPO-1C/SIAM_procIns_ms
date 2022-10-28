const procInscri = require('../models/procIns')

exports.getProcs = (req, res, next) => {
  // return array of existing posts
  procInscri.find().select('-_id -__v').then(foundProcs => {
    console.log("OPERATION === GET SUCCESSFULLY");
    res.json({
      message: "All procs",
      process: foundProcs
    });
  }).catch(err => console.log('err', err));;
}

exports.createProc = (req, res, next) => {
  const id = req.body.idStudent;
  const fecha = req.body.fechaIns;
  const ma = req.body.materias;
  const cred = req.body.credTotales;
  
  // create a new Post instance
  const hist = new procInscri({
    idStudent: id,
    fechaIns: fecha,
    materias: ma,
    credTotales: cred
  });
 
  // save the instance to the database
  hist
  .save()
  .then(procSaved => {
    const {__v, _id, ...procSavedRest } =  procSaved._doc;
    res.status(201).json({
      message: 'proc created successfully!',
      procs: procSavedRest
    });
    console.log("OPERATION === POST SUCCESSFULLY");
  })
  .catch(err => console.log('err', err));
}


exports.getById = (req, res) => {
  let id = req.params.id; // get the name of tea to delete
  procInscri.findOne({idStudent: id}, function(err, foundProc){
    if (err){
      console.log('err', err);
    }
    else{
      console.log("OPERATION === GET SUCCESSFULLY");
      res.json({
        message: "procIns found",
        procs: foundProc
      });
    }
  }).select('-_id -__v');
};

//DELETE 1 
exports.deleteById = (req, res) => {
  let id = req.params.id; // get the name of tea to delete

  procInscri.findOneAndDelete({idStudent: id}, function(err, foundProc){
    if (err){
      console.log('err', err);
    }
    else if(foundProc !== null){
      console.log("OPERATION === DELETE SUCCESSFULLY");
      res.json({
        message: "procIns and deleted",
        procs: foundProc
      });
    }
    else{
      console.log("Not found");
      res.status(500).send(err);
    }
  }).select('-_id -__v');
};

exports.updateById = (req, res) => {
  let id = req.params.id;

  procInscri.findOneAndUpdate({idStudent: id}, 
    req.body, { new:true }, function(err, data) {
      if(err){
          console.log(err);
          res.status(500).send(err);
      }
      else if(data !== null){
          res.status(200).json(data);
          console.log("OPERATION === UPDATE SUCCESSFULLY");
      }else{
        console.log("Not found");
        res.status(500).send(err);
      }
  }).select('-_id -__v');  
};