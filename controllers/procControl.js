const procInscri = require('../models/procIns')

exports.getProcs = (req, res, next) => {
  // return array of existing posts
  procInscri.find().then(foundProcs => {
    console.log("OPERATION === GET SUCCESSFULLY");
    res.json({
      message: "All procs",
      hists: foundProcs
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
    res.status(201).json({
      message: 'proc created successfully!',
      procs: procSaved
    });
    console.log("OPERATION === POST SUCCESSFULLY");
  })
  .catch(err => console.log('err', err));
}


exports.getById = (req, res) => {
  let id = req.params.id; // get the name of tea to delete
  procInscri.findById(id).then(foundProc => {
    console.log("OPERATION === GET SUCCESSFULLY");
    res.json({
      message: "procIns found",
      procs: foundProc
    });
  }).catch(err => console.log('err', err));;
};

//DELETE 1 
exports.deleteById = (req, res) => {
  let id = req.params.id; // get the name of tea to delete
  procInscri.findByIdAndDelete(id, (err) => {
  //if there's nothing to delete return a message
   if (err) return res.json(`Something went wrong, please try again. ${err}`);
  //else, return the success message
  else{
    console.log("OPERATION === DELETE SUCCESSFULLY");
    return res.json({message: "procIns deleted."});
  } 
  });
};

exports.updateById = (req, res) => {
  let id = req.params.id;

  procInscri.findByIdAndUpdate(id, 
    req.body, { new:true }, function(err, data) {
      if(err){
          console.log(err);
          res.status(500).send(err);
      }
      else{
          res.status(200).json(data);
          console.log("OPERATION === UPDATE SUCCESSFULLY");
      }
  });  
};