(function() {
  'use strict';

  const defaultLang = 'tr';
  let currentLang = sessionStorage.getItem('destinalite-lang') || defaultLang;

  const dict = {
    'Adres': 'Address',
    'Adres: Osmaniye, Türkiye  |  Tel: 0555 555 5555': 'Address: Osmaniye, Turkey  |  Phone: 0555 555 5555',
    'Aradığınız blog yazısı bulunamadı.': 'The blog post you are looking for was not found.',
    'Aradığınız eğitim programı bulunamadı.': 'The program you are looking for was not found.',
    'Aile & Çocuk Atölyesi': 'Family & Kids Workshop',
    'Ailelerin birlikte katılabileceği eğlenceli bir sanat atölyesi.': 'A fun art workshop where families can participate together.',
    'Alanında uzman, deneyimli ve öğrencilerine ilham veren eğitmenlerimiz.': 'Our instructors are experts, experienced, and inspiring to their students.',
    'Anasayfa': 'Home',
    'Ara': 'Search',
    'Aydınlık mod': 'Light mode',
    'Avrupa standartlarında eğitim': 'Education in European standards',
    'Açılış Gecesi': 'Opening Night',
    'Karanlık mod': 'Dark mode',
    'Bale': 'Ballet',
    'Bale (4-6 yaş)': 'Ballet (4-6 years)',
    'Bale (7-10 yaş)': 'Ballet (7-10 years)',
    'Bale (Point)': 'Ballet (Pointe)',
    'Bale (İleri)': 'Ballet (Advanced)',
    'Bale Atölyesi': 'Ballet Workshop',
    'Bale ve müzik eğitimi ile disiplin, estetik ve özgüven kazandırıyoruz.': 'We instill discipline, aesthetics, and self-confidence through ballet and music education.',
    'Biz Kimiz?': 'Who Are We?',
    'Bize Katılın': 'Join Us',
    'Bize Ulaşın': 'Contact Us',
    'Blog': 'Blog',
    'Blog | Destinalite': 'Blog | Destinalite',
    'Butik ve bireysel yaklaşım': 'Boutique and individual approach',
    'Cuma': 'Friday',
    'Cumartesi': 'Saturday',
    'Daha Fazla →': 'More →',
    'Deneme Dersine Davetlisiniz': 'You Are Invited to a Trial Lesson',
    'Detaylar': 'Details',
    'Detaylı Bilgi': 'More Info',
    'Devamını Oku →': 'Read More →',
    'Ders Programı': 'Class Schedule',
    'Ders Programı | Destinalite': 'Class Schedule | Destinalite',
    'Dil:': 'Language:',
    'Destinalite': 'Destinalite',
    'Destinalite İkon': 'Destinalite Icon',
    'Destinalite Sanat Akademisi': 'Destinalite Art Academy',
    'Destinalite Sanat Akademisi olarak bale, piyano ve şan eğitimleriyle çocukların ve gençlerin sanatsal yolculuklarına eşlik ediyoruz. Avrupa standartlarında, bireysel ve butik bir yaklaşımla her öğrencimizin potansiyelini keşfetmesini sağlıyoruz.': 'As Destinalite Art Academy, we accompany children and young people on their artistic journeys with ballet, piano, and voice training. With a European standard, individual and boutique approach, we enable every student to discover their potential.',
    'Destinalite Stüdyo': 'Destinalite Studio',
    'Destinalite | Sanat Akademisi': 'Destinalite | Art Academy',
    'E-posta': 'Email',
    'Eki': 'Oct',
    'Etkinlikler': 'Events',
    'Etkinlikler & Duyurular': 'Events & Announcements',
    'Etkinlikler & Duyurular | Destinalite': 'Events & Announcements | Destinalite',
    'Eğitim Kadromuz': 'Our Teaching Staff',
    'Eğitim Personeli': 'Teaching Staff',
    'Eğitim Personeli | Destinalite': 'Teaching Staff | Destinalite',
    'Eğitim Programları | Destinalite': 'Educational Programs | Destinalite',
    'Eğitim Programlarımız': 'Our Educational Programs',
    'Eğitimler': 'Programs',
    'Farkımız': 'Our Difference',
    'Haberler & İçerikler': 'News & Content',
    'Haftalık Ders Programı': 'Weekly Class Schedule',
    'Hakkımızda': 'About',
    'Hakkımızda | Destinalite': 'About | Destinalite',
    'Hata': 'Error',
    'Her öğrenciye sanatı sevdirmek, disiplinli çalışma alışkanlığı kazandırmak ve sahne özgüvenini artırmak.': 'To make every student love art, gain disciplined work habits, and increase stage self-confidence.',
    'Instagram': 'Instagram',
    'Kas': 'Nov',
    'Kayıt Ol': 'Register',
    'Kadro bilgileri yüklenirken hata oluştu.': 'An error occurred while loading staff information.',
    'Kendi özgün müfredatımız': 'Our own original curriculum',
    'Konser Salonu': 'Concert Hall',
    'Kültür Merkezi': 'Culture Center',
    'Kış Gösterisi': 'Winter Show',
    'Misyon & Vizyon': 'Mission & Vision',
    'Misyonumuz': 'Our Mission',
    'Neden Destinalite?': 'Why Destinalite?',
    'Neden Varız?': 'Why We Exist?',
    'Oca': 'Jan',
    'Osmaniye, Türkiye': 'Osmaniye, Turkey',
    'Osmaniye’nin ve bölgenin en donanımlı sanat akademisi olmak; öğrencilerimizi ulusal ve uluslararası platformlarda temsil etmek.': 'To become the most equipped art academy in Osmaniye and the region; to represent our students on national and international platforms.',
    'Pazartesi': 'Monday',
    'Perşembe': 'Thursday',
    'Piyano': 'Piano',
    'Piyano (Başlangıç)': 'Piano (Beginner)',
    'Piyano (Birebir)': 'Piano (One-to-One)',
    'Piyano (LCM Hazırlık)': 'Piano (LCM Prep)',
    'Piyano (Orta)': 'Piano (Intermediate)',
    'Piyano (Yetişkin)': 'Piano (Adult)',
    'Piyano (İlkokul)': 'Piano (Elementary)',
    'Piyano Resitali': 'Piano Recital',
    'Program Bulunamadı': 'Program Not Found',
    'Programlar yüklenirken hata oluştu.': 'An error occurred while loading programs.',
    'Program sezonluk değişiklik gösterebilir. Kesin saatler için lütfen randevu alın.': 'The program may vary seasonally. Please make an appointment for exact times.',
    'Programlar': 'Programs',
    'Programlar yaşa ve seviyeye göre gruplandırılır. Detaylı kayıt için': 'Programs are grouped by age and level. For detailed registration',
    'Programları İncele →': 'Explore Programs →',
    'Randevu': 'Appointment',
    'Randevu Al': 'Book Appointment',
    'Randevu Talebi Gönder': 'Send Appointment Request',
    'Sahne Sanatları': 'Performing Arts',
    'Salı': 'Tuesday',
    'Sanat Akademisi': 'Art Academy',
    'Sanat ve sosyal deneyim': 'Art and social experience',
    'Sanat yolculuğunuz için ilk adımı atın.': 'Take the first step for your art journey.',
    'Sanatla Büyüyen Çocuklar': 'Children Growing with Art',
    'Sanatla büyüyen çocuklar': 'Children growing with art',
    'Sezon ortası performans gala gecesi.': 'Mid-season performance gala night.',
    'Sezonun en coşkulu konseriyle yeni yılı karşılıyoruz.': 'We welcome the new year with the most enthusiastic concert of the season.',
    'Sınavlar': 'Exams',
    'Sonraki program': 'Next program',
    'Telefon': 'Phone',
    'Uluslararası Sertifika (LCM / Vaganova)': 'International Certificate (LCM / Vaganova)',
    'Uluslararası Sertifikalar': 'International Certificates',
    'Vizyonumuz': 'Our Vision',
    'WhatsApp': 'WhatsApp',
    'Yaklaşan Etkinlikler': 'Upcoming Events',
    'Yazı Bulunamadı': 'Post Not Found',
    'Yazılar yüklenirken hata oluştu.': 'An error occurred while loading posts.',
    'Yeni sezon açılış gecesinde öğrencilerimiz sahnede olacak.': 'Our students will be on stage at the new season opening night.',
    'Yukarı çık': 'Scroll to top',
    'Yükleniyor...': 'Loading...',
    'Yılbaşı Konseri': 'New Year Concert',
    'Önceki program': 'Previous program',
    'Özgün müfredatımız, deneyimli eğitmenlerimiz ve sıcak atmosferimizle öğrencilerimizin disiplin, özgüven ve estetik duygusu kazanmasına öncelik veriyoruz.': 'With our original curriculum, experienced instructors, and warm atmosphere, we prioritize our students gaining discipline, self-confidence, and a sense of aesthetics.',
    'Öğrencilerimizden duygusal bir piyano akşamı.': 'An emotional piano evening by our students.',
    'Öğrencilerimizi LCM (London College of Music) ve Vaganova metodu sınavlarına hazırlıyoruz.': 'We prepare our students for LCM (London College of Music) and Vaganova method exams.',
    'Ücretsiz Deneme Dersi': 'Free Trial Lesson',
    'Ücretsiz deneme atölyemizle tanışın, kayıtlar devam ediyor.': 'Meet our free trial workshop, registrations continue.',
    'İletişim': 'Contact',
    'İletişim | Destinalite': 'Contact | Destinalite',
    'İlgilenilen Program': 'Interested Program',
    'İçerikler': 'Contents',
    'Şan (Genel)': 'Voice (General)',
    'Şan (Genç)': 'Voice (Youth)',
    'Şan (Çocuk)': 'Voice (Children)',
    'Şub': 'Feb',
    '← Tüm Yazılar': '← All Posts',
    'iletişim': 'contact',
    'info@destinalite.com': 'info@destinalite.com',
    'sayfasına göz atabilirsiniz.': 'page.',
    '© 2025 Destinalite Sanat Akademisi': '© 2025 Destinalite Art Academy',
    '2. Oktav': '2nd Octave',
    '3. Oktav': '3rd Octave',
    '4. Oktav': '4th Octave',
    '5. Oktav': '5th Octave',
    'Çok yakın!': 'Very close!',
    'Hedef': 'Target',
    'Hedef Nota': 'Target Note',
    'Hedef oktavı belirleyin, sesi dinleyin ve frekansı yakalamaya çalışın.': 'Set the target octave, listen to the sound and try to match the frequency.',
    'Hedef: Bekleniyor...': 'Target: Waiting...',
    'Kulak Eğitimi': 'Ear Training',
    'Mikrofon erişimi reddedildi.': 'Microphone access denied.',
    'Mikrofonu Bağla': 'Connect Microphone',
    'Mükemmel Uyum!': 'Perfect Match!',
    '🎵 Sesi Dinle': '🎵 Listen to Sound',
    'Sesi Dinle': 'Listen to Sound',
    'Sistemi Durdur': 'Stop System',
    'Sizin Sesiniz': 'Your Voice',
    'Vokal & Frekans Analizi': 'Vocal & Frequency Analysis',
    'Vokal & Frekans Analizi | Destinalite': 'Vocal & Frequency Analysis | Destinalite',
    'Vokal Analizi': 'Vocal Analysis',
    'Yaklaşıyorsun...': 'Getting close...',
    'Yeni Nota Belirle': 'Set New Note'
  };

  const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE'];

  function normalizeKey(text) {
    return String(text).replace(/\u00A0/g, ' ').trim();
  }

  function translateTextNode(node) {
    const text = node.textContent;
    const key = normalizeKey(text);
    if (!key) return;
    const translated = dict[key];
    if (translated === undefined) return;
    const leading = text.match(/^\s*/)[0];
    const trailing = text.match(/\s*$/)[0];
    node.textContent = leading + translated + trailing;
  }

  function translateAttr(node, attr) {
    const val = node.getAttribute(attr);
    if (val === null) return;
    const key = normalizeKey(val);
    const translated = dict[key];
    if (translated !== undefined) {
      node.setAttribute(attr, translated);
    }
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (skipTags.includes(node.tagName)) return;
    translateAttr(node, 'placeholder');
    translateAttr(node, 'title');
    translateAttr(node, 'alt');
    translateAttr(node, 'aria-label');
    Array.from(node.childNodes).forEach(translateNode);
  }

  function updateButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle('text-gold', active);
      btn.classList.toggle('font-medium', active);
      btn.classList.toggle('text-mocha/70', !active);
    });
  }

  window.applyLanguage = function apply() {
    document.documentElement.lang = currentLang;
    if (currentLang === 'tr') {
      updateButtons();
      return;
    }
    translateNode(document.head);
    translateNode(document.body);
    updateButtons();
  };

  window.setLang = function(lang) {
    if (lang !== 'tr' && lang !== 'en') return;
    if (lang === currentLang) return;
    sessionStorage.setItem('destinalite-lang', lang);
    location.reload();
  };

  window.getCurrentLang = function() {
    return currentLang;
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // Theme toggle
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    const sunIcon = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    const storedTheme = localStorage.getItem('destinalite-theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    function updateThemeUI() {
      const isDark = document.documentElement.classList.contains('dark');
      const lightLabel = currentLang === 'en' ? 'Light mode' : 'Aydınlık mod';
      const darkLabel = currentLang === 'en' ? 'Dark mode' : 'Karanlık mod';
      themeToggles.forEach(toggle => {
        const icon = toggle.querySelector('svg');
        if (icon) icon.innerHTML = isDark ? sunIcon : moonIcon;
        toggle.setAttribute('aria-label', isDark ? lightLabel : darkLabel);
        toggle.setAttribute('title', isDark ? lightLabel : darkLabel);
      });
    }
    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('destinalite-theme', isDark ? 'dark' : 'light');
        updateThemeUI();
      });
    });
    updateThemeUI();

    // Mobile floating action button toggle
    const mobileFabToggle = document.getElementById('mobileFabToggle');
    const mobileFabMenu = document.getElementById('mobileFabMenu');
    if (mobileFabToggle && mobileFabMenu) {
      mobileFabToggle.addEventListener('click', () => {
        mobileFabToggle.classList.toggle('open');
        mobileFabMenu.classList.toggle('open');
      });
    }
  });
})();
