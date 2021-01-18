const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında','footer':'Mustafa İsmail Türkoğlu 2021'});
}

module.exports={

	hakkinda
}