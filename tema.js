var i = 1;
function tema() {

    switch (i) {
        case 1:
            document.documentElement.style.setProperty('--s-renk', '#111');
            document.documentElement.style.setProperty('--s-yazı', '#fff');
            document.documentElement.style.setProperty('--ana-renk', '#3b3b3b');
            document.documentElement.style.setProperty('--ana-yazı', '#ffffff');
            document.documentElement.style.setProperty('--ana-yazı-onizleme', '#858585');
            document.documentElement.style.setProperty('--ana-yazı-başlık', '#e7e7e7');
            document.documentElement.style.setProperty('--ana-yazı-tarih', '#adadad');
            i = i + 1;
            break;
        case 2:
            document.documentElement.style.setProperty('--s-renk', '#610000');
            document.documentElement.style.setProperty('--s-yazı', '#fff');
            document.documentElement.style.setProperty('--ana-renk', '#fff');
            document.documentElement.style.setProperty('--ana-yazı', '#550000');
            document.documentElement.style.setProperty('--ana-yazı-onizleme', '#502121');
            document.documentElement.style.setProperty('--ana-yazı-başlık', '#750000');
            document.documentElement.style.setProperty('--ana-yazı-tarih', '#250202');
            i++;
            break;
        case 3:
            document.documentElement.style.setProperty('--s-renk', '#111');
            document.documentElement.style.setProperty('--s-yazı', '#fff');
            document.documentElement.style.setProperty('--ana-renk', '#fff');
            document.documentElement.style.setProperty('--ana-yazı', '#111');
            document.documentElement.style.setProperty('--ana-yazı-onizleme', '#444');
            document.documentElement.style.setProperty('--ana-yazı-başlık', '#111');
            document.documentElement.style.setProperty('--ana-yazı-tarih', '#494949');
            i++;
            break;
        case 4:
            document.documentElement.style.setProperty('--s-renk', '#30007e');
            document.documentElement.style.setProperty('--s-yazı', '#fff');
            document.documentElement.style.setProperty('--ana-renk', '#000000');
            document.documentElement.style.setProperty('--ana-yazı', '#fff');
            document.documentElement.style.setProperty('--ana-yazı-onizleme', '#fff');
            document.documentElement.style.setProperty('--ana-yazı-başlık', '#fff');
            document.documentElement.style.setProperty('--ana-yazı-tarih', '#fff');
            i = 1;
            break;
        default:
            i = 1;
            break;
    }
}
