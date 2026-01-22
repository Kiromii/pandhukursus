// Data Kursus Pandhu - Platform Pembelajaran untuk Semua Usia
// Format: Array of Objects

const coursesData = [
  // === KATEGORI: MEMASAK ===
  {
    id: 1,
    title: 'Belajar Masak Seru untuk Si Kecil',
    category: 'Memasak',
    level: 'PAUD',
    age_range: '4-6 tahun',
    description: 'Ajak anak belajar memasak makanan sederhana sambil bermain! Mulai dari membuat roti isi, jus buah, hingga kue lucu yang aman dan menyenangkan.',
    duration: '4 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 85000,
    instructor: 'Chef Mama Rina',
    skills_covered: ['Mengenal bahan makanan', 'Motorik halus', 'Kreativitas', 'Kemandirian'],
    thumbnail_url: '/img/courses/masak-anak.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Masak Bekal Sehat & Kreatif',
    category: 'Memasak',
    level: 'Anak',
    age_range: '7-12 tahun',
    description: 'Bikin bekal sekolah jadi lebih seru! Belajar bikin sandwich unik, onigiri lucu, dan snack sehat yang bisa dibawa ke sekolah.',
    duration: '6 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 120000,
    instructor: 'Chef Mama Rina',
    skills_covered: ['Food preparation', 'Nutrisi dasar', 'Kreativitas', 'Kebersihan dapur'],
    thumbnail_url: '/img/courses/bekal-sehat.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Kuliner Nusantara untuk Pemula',
    category: 'Memasak',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Pelajari resep autentik masakan Indonesia dari berbagai daerah. Dari rendang Padang, gudeg Jogja, hingga papeda Papua!',
    duration: '12 jam',
    total_meetings: 12,
    learning_mode: 'Hybrid',
    price: 350000,
    instructor: 'Chef William Gozali',
    skills_covered: ['Teknik memasak tradisional', 'Bumbu rempah', 'Plating', 'Food history'],
    thumbnail_url: '/img/courses/kuliner-nusantara.jpg',
    is_popular: true,
    rating: 4.9,
  },

  // === KATEGORI: MENGGAMBAR & SENI ===
  {
    id: 4,
    title: 'Mewarnai & Menggambar Ceria',
    category: 'Menggambar & Seni',
    level: 'PAUD',
    age_range: '3-6 tahun',
    description: 'Kelas seni yang penuh warna untuk balita! Belajar mewarnai, menggambar bentuk dasar, dan berkreasi dengan berbagai media.',
    duration: '5 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 75000,
    instructor: 'Kak Putri Artika',
    skills_covered: ['Koordinasi tangan-mata', 'Pengenalan warna', 'Ekspresi diri', 'Imajinasi'],
    thumbnail_url: '/img/courses/mewarnai-paud.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Komik & Ilustrasi Digital',
    category: 'Menggambar & Seni',
    level: 'Remaja',
    age_range: '13-18 tahun',
    description: 'Wujudkan imajinasi jadi komik keren! Belajar dari sketsa karakter, storytelling visual, hingga pewarnaan digital pakai software gratis.',
    duration: '15 jam',
    total_meetings: 15,
    learning_mode: 'Online',
    price: 275000,
    instructor: 'Kak Dimas Illustra',
    skills_covered: ['Character design', 'Digital coloring', 'Storytelling', 'Panel layout'],
    thumbnail_url: '/img/courses/komik-digital.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Lukis Cat Minyak untuk Dewasa',
    category: 'Menggambar & Seni',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Relaksasi sambil berkarya! Pelajari teknik lukis cat minyak dari dasar hingga menghasilkan karya yang bisa dipajang di rumah.',
    duration: '16 jam',
    total_meetings: 8,
    learning_mode: 'Offline',
    price: 650000,
    instructor: 'Maestro Hendra Gunawan',
    skills_covered: ['Teknik cat minyak', 'Komposisi', 'Pencampuran warna', 'Tekstur'],
    thumbnail_url: '/img/courses/lukis-cat-minyak.jpg',
    is_popular: false,
    rating: 4.7,
  },

  // === KATEGORI: MUSIK ===
  {
    id: 7,
    title: 'Bernyanyi & Bergerak Asyik',
    category: 'Musik',
    level: 'PAUD',
    age_range: '3-6 tahun',
    description: 'Kelas musik yang bikin anak semangat! Nyanyi lagu anak-anak sambil bergerak dan mengenal alat musik sederhana.',
    duration: '4 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 95000,
    instructor: 'Kak Citra Musik',
    skills_covered: ['Ritme dasar', 'Koordinasi', 'Percaya diri', 'Ekspresi'],
    thumbnail_url: '/img/courses/musik-paud.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 8,
    title: 'Gitar Akustik dari Nol',
    category: 'Musik',
    level: 'Remaja',
    age_range: '13-18 tahun',
    description: 'Pengen bisa main gitar buat nemenin ngumpul sama temen? Kelas ini cocok buat kamu yang baru pegang gitar!',
    duration: '12 jam',
    total_meetings: 12,
    learning_mode: 'Online',
    price: 225000,
    instructor: 'Kak Ariel Peterpan',
    skills_covered: ['Chord dasar', 'Strumming', 'Fingerpicking', 'Baca tab gitar'],
    thumbnail_url: '/img/courses/gitar-akustik.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 9,
    title: 'Piano Klasik untuk Semua Usia',
    category: 'Musik',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Tidak ada kata terlambat untuk belajar piano! Kelas santai untuk dewasa yang ingin mewujudkan mimpi bermain piano.',
    duration: '20 jam',
    total_meetings: 16,
    learning_mode: 'Hybrid',
    price: 550000,
    instructor: 'Miss Anindya Pradipta',
    skills_covered: ['Not balok', 'Teknik jari', 'Repertoire klasik', 'Sight reading'],
    thumbnail_url: '/img/courses/piano-klasik.jpg',
    is_popular: false,
    rating: 4.7,
  },

  // === KATEGORI: BAHASA ===
  {
    id: 10,
    title: 'English Fun for Kids',
    category: 'Bahasa',
    level: 'Anak',
    age_range: '7-12 tahun',
    description: 'Belajar bahasa Inggris jadi seru! Lewat lagu, games, dan cerita menarik yang bikin anak jago ngomong English.',
    duration: '10 jam',
    total_meetings: 20,
    learning_mode: 'Online',
    price: 175000,
    instructor: 'Miss Sarah Johnson',
    skills_covered: ['Vocabulary', 'Speaking', 'Listening', 'Fun grammar'],
    thumbnail_url: '/img/courses/english-kids.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 11,
    title: 'Bahasa Jepang untuk Wibu',
    category: 'Bahasa',
    level: 'Remaja',
    age_range: '13-18 tahun',
    description: 'Suka anime dan manga? Yuk belajar bahasa Jepang biar makin paham sama anime favorit tanpa subtitle!',
    duration: '15 jam',
    total_meetings: 15,
    learning_mode: 'Online',
    price: 250000,
    instructor: 'Sensei Tanaka Yuki',
    skills_covered: ['Hiragana Katakana', 'Kaiwa', 'Budaya Jepang', 'Kanji dasar'],
    thumbnail_url: '/img/courses/bahasa-jepang.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 12,
    title: 'Business English Profesional',
    category: 'Bahasa',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Tingkatkan karir dengan kemampuan bahasa Inggris bisnis! Cocok untuk meeting, presentasi, dan email profesional.',
    duration: '18 jam',
    total_meetings: 12,
    learning_mode: 'Online',
    price: 475000,
    instructor: 'Mr. David Thompson',
    skills_covered: ['Business writing', 'Presentation skills', 'Negotiation', 'Corporate vocabulary'],
    thumbnail_url: '/img/courses/business-english.jpg',
    is_popular: true,
    rating: 4.9,
  },

  // === KATEGORI: TEKNOLOGI & CODING ===
  {
    id: 13,
    title: 'Coding Seru dengan Scratch',
    category: 'Teknologi & Coding',
    level: 'Anak',
    age_range: '8-12 tahun',
    description: 'Belajar coding sambil bikin game dan animasi lucu! Pakai Scratch yang gampang dan menyenangkan.',
    duration: '10 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 195000,
    instructor: 'Kak Budi Coding',
    skills_covered: ['Logic thinking', 'Problem solving', 'Kreativitas', 'Game design dasar'],
    thumbnail_url: '/img/courses/scratch-coding.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 14,
    title: 'Web Development untuk SMA',
    category: 'Teknologi & Coding',
    level: 'Remaja',
    age_range: '15-18 tahun',
    description: 'Bikin website keren dari nol! Belajar HTML, CSS, JavaScript dan buat portfolio yang bisa dipamerin.',
    duration: '20 jam',
    total_meetings: 16,
    learning_mode: 'Online',
    price: 325000,
    instructor: 'Kak Reza Developer',
    skills_covered: ['HTML & CSS', 'JavaScript basics', 'Responsive design', 'Git dasar'],
    thumbnail_url: '/img/courses/web-dev.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 15,
    title: 'Python untuk Data Science',
    category: 'Teknologi & Coding',
    level: 'Dewasa',
    age_range: '20+ tahun',
    description: 'Kuasai Python dan mulai karir di bidang data! Dari dasar programming hingga analisis data dengan pandas.',
    duration: '30 jam',
    total_meetings: 20,
    learning_mode: 'Online',
    price: 599000,
    instructor: 'Mentor Ahmad Data',
    skills_covered: ['Python fundamentals', 'Pandas', 'Data visualization', 'Basic ML'],
    thumbnail_url: '/img/courses/python-data.jpg',
    is_popular: true,
    rating: 4.9,
  },

  // === KATEGORI: DESAIN ===
  {
    id: 16,
    title: 'Desain Grafis dengan Canva',
    category: 'Desain',
    level: 'Remaja',
    age_range: '13-18 tahun',
    description: 'Bikin desain aesthetic pakai Canva! Cocok buat poster, feeds Instagram, sampai presentasi keren.',
    duration: '8 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 145000,
    instructor: 'Kak Nadia Design',
    skills_covered: ['Layout design', 'Typography', 'Color theory', 'Social media design'],
    thumbnail_url: '/img/courses/canva-design.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 17,
    title: 'UI/UX Design Bootcamp',
    category: 'Desain',
    level: 'Dewasa',
    age_range: '20+ tahun',
    description: 'Jadi UI/UX Designer profesional! Pelajari Figma, user research, dan bikin portfolio yang siap kerja.',
    duration: '40 jam',
    total_meetings: 20,
    learning_mode: 'Online',
    price: 899000,
    instructor: 'Mentor Rizky UX',
    skills_covered: ['Figma', 'User research', 'Wireframing', 'Prototyping'],
    thumbnail_url: '/img/courses/uiux-bootcamp.jpg',
    is_popular: true,
    rating: 4.9,
  },

  // === KATEGORI: PUBLIC SPEAKING ===
  {
    id: 18,
    title: 'Berani Bicara untuk Anak',
    category: 'Public Speaking',
    level: 'Anak',
    age_range: '7-12 tahun',
    description: 'Latih anak jadi percaya diri berbicara di depan umum! Mulai dari perkenalan diri sampai bercerita.',
    duration: '6 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 135000,
    instructor: 'Kak Farhan Speaker',
    skills_covered: ['Percaya diri', 'Artikulasi', 'Body language', 'Storytelling'],
    thumbnail_url: '/img/courses/public-speaking-anak.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 19,
    title: 'Public Speaking untuk Profesional',
    category: 'Public Speaking',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Kuasai seni berbicara di depan audiens! Cocok untuk presentasi kerja, pitching, dan leadership.',
    duration: '12 jam',
    total_meetings: 8,
    learning_mode: 'Hybrid',
    price: 425000,
    instructor: 'Coach Mario Teguh Jr',
    skills_covered: ['Presentation skills', 'Voice projection', 'Handling Q&A', 'Persuasion'],
    thumbnail_url: '/img/courses/public-speaking-pro.jpg',
    is_popular: true,
    rating: 4.9,
  },

  // === KATEGORI: KETERAMPILAN HIDUP ===
  {
    id: 20,
    title: 'Belajar Mandiri untuk Balita',
    category: 'Keterampilan Hidup',
    level: 'PAUD',
    age_range: '4-6 tahun',
    description: 'Ajari anak kebiasaan baik sehari-hari! Dari sikat gigi, merapikan mainan, hingga memakai baju sendiri.',
    duration: '5 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 95000,
    instructor: 'Bunda Ratna Montessori',
    skills_covered: ['Kemandirian', 'Tanggung jawab', 'Kebersihan diri', 'Rutinitas'],
    thumbnail_url: '/img/courses/mandiri-balita.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 21,
    title: 'Financial Literacy untuk Gen Z',
    category: 'Keterampilan Hidup',
    level: 'Remaja',
    age_range: '15-18 tahun',
    description: 'Biar nggak bokek terus! Belajar nabung, investasi dasar, dan atur uang jajan dengan bijak.',
    duration: '8 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 175000,
    instructor: 'Kak Felicia Finance',
    skills_covered: ['Budgeting', 'Menabung', 'Investasi dasar', 'Financial goals'],
    thumbnail_url: '/img/courses/financial-genz.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 22,
    title: 'Time Management & Produktivitas',
    category: 'Keterampilan Hidup',
    level: 'Dewasa',
    age_range: '20+ tahun',
    description: 'Atur waktu lebih efektif dan capai goals lebih cepat! Pelajari teknik produktivitas yang sudah terbukti.',
    duration: '6 jam',
    total_meetings: 6,
    learning_mode: 'Online',
    price: 225000,
    instructor: 'Coach Denny Santoso',
    skills_covered: ['Time blocking', 'Prioritization', 'Focus techniques', 'Goal setting'],
    thumbnail_url: '/img/courses/time-management.jpg',
    is_popular: false,
    rating: 4.7,
  },

  // === KATEGORI: BISNIS & UMKM ===
  {
    id: 23,
    title: 'Jualan Online dari HP',
    category: 'Bisnis & UMKM',
    level: 'Dewasa',
    age_range: '18+ tahun',
    description: 'Mulai bisnis online cuma modal HP! Belajar jualan di marketplace, kelola orderan, dan promosi efektif.',
    duration: '10 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 195000,
    instructor: 'Mentor Sultan Dropship',
    skills_covered: ['Marketplace', 'Product photography', 'Customer service', 'Basic marketing'],
    thumbnail_url: '/img/courses/jualan-online.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 24,
    title: 'UMKM Go Digital',
    category: 'Bisnis & UMKM',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Transformasi usaha tradisional ke digital! Cocok untuk pemilik warung, toko, atau usaha rumahan.',
    duration: '12 jam',
    total_meetings: 8,
    learning_mode: 'Hybrid',
    price: 285000,
    instructor: 'Coach Hermawan UMKM',
    skills_covered: ['Digital presence', 'Social media marketing', 'Pembukuan digital', 'E-commerce'],
    thumbnail_url: '/img/courses/umkm-digital.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 25,
    title: 'Content Creator 101',
    category: 'Bisnis & UMKM',
    level: 'Remaja',
    age_range: '15-20 tahun',
    description: 'Jadi content creator yang cuan! Belajar bikin konten viral, grow followers, dan monetisasi akun.',
    duration: '12 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 245000,
    instructor: 'Kak Fadil Creator',
    skills_covered: ['Content planning', 'Video editing', 'Growth hacking', 'Monetization'],
    thumbnail_url: '/img/courses/content-creator.jpg',
    is_popular: true,
    rating: 4.8,
  },

  // === KATEGORI: PARENTING ===
  {
    id: 26,
    title: 'Parenting Anak Usia Dini',
    category: 'Parenting',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Panduan lengkap untuk orang tua baru! Pahami perkembangan anak dan cara stimulasi yang tepat.',
    duration: '10 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 275000,
    instructor: 'Dr. Sari Pediatri',
    skills_covered: ['Child development', 'Positive parenting', 'Stimulasi anak', 'Nutrisi anak'],
    thumbnail_url: '/img/courses/parenting-paud.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 27,
    title: 'Mendampingi Anak Remaja',
    category: 'Parenting',
    level: 'Dewasa',
    age_range: '35+ tahun',
    description: 'Tips berkomunikasi dengan remaja tanpa drama! Pahami psikologi remaja dan bangun hubungan yang sehat.',
    duration: '8 jam',
    total_meetings: 6,
    learning_mode: 'Online',
    price: 245000,
    instructor: 'Psikolog Kak Tasya',
    skills_covered: ['Teen psychology', 'Communication skills', 'Boundary setting', 'Digital parenting'],
    thumbnail_url: '/img/courses/parenting-remaja.jpg',
    is_popular: true,
    rating: 4.8,
  },
  {
    id: 28,
    title: 'Montessori at Home',
    category: 'Parenting',
    level: 'Dewasa',
    age_range: '25+ tahun',
    description: 'Terapkan metode Montessori di rumah tanpa perlu alat mahal! Buat lingkungan belajar yang mendukung.',
    duration: '12 jam',
    total_meetings: 10,
    learning_mode: 'Online',
    price: 325000,
    instructor: 'Bunda Ratna Montessori',
    skills_covered: ['Montessori principles', 'DIY learning tools', 'Prepared environment', 'Observation'],
    thumbnail_url: '/img/courses/montessori-home.jpg',
    is_popular: false,
    rating: 4.7,
  },

  // === TAMBAHAN KATEGORI CAMPURAN ===
  {
    id: 29,
    title: 'Robotika & Arduino untuk Anak',
    category: 'Teknologi & Coding',
    level: 'Anak',
    age_range: '10-14 tahun',
    description: 'Bikin robot sederhana pakai Arduino! Seru banget belajar elektronika sambil coding.',
    duration: '15 jam',
    total_meetings: 12,
    learning_mode: 'Hybrid',
    price: 395000,
    instructor: 'Kak Rendra Robotics',
    skills_covered: ['Basic electronics', 'Arduino programming', 'Problem solving', 'Project building'],
    thumbnail_url: '/img/courses/robotika-anak.jpg',
    is_popular: true,
    rating: 4.9,
  },
  {
    id: 30,
    title: 'Fotografi HP untuk Pemula',
    category: 'Menggambar & Seni',
    level: 'Remaja',
    age_range: '13-25 tahun',
    description: 'Foto aesthetic cuma modal HP! Belajar komposisi, lighting, dan editing yang bikin feed makin kece.',
    duration: '8 jam',
    total_meetings: 8,
    learning_mode: 'Online',
    price: 165000,
    instructor: 'Kak Vino Photography',
    skills_covered: ['Composition', 'Natural lighting', 'Mobile editing', 'Feed aesthetic'],
    thumbnail_url: '/img/courses/fotografi-hp.jpg',
    is_popular: true,
    rating: 4.8,
  },
];

