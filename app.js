fetch('db.json')
    .then(response => response.json())
    .then(data => {
        // JSON verilerini 'data' değişkenine aldık
        console.log(data);
    });

    const yeniVeri = {
        başlık: 'Yeni Başlık',
        içerik: 'Yeni İçerik'
    };
    
    data.b1 = yeniVeri;
    