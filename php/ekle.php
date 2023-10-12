<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Veritabanı bağlantısı kurun (veritabanı bilgilerini güncelleyin)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "admin";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Veritabanı bağlantı hatasını kontrol edin
    if ($conn->connect_error) {
        die("Veritabanı bağlantı hatası: " . $conn->connect_error);
    }

    // Formdan verileri al
    $header = $_POST["header"];
    $content = $_POST["content"];
    $shortContent = $_POST["short-content"];
    $date = $_POST["date"];
    $author = $_POST["author"];

    // Veritabanına yeni sayfayı eklemek için SQL sorgusu oluşturun
    $sql = "INSERT INTO contents (header, content, `short-content`, date, author) VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $header, $content, $shortContent, $date, $author);

    // SQL sorgusunu çalıştırın ve yeni sayfayı ekleyin
    if ($stmt->execute() === TRUE) {
        echo "Yeni sayfa başarıyla eklendi.";

        // Veritabanından yeni sayfa kimliğini alın
        $newPageId = $stmt->insert_id;

        // Yeni sayfa dosyasını oluşturun
        $pageContent = '';
    

        $newPageFileName = "b$newPageId.html"; // Yeni sayfa dosya adı

        // Yeni sayfa dosyasını oluşturun ve içeriği ekleyin
        file_put_contents($newPageFileName, $pageContent);

        // Veritabanı bağlantısını kapatın
        $stmt->close();
        $conn->close();
    } else {
        echo "Sayfa eklenirken bir hata oluştu: " . $conn->error;
    }

    // Veritabanı bağlantısını kapatın
    $stmt->close();
    $conn->close();
}
?>
