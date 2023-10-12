import { readFileSync, writeFileSync } from 'fs';

// JSON dosyasını oku
const jsonData = fs.readFileSync('db.json', 'utf-8');
const db = JSON.parse(jsonData);

function create() {
    const yeniVeri = {
        b1: {
            header: '123',
            content: '123',
            short_content: '123',
            date: '123',
        }
    };

    db.b1 = yeniVeri;

    // JSON nesnesini dizeye dönüştür
    const yeniJsonData = JSON.stringify(db, null, 2); // null ve 2, JSON formatını düzenlemek için girintileme ve boşluk ayarlarıdır.

    // Yeni veriyi JSON dosyasına yaz
    fs.writeFileSync('db.json', yeniJsonData, 'utf-8');
}
