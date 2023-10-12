<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yeni Post Ekle</title>
</head>
<body>
    <h1>Yeni Post Ekle</h1>
    <form id="yeni-post-form" action="ekle.php" method="post">
        <label for="header">Başlık:</label>
        <input type="text" id="header" name="header"><br>

        <label for="content">İçerik:</label>
        <textarea id="content" name="content" rows="4"></textarea><br>

        <label for="short-content">Kısa İçerik:</label>
        <input type="text" id="short-content" name="short-content"><br>

        <label for="date">Tarih:</label>
        <input type="datetime-local" id="date" name="date"><br>

        <label for="author">Yazar:</label>
        <input type="text" id="author" name="author"><br>

        <input type="submit" value="Yeni Post Ekle">
    </form>

    <div id="yazi-listesi">
        <!-- Yazıların listeleneceği alan -->
    </div>
</body>
</html>
