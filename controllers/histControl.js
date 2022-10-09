const Hist = require('../models/histCitaciones')

exports.getHists = (req, res, next) => {
  // return array of existing posts
  Hist.find().then(foundHists => {
    console.log("OPERATION === GET SUCCESSFULLY");
    res.json({
      message: "All hists",
      hists: foundHists
    });
  }).catch(err => console.log('err', err));;
}

exports.createHist = (req, res, next) => {
  const id = req.body.idStudent;
  const his = req.body.history;
 
  // create a new Post instance
  const hist = new Hist({
    idStudent: id,
    history: his
  });
 
  // save the instance to the database
  hist
  .save()
  .then(histSaved => {
    res.status(201).json({
      message: 'Hist created successfully!',
      hist: histSaved
    });
    console.log("OPERATION === POST SUCCESSFULLY");
  })
  .catch(err => console.log('err', err));
}


exports.getById = (req, res) => {
  let id = req.params.id; // get the name of tea to delete
  Hist.findById(id).then(foundHists => {
    console.log("OPERATION === GET SUCCESSFULLY");
    res.json({
      message: "Hist found",
      hists: foundHists
    });
  }).catch(err => console.log('err', err));;
};

//DELETE 1 
exports.deleteById = (req, res) => {
  let id = req.params.id; // get the name of tea to delete
  Hist.findByIdAndDelete(id, (err) => {
  //if there's nothing to delete return a message
   if (err) return res.json(`Something went wrong, please try again. ${err}`);
  //else, return the success message
  else{
    console.log("OPERATION === DELETE SUCCESSFULLY");
    return res.json({message: "Hist deleted."});
  } 
  });
};

exports.updateById = (req, res) => {
  let id = req.params.id;

  Hist.findByIdAndUpdate(id, 
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