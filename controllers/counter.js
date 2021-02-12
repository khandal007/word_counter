const models = require('../models');

module.exports = {

  addCount:async function(req, res, next){

  	try {
  		let isWord = (req.params.word==Number(req.params.word))?"number":"string";

	  	if(isWord !='string'){
	  		res.json({message: "Please enter word"});
	  	}
	  	var findRecord = await models.word_counter.findOne({where:{word: req.params.word}});
	  	if(findRecord){
	  		var createWord = await models.word_counter.update({counter: findRecord.counter+1}, { where: { word: req.params.word }});
	  	}else{
	  		var createWord = await models.word_counter.create({word: req.params.word, counter: 1});
	  	}
	  	if(createWord){
	  		res.json({status: true, message: "Successfully Updated"});
	  	}else{
	  		res.json({status: false, message: "Something Went Wrong"});
	  	}
	}
	catch(err) {
	  res.json({status: false, message: "Something Went Wrong"});
	}
  },

  getCount:async function(req, res, next){

  	var findRecord = await models.word_counter.findOne({where:{word: req.params.word}});

  	if(findRecord){
  		res.json(findRecord.counter);
  	}else{
  		res.json({status: false, message:"Word Not Found"});
  	}
  }


}