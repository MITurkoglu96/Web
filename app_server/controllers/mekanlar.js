const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste', 
             { 'baslik': 'Anasayfa',
               'sayfaBaslik':{
                   'siteAd': 'Mekan32',
                   'aciklama': 'Isparta civarindaki mekanlari kesfedin'
               },
                    'mekanlar': [
                        {
                            'ad':'Starbucks',
                            'adres':'Centrum Garden AVM',
                            'puan':4,
                            'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
                            'mesafe':'3km'
                        },
                        {
                          'ad':'Antep Sofrası',
                          'adres':'İyaşPark Yanı',
                          'puan':4,
                          'imkanlar':['Kebap Çeşitleri','Lahmacun&Pide','Baklava&Tatlı'],
                          'mesafe':'3km'                            
                        },             
                        {
                            'ad':'Antre Gurme Cafe Kitchen',
                            'adres':'Centrum Garden&İyaşPark AVM',
                            'puan':4,
                            'imkanlar':['Steak&Izgara&Tava ','Kahvaltı','Kebap Çeşitleri'],
                            'mesafe':'3km'                            
                        },
                        {
                          'ad':'Gloria Jeans',
                          'adres':'SDU Doğu Kampüsü',
                          'puan':3,
                          'imkanlar':['Dünya Kahveleri','Çay','Pastalar','Kekler'],
                          'mesafe':'10km'                            
                        },
                        {
                            'ad':'Mackbear Coffee',
                            'adres':'Fatih Mahallesi',
                            'puan':3,
                            'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
                            'mesafe':'3km'                            
                        },
                                                
                        {
                            'ad':'Gözde Balık Evi',
                            'adres':'Merkez',
                            'puan':3,
                            'imkanlar':['Balık Çeşitleri','Izgara Balık'],
                            'mesafe':'1km'                            
                        },

                    ]
             
            });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', { 
      'baslik': 'Mekan Bilgisi',
      'sayfaBaslik': 'Starbucks',
      'mekanBilgisi':{
          'ad':'Starbucks',
          'adres':'Centrum Garden',
          'puan':4,
          'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
          'koordinatlar':{
              'enlem':37.78185,
              'boylam':30.566034
           },
           'saatler':[
               {
                    'gunler':'Pazartesi-Cuma',
                    'acilis':'7:00',
                    'kapanis':'23:00',
                    'kapali':false
               },
               {
                    'gunler':'Cumartesi',
                    'acilis':'9:00',
                    'kapanis':'22:30',
                    'kapali':false                    
               },
               {
                    'gunler':'Pazar',
                    'kapali':true                  
               }
           ],
           'yorumlar':[
               {
                   'yorumYapan':'Mustafa İsmail Türkoğlu',
                   'puan':4,
                   'tarih':'13 Ekim 2019',
                   'yorumMetni':'Kahveleri güzel'
            }
        ]
        
          
    }
});
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}
