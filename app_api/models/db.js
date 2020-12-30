var mongoose = require('mongoose');
//var dbURI = 'mongodb://localhost/mekan32'; 
var dbURI= 'mongodb+srv://mekan32:webTurkoglu@mekan32.73cov.mongodb.net/mekan32?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true}); 

//Bağlantı  kurulduğunda konsola baglanti bilgisini yaz
mongoose.connection.on('connected', function () {
    console.log('Mongoose ' + dbURI+ 
      ' adresindeki veritabanına bağlandı\n');
  });
//Bağlantı hatası olduğunda konsola hata bilgisini yaz
mongoose.connection.on('error',function (err) {
    console.log('Mongoose bağlantı hatası\n:' + err);
  });
//Bağlantı  kesildiğinde konsola kesilme bilgisini yaz
mongoose.connection.on('error',function (err) {
    console.log('Mongoose bağlantı hatası\n:' + err);
  });
//kapatma fonksiyonu
kapat = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose kapatıldı\n' + msg);
        callback();
    });
};
// nodemon için ayrı bir kapatma işlemi gerekli
process.once('SIGUSR2', function() {
    kapat('nodemon kapatıldı\n', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// Uygulama kapandığında kapat
process.on('SIGINT', function() {
    kapat('Uygulama kapatıldı\n', function() {
        process.exit(0);
    });
});
// Herokudan kapatma işlemi gerçekleşirse
process.on('SIGTERM', function() {
    kapat('heroku kapatıldı\n', function() {
        process.exit(0);
    });
});

require('./mekansema'); 