// Helper function untuk format harga ke Rupiah
export const formatPrice = (price) => {
  if (price === 0) return 'Gratis';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Helper function untuk mendapatkan kategori unik
export const getUniqueCategories = () => {
  const categories = [...new Set(coursesData.map((course) => course.category))];
  return ['Semua', ...categories];
};

// Helper function untuk mendapatkan level unik
export const getUniqueLevels = () => {
  const levels = [...new Set(coursesData.map((course) => course.level))];
  return ['Semua', ...levels];
};

// Helper function untuk filter kursus
export const filterCourses = (courses, { category, level, searchQuery, priceRange }) => {
  let filtered = [...courses];

  if (category && category !== 'Semua') {
    filtered = filtered.filter((course) => course.category === category);
  }

  if (level && level !== 'Semua') {
    filtered = filtered.filter((course) => course.level === level);
  }

  if (searchQuery && searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter((course) => course.title.toLowerCase().includes(query) || course.instructor.toLowerCase().includes(query) || course.category.toLowerCase().includes(query) || course.description.toLowerCase().includes(query));
  }

  if (priceRange) {
    const [min, max] = priceRange;
    filtered = filtered.filter((course) => course.price >= min && course.price <= max);
  }

  return filtered;
};

// Helper function untuk mendapatkan kursus populer
export const getPopularCourses = (limit = 6) => {
  return coursesData
    .filter((course) => course.is_popular)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// Helper function untuk mendapatkan kursus berdasarkan kategori
export const getCoursesByCategory = (category, limit = 6) => {
  return coursesData.filter((course) => course.category === category).slice(0, limit);
};

// Helper function untuk mendapatkan kursus berdasarkan ID
export const getCourseById = (id) => {
  return coursesData.find((course) => course.id === parseInt(id));
};

export default coursesData;
