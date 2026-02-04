// Data Soal Latihan untuk setiap Kursus
// Setiap kursus memiliki 20 soal yang dibagi menjadi 4 part (5 soal per part)

export const quizData = {
  // Kursus 1: Data Science dan Machine Learning dengan Python
  1: {
    courseTitle: 'Data Science dan Machine Learning dengan Python',
    totalQuestions: 20,
    parts: [
      {
        id: 1,
        title: 'Part 1: Dasar-dasar Python',
        description: 'Memahami sintaks dasar dan struktur data Python',
        questions: [
          {
            id: 1,
            question: 'Apa output dari kode berikut: print(type([1, 2, 3]))?',
            options: ["<class 'list'>", "<class 'tuple'>", "<class 'array'>", "<class 'set'>"],
            correctAnswer: 0,
            explanation: "Dalam Python, [1, 2, 3] adalah sebuah list, sehingga type() akan mengembalikan <class 'list'>",
          },
          {
            id: 2,
            question: 'Library Python mana yang paling umum digunakan untuk manipulasi data?',
            options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
            correctAnswer: 1,
            explanation: 'Pandas adalah library yang paling umum digunakan untuk manipulasi dan analisis data tabular',
          },
          {
            id: 3,
            question: 'Apa fungsi dari method .head() pada DataFrame Pandas?',
            options: ['Menampilkan 5 baris pertama', 'Menampilkan 5 baris terakhir', 'Menampilkan header kolom', 'Menghitung jumlah baris'],
            correctAnswer: 0,
            explanation: '.head() menampilkan 5 baris pertama dari DataFrame secara default',
          },
          {
            id: 4,
            question: 'Cara membuat virtual environment di Python adalah?',
            options: ['python -m venv env', 'pip install venv', 'python create env', 'make venv'],
            correctAnswer: 0,
            explanation: 'python -m venv env adalah perintah standar untuk membuat virtual environment',
          },
          {
            id: 5,
            question: 'Apa perbedaan utama antara list dan tuple di Python?',
            options: ['List mutable, tuple immutable', 'Tuple mutable, list immutable', 'Keduanya mutable', 'Keduanya immutable'],
            correctAnswer: 0,
            explanation: 'List bersifat mutable (dapat diubah), sedangkan tuple bersifat immutable (tidak dapat diubah)',
          },
        ],
      },
      {
        id: 2,
        title: 'Part 2: Analisis Data',
        description: 'Teknik analisis dan visualisasi data',
        questions: [
          {
            id: 6,
            question: 'Library mana yang digunakan untuk membuat visualisasi data di Python?',
            options: ['Pandas', 'Matplotlib', 'NumPy', 'SciPy'],
            correctAnswer: 1,
            explanation: 'Matplotlib adalah library standar untuk membuat grafik dan visualisasi di Python',
          },
          {
            id: 7,
            question: 'Fungsi describe() pada Pandas digunakan untuk?',
            options: ['Menampilkan statistik deskriptif', 'Mendeskripsikan tipe data', 'Mengubah nama kolom', 'Menggabungkan DataFrame'],
            correctAnswer: 0,
            explanation: 'describe() menghasilkan statistik deskriptif seperti mean, std, min, max, dll',
          },
          {
            id: 8,
            question: 'Bagaimana cara menghitung korelasi antar kolom di Pandas?',
            options: ['df.correlate()', 'df.corr()', 'df.correlation()', 'df.cor()'],
            correctAnswer: 1,
            explanation: 'Method .corr() menghitung korelasi Pearson antar kolom numerik',
          },
          {
            id: 9,
            question: 'Apa itu outlier dalam analisis data?',
            options: ['Nilai yang sangat berbeda dari data lainnya', 'Nilai yang hilang', 'Nilai rata-rata', 'Nilai median'],
            correctAnswer: 0,
            explanation: 'Outlier adalah data point yang sangat berbeda atau menyimpang jauh dari data lainnya',
          },
          {
            id: 10,
            question: 'Seaborn adalah library untuk?',
            options: ['Machine Learning', 'Web Scraping', 'Visualisasi Statistik', 'Database'],
            correctAnswer: 2,
            explanation: 'Seaborn adalah library visualisasi statistik yang dibangun di atas Matplotlib',
          },
        ],
      },
      {
        id: 3,
        title: 'Part 3: Machine Learning Dasar',
        description: 'Konsep dan algoritma ML fundamental',
        questions: [
          {
            id: 11,
            question: 'Apa perbedaan antara supervised dan unsupervised learning?',
            options: ['Supervised memerlukan label, unsupervised tidak', 'Unsupervised memerlukan label, supervised tidak', 'Keduanya memerlukan label', 'Keduanya tidak memerlukan label'],
            correctAnswer: 0,
            explanation: 'Supervised learning menggunakan data berlabel untuk training, sedangkan unsupervised tidak',
          },
          {
            id: 12,
            question: 'Algoritma mana yang termasuk supervised learning?',
            options: ['K-Means', 'Linear Regression', 'PCA', 'DBSCAN'],
            correctAnswer: 1,
            explanation: 'Linear Regression adalah algoritma supervised learning untuk prediksi nilai kontinu',
          },
          {
            id: 13,
            question: 'Apa fungsi train_test_split() di Scikit-learn?',
            options: ['Membagi data menjadi training dan testing', 'Melatih model', 'Mengevaluasi model', 'Membuat prediksi'],
            correctAnswer: 0,
            explanation: 'train_test_split() membagi dataset menjadi set training dan testing',
          },
          {
            id: 14,
            question: 'Overfitting terjadi ketika?',
            options: ['Model terlalu kompleks dan hapal data training', 'Model terlalu sederhana', 'Data terlalu sedikit', 'Semua benar'],
            correctAnswer: 0,
            explanation: 'Overfitting terjadi ketika model terlalu kompleks sehingga "menghapal" data training',
          },
          {
            id: 15,
            question: 'Metrik evaluasi untuk klasifikasi biner adalah?',
            options: ['MAE', 'RMSE', 'Accuracy, Precision, Recall', 'R-squared'],
            correctAnswer: 2,
            explanation: 'Accuracy, Precision, dan Recall adalah metrik umum untuk evaluasi model klasifikasi',
          },
        ],
      },
      {
        id: 4,
        title: 'Part 4: Deep Learning',
        description: 'Neural network dan implementasi praktis',
        questions: [
          {
            id: 16,
            question: 'Framework deep learning populer di Python adalah?',
            options: ['TensorFlow dan PyTorch', 'Django dan Flask', 'Pandas dan NumPy', 'BeautifulSoup dan Scrapy'],
            correctAnswer: 0,
            explanation: 'TensorFlow dan PyTorch adalah dua framework deep learning paling populer',
          },
          {
            id: 17,
            question: 'Activation function yang umum digunakan di hidden layer adalah?',
            options: ['Softmax', 'ReLU', 'Linear', 'Sigmoid untuk semua layer'],
            correctAnswer: 1,
            explanation: 'ReLU (Rectified Linear Unit) adalah activation function paling umum untuk hidden layer',
          },
          {
            id: 18,
            question: 'Apa itu epoch dalam training neural network?',
            options: ['Satu iterasi melalui seluruh dataset', 'Jumlah layer', 'Jumlah neuron', 'Learning rate'],
            correctAnswer: 0,
            explanation: 'Epoch adalah satu pass lengkap melalui seluruh dataset training',
          },
          {
            id: 19,
            question: 'Gradient descent digunakan untuk?',
            options: ['Mengoptimalkan weight model', 'Memvisualisasikan data', 'Membersihkan data', 'Mengimpor data'],
            correctAnswer: 0,
            explanation: 'Gradient descent adalah algoritma optimasi untuk meminimalkan loss function',
          },
          {
            id: 20,
            question: 'CNN paling cocok untuk tipe data?',
            options: ['Teks', 'Gambar/Image', 'Audio saja', 'Tabular'],
            correctAnswer: 1,
            explanation: 'Convolutional Neural Network (CNN) dirancang khusus untuk memproses data gambar',
          },
        ],
      },
    ],
  },
  // Kursus 2: Menciptakan Skema Warna untuk Proyek UX Design
  2: {
    courseTitle: 'Menciptakan Skema Warna untuk Proyek UX Design',
    totalQuestions: 20,
    parts: [
      {
        id: 1,
        title: 'Part 1: Teori Warna Dasar',
        description: 'Memahami color wheel dan harmoni warna',
        questions: [
          {
            id: 1,
            question: 'Warna primer dalam teori warna tradisional adalah?',
            options: ['Merah, Kuning, Biru', 'Cyan, Magenta, Yellow', 'RGB', 'Hitam dan Putih'],
            correctAnswer: 0,
            explanation: 'Dalam teori warna tradisional, merah, kuning, dan biru adalah warna primer',
          },
          {
            id: 2,
            question: 'Apa itu complementary colors?',
            options: ['Warna yang berseberangan di color wheel', 'Warna yang berdekatan', 'Warna netral', 'Warna primer'],
            correctAnswer: 0,
            explanation: 'Complementary colors adalah warna yang berseberangan di color wheel, seperti biru dan oranye',
          },
          {
            id: 3,
            question: 'Analogous color scheme menggunakan warna yang?',
            options: ['Berseberangan', 'Berdekatan di color wheel', 'Primer saja', 'Random'],
            correctAnswer: 1,
            explanation: 'Analogous scheme menggunakan warna yang berdekatan di color wheel untuk harmoni',
          },
          {
            id: 4,
            question: 'Apa itu saturation dalam warna?',
            options: ['Intensitas atau kemurnian warna', 'Kecerahan warna', 'Temperatur warna', 'Nilai warna'],
            correctAnswer: 0,
            explanation: 'Saturation mengukur seberapa murni atau intens suatu warna',
          },
          {
            id: 5,
            question: 'Warna hangat (warm colors) memberikan kesan?',
            options: ['Tenang dan sejuk', 'Energi dan semangat', 'Sedih dan murung', 'Netral'],
            correctAnswer: 1,
            explanation: 'Warna hangat seperti merah dan oranye memberikan kesan energi dan semangat',
          },
        ],
      },
      {
        id: 2,
        title: 'Part 2: Psikologi Warna',
        description: 'Pengaruh warna terhadap emosi dan perilaku user',
        questions: [
          {
            id: 6,
            question: 'Warna biru sering diasosiasikan dengan?',
            options: ['Bahaya dan urgensi', 'Kepercayaan dan profesionalisme', 'Kreativitas liar', 'Kelaparan'],
            correctAnswer: 1,
            explanation: 'Biru sering digunakan oleh perusahaan untuk menyampaikan kepercayaan dan profesionalisme',
          },
          {
            id: 7,
            question: 'Mengapa banyak restoran menggunakan warna merah?',
            options: ['Menekan nafsu makan', 'Merangsang nafsu makan', 'Membuat rileks', 'Tidak ada alasan khusus'],
            correctAnswer: 1,
            explanation: 'Merah diketahui dapat merangsang nafsu makan dan menciptakan urgensi',
          },
          {
            id: 8,
            question: 'Warna hijau sering digunakan untuk brand yang berkaitan dengan?',
            options: ['Teknologi', 'Kesehatan dan lingkungan', 'Fashion mewah', 'Entertainment'],
            correctAnswer: 1,
            explanation: 'Hijau diasosiasikan dengan alam, kesehatan, dan keberlanjutan',
          },
          {
            id: 9,
            question: 'Warna hitam dalam branding mewah melambangkan?',
            options: ['Kemurahan', 'Elegansi dan eksklusivitas', 'Keceriaan', 'Kasual'],
            correctAnswer: 1,
            explanation: 'Hitam sering digunakan brand luxury untuk kesan elegan dan eksklusif',
          },
          {
            id: 10,
            question: 'Warna kuning cocok untuk?',
            options: ['Menyampaikan kesedihan', 'Optimisme dan keceriaan', 'Formal dan serius', 'Mourning'],
            correctAnswer: 1,
            explanation: 'Kuning melambangkan kebahagiaan, optimisme, dan energi positif',
          },
        ],
      },
      {
        id: 3,
        title: 'Part 3: Color Systems untuk UI',
        description: 'Implementasi sistem warna dalam desain interface',
        questions: [
          {
            id: 11,
            question: 'Berapa rasio kontras minimum untuk teks normal menurut WCAG AA?',
            options: ['3:1', '4.5:1', '7:1', '2:1'],
            correctAnswer: 1,
            explanation: 'WCAG AA mensyaratkan rasio kontras minimal 4.5:1 untuk teks normal',
          },
          {
            id: 12,
            question: 'Apa itu primary color dalam design system?',
            options: ['Warna yang paling sedikit digunakan', 'Warna utama brand yang dominan', 'Warna background', 'Warna teks'],
            correctAnswer: 1,
            explanation: 'Primary color adalah warna utama yang mewakili identitas brand',
          },
          {
            id: 13,
            question: 'Semantic colors seperti merah untuk error adalah contoh dari?',
            options: ['Random color choice', 'Functional color usage', 'Decorative colors', 'Brand colors'],
            correctAnswer: 1,
            explanation: 'Semantic colors menggunakan warna untuk menyampaikan makna fungsional',
          },
          {
            id: 14,
            question: 'Neutral colors dalam UI biasanya digunakan untuk?',
            options: ['CTA buttons saja', 'Background, text, borders', 'Branding only', 'Icons saja'],
            correctAnswer: 1,
            explanation: 'Neutral colors seperti abu-abu digunakan untuk background, teks, dan borders',
          },
          {
            id: 15,
            question: 'Dark mode yang baik harus memperhatikan?',
            options: ['Hanya inversi warna', 'Kontras yang tepat dan eye strain', 'Sama persis dengan light mode', 'Tidak perlu adjustment'],
            correctAnswer: 1,
            explanation: 'Dark mode memerlukan penyesuaian kontras untuk kenyamanan mata',
          },
        ],
      },
      {
        id: 4,
        title: 'Part 4: Implementasi Praktis',
        description: 'Tools dan teknik membuat color palette',
        questions: [
          {
            id: 16,
            question: 'Tool populer untuk membuat color palette adalah?',
            options: ['Photoshop saja', 'Coolors, Adobe Color, Figma', 'Excel', 'PowerPoint'],
            correctAnswer: 1,
            explanation: 'Coolors, Adobe Color, dan Figma adalah tools populer untuk color palette',
          },
          {
            id: 17,
            question: '60-30-10 rule dalam desain warna berarti?',
            options: ['60% primary, 30% secondary, 10% accent', 'Jumlah warna total', 'Rasio kontras', 'Jumlah file'],
            correctAnswer: 0,
            explanation: 'Rule ini menyarankan proporsi penggunaan warna untuk balance visual',
          },
          {
            id: 18,
            question: 'Ketika testing warna untuk color blindness, perlu diperhatikan?',
            options: ['Hanya estetika', 'Tidak perlu testing', 'Informasi tidak hanya mengandalkan warna', 'Semua orang melihat sama'],
            correctAnswer: 2,
            explanation: 'Pastikan informasi penting tidak hanya disampaikan melalui warna saja',
          },
          {
            id: 19,
            question: 'Color token dalam design system adalah?',
            options: ['Nama variabel untuk warna yang reusable', 'Warna random', 'File gambar', 'Font name'],
            correctAnswer: 0,
            explanation: 'Color tokens adalah variabel yang menyimpan nilai warna untuk konsistensi',
          },
          {
            id: 20,
            question: 'Berapa jumlah warna ideal dalam satu color palette?',
            options: ['20-30 warna', 'Hanya 1 warna', '3-5 warna utama + variasi', 'Tidak ada batasan'],
            correctAnswer: 2,
            explanation: 'Idealnya 3-5 warna utama dengan variasi untuk menjaga konsistensi',
          },
        ],
      },
    ],
  },
  // Kursus 3: Culture & Leadership: Strategi untuk Bisnis Sukses
  3: {
    courseTitle: 'Culture & Leadership: Strategi untuk Bisnis Sukses',
    totalQuestions: 20,
    parts: [
      {
        id: 1,
        title: 'Part 1: Dasar-dasar Kepemimpinan',
        description: 'Memahami konsep dan gaya kepemimpinan',
        questions: [
          {
            id: 1,
            question: 'Apa perbedaan utama antara leader dan manager?',
            options: ['Tidak ada perbedaan', 'Leader menginspirasi, manager mengelola', 'Manager lebih penting', 'Leader hanya memberi perintah'],
            correctAnswer: 1,
            explanation: 'Leader fokus pada visi dan inspirasi, sedangkan manager fokus pada proses dan pengelolaan',
          },
          {
            id: 2,
            question: 'Gaya kepemimpinan transformasional berfokus pada?',
            options: ['Kontrol ketat', 'Menginspirasi dan memotivasi perubahan', 'Status quo', 'Hukuman'],
            correctAnswer: 1,
            explanation: 'Transformasional leadership fokus pada inspirasi tim untuk mencapai perubahan positif',
          },
          {
            id: 3,
            question: 'Emotional Intelligence (EQ) penting karena?',
            options: ['Tidak penting untuk leader', 'Membantu memahami dan mengelola emosi', 'Hanya untuk psikolog', 'Menggantikan IQ'],
            correctAnswer: 1,
            explanation: 'EQ membantu leader memahami emosi diri dan orang lain untuk komunikasi efektif',
          },
          {
            id: 4,
            question: 'Servant leadership menekankan pada?',
            options: ['Kekuasaan mutlak', 'Melayani tim terlebih dahulu', 'Profit saja', 'Kompetisi internal'],
            correctAnswer: 1,
            explanation: 'Servant leadership memprioritaskan kebutuhan tim dan membantu mereka berkembang',
          },
          {
            id: 5,
            question: 'Apa itu situational leadership?',
            options: ['Satu gaya untuk semua situasi', 'Menyesuaikan gaya dengan situasi dan tim', 'Tidak konsisten', 'Leadership random'],
            correctAnswer: 1,
            explanation: 'Situational leadership mengadaptasi gaya sesuai kebutuhan situasi dan kesiapan tim',
          },
        ],
      },
      {
        id: 2,
        title: 'Part 2: Budaya Organisasi',
        description: 'Membangun dan mengelola kultur perusahaan',
        questions: [
          {
            id: 6,
            question: 'Budaya organisasi yang kuat memberikan?',
            options: ['Kebingungan', 'Identitas dan arah yang jelas', 'Konflik lebih banyak', 'Tidak ada dampak'],
            correctAnswer: 1,
            explanation: 'Budaya kuat memberikan identitas bersama dan panduan perilaku yang jelas',
          },
          {
            id: 7,
            question: 'Value perusahaan seharusnya?',
            options: ['Hanya di dinding', 'Dipraktikkan dalam keseharian', 'Rahasia', 'Berubah setiap minggu'],
            correctAnswer: 1,
            explanation: 'Values harus tercermin dalam perilaku dan keputusan sehari-hari',
          },
          {
            id: 8,
            question: 'Psychological safety di tempat kerja berarti?',
            options: ['Tidak ada risiko fisik', 'Aman untuk mengambil risiko dan berbicara', 'Tidak ada deadline', 'Bekerja sendiri'],
            correctAnswer: 1,
            explanation: 'Psychological safety memungkinkan karyawan berbicara tanpa takut dihukum',
          },
          {
            id: 9,
            question: 'Culture fit dalam hiring harus memperhatikan?',
            options: ['Kesamaan penuh', 'Alignment value dengan keberagaman', 'Hanya skill', 'Penampilan'],
            correctAnswer: 1,
            explanation: 'Culture fit yang sehat mencari alignment values sambil menghargai keberagaman',
          },
          {
            id: 10,
            question: 'Onboarding yang baik membantu?',
            options: ['Menghemat uang saja', 'Integrasi karyawan baru ke budaya', 'Memperlambat produktivitas', 'Tidak penting'],
            correctAnswer: 1,
            explanation: 'Onboarding membantu karyawan baru memahami dan beradaptasi dengan budaya',
          },
        ],
      },
      {
        id: 3,
        title: 'Part 3: Komunikasi Efektif',
        description: 'Strategi komunikasi untuk pemimpin',
        questions: [
          {
            id: 11,
            question: 'Active listening melibatkan?',
            options: ['Hanya mendengar kata-kata', 'Fokus penuh dan memahami konteks', 'Multitasking saat meeting', 'Menyela sering'],
            correctAnswer: 1,
            explanation: 'Active listening memerlukan fokus penuh, empati, dan pemahaman mendalam',
          },
          {
            id: 12,
            question: 'Feedback yang efektif sebaiknya?',
            options: ['Hanya kritik', 'Spesifik, actionable, dan tepat waktu', 'Tahunan saja', 'Di depan umum untuk mempermalukan'],
            correctAnswer: 1,
            explanation: 'Feedback efektif bersifat spesifik, dapat ditindaklanjuti, dan diberikan tepat waktu',
          },
          {
            id: 13,
            question: 'Transparansi dalam leadership penting untuk?',
            options: ['Membocorkan rahasia', 'Membangun kepercayaan tim', 'Menunjukkan kelemahan', 'Gosip'],
            correctAnswer: 1,
            explanation: 'Transparansi yang tepat membangun kepercayaan dan kredibilitas',
          },
          {
            id: 14,
            question: 'Dalam konflik tim, leader sebaiknya?',
            options: ['Mengabaikan', 'Memfasilitasi resolusi konstruktif', 'Memihak satu pihak', 'Menghukum semua'],
            correctAnswer: 1,
            explanation: 'Leader harus memfasilitasi dialog dan mencari solusi yang konstruktif',
          },
          {
            id: 15,
            question: 'Town hall meeting berguna untuk?',
            options: ['Membuang waktu', 'Komunikasi terbuka dengan seluruh organisasi', 'Kritik publik', 'Entertainment'],
            correctAnswer: 1,
            explanation: 'Town hall memungkinkan komunikasi dua arah dan transparansi organisasi',
          },
        ],
      },
      {
        id: 4,
        title: 'Part 4: Strategi Bisnis',
        description: 'Menghubungkan leadership dengan strategi',
        questions: [
          {
            id: 16,
            question: 'OKR adalah singkatan dari?',
            options: ['Objectives and Key Results', 'Organization Key Reports', 'Operational Knowledge Review', 'Office Key Resources'],
            correctAnswer: 0,
            explanation: 'OKR (Objectives and Key Results) adalah framework goal-setting populer',
          },
          {
            id: 17,
            question: 'Pivot dalam bisnis berarti?',
            options: ['Gagal total', 'Perubahan strategi berdasarkan learning', 'Tidak berubah', 'Tutup perusahaan'],
            correctAnswer: 1,
            explanation: 'Pivot adalah perubahan arah strategis berdasarkan insight dan data',
          },
          {
            id: 18,
            question: 'Stakeholder management penting karena?',
            options: ['Tidak penting', 'Mempengaruhi keberhasilan inisiatif', 'Formalitas saja', 'Hanya untuk CEO'],
            correctAnswer: 1,
            explanation: 'Mengelola ekspektasi stakeholder mempengaruhi dukungan dan keberhasilan',
          },
          {
            id: 19,
            question: 'Change management yang baik melibatkan?',
            options: ['Perubahan mendadak tanpa komunikasi', 'Komunikasi, training, dan dukungan', 'Mengabaikan resistensi', 'Memaksa tanpa penjelasan'],
            correctAnswer: 1,
            explanation: 'Change management efektif memerlukan komunikasi, training, dan dukungan berkelanjutan',
          },
          {
            id: 20,
            question: 'KPI yang baik harus?',
            options: ['Sebanyak mungkin', 'Terukur, relevan, dan actionable', 'Rahasia', 'Tidak berhubungan dengan goals'],
            correctAnswer: 1,
            explanation: 'KPI efektif harus SMART dan terhubung dengan objectives bisnis',
          },
        ],
      },
    ],
  },
};

// Data Modul/Materi untuk setiap kursus
export const moduleData = {
  1: {
    courseTitle: 'Data Science dan Machine Learning dengan Python',
    modules: [
      {
        id: 1,
        title: 'Pengantar Data Science',
        description: 'Memahami apa itu Data Science dan perannya dalam industri modern',
        duration: '45 menit',
        content: `
# Pengantar Data Science

## Apa itu Data Science?
Data Science adalah bidang interdisipliner yang menggunakan metode ilmiah, proses, algoritma, dan sistem untuk mengekstrak pengetahuan dan wawasan dari data terstruktur dan tidak terstruktur.

## Mengapa Data Science Penting?
1. **Pengambilan Keputusan Berbasis Data** - Membantu organisasi membuat keputusan yang lebih baik
2. **Prediksi dan Forecasting** - Memprediksi tren dan perilaku masa depan
3. **Otomatisasi** - Mengotomatiskan proses kompleks dengan machine learning
4. **Personalisasi** - Memberikan pengalaman yang dipersonalisasi kepada pengguna

## Skill yang Dibutuhkan
- Programming (Python, R)
- Statistik dan Matematika
- Machine Learning
- Data Visualization
- Domain Knowledge
        `,
      },
      {
        id: 2,
        title: 'Setup Environment Python',
        description: 'Instalasi dan konfigurasi environment Python untuk Data Science',
        duration: '30 menit',
        content: `
# Setup Environment Python

## Instalasi Python
1. Download Python dari python.org
2. Install dengan memilih "Add to PATH"
3. Verifikasi instalasi: \`python --version\`

## Virtual Environment
\`\`\`bash
# Membuat virtual environment
python -m venv myenv

# Aktivasi (Windows)
myenv\\Scripts\\activate

# Aktivasi (Mac/Linux)
source myenv/bin/activate
\`\`\`

## Library Penting
\`\`\`bash
pip install numpy pandas matplotlib scikit-learn jupyter
\`\`\`
        `,
      },
      {
        id: 3,
        title: 'Pandas untuk Manipulasi Data',
        description: 'Menggunakan Pandas untuk membaca, memproses, dan menganalisis data',
        duration: '60 menit',
        content: `
# Pandas untuk Manipulasi Data

## Membaca Data
\`\`\`python
import pandas as pd

# Membaca CSV
df = pd.read_csv('data.csv')

# Melihat data
df.head()  # 5 baris pertama
df.info()  # Informasi kolom
df.describe()  # Statistik deskriptif
\`\`\`

## Operasi Dasar
\`\`\`python
# Seleksi kolom
df['column_name']
df[['col1', 'col2']]

# Filter data
df[df['age'] > 25]

# Grouping
df.groupby('category').mean()
\`\`\`
        `,
      },
    ],
  },
  2: {
    courseTitle: 'Menciptakan Skema Warna untuk Proyek UX Design',
    modules: [
      {
        id: 1,
        title: 'Teori Warna Fundamental',
        description: 'Memahami dasar-dasar teori warna dan color wheel',
        duration: '40 menit',
        content: `
# Teori Warna Fundamental

## Color Wheel
Color wheel adalah representasi visual dari hubungan antar warna.

## Warna Primer, Sekunder, Tersier
- **Primer**: Merah, Kuning, Biru
- **Sekunder**: Campuran dua warna primer
- **Tersier**: Campuran primer dan sekunder

## Harmoni Warna
1. **Complementary**: Warna berseberangan
2. **Analogous**: Warna berdekatan
3. **Triadic**: Tiga warna dengan jarak sama
4. **Split-Complementary**: Variasi complementary
        `,
      },
      {
        id: 2,
        title: 'Psikologi Warna dalam Design',
        description: 'Bagaimana warna mempengaruhi emosi dan perilaku user',
        duration: '50 menit',
        content: `
# Psikologi Warna dalam Design

## Makna Warna
- **Merah**: Energi, urgensi, passion
- **Biru**: Kepercayaan, profesionalisme, tenang
- **Hijau**: Alam, pertumbuhan, kesehatan
- **Kuning**: Optimisme, keceriaan, perhatian
- **Ungu**: Kreativitas, kemewahan, misteri
- **Oranye**: Semangat, friendly, call-to-action

## Aplikasi dalam Branding
Setiap industri memiliki warna yang umum digunakan karena asosiasi psikologis.
        `,
      },
    ],
  },
  3: {
    courseTitle: 'Culture & Leadership: Strategi untuk Bisnis Sukses',
    modules: [
      {
        id: 1,
        title: 'Fondasi Kepemimpinan Modern',
        description: 'Memahami peran dan tanggung jawab seorang leader',
        duration: '55 menit',
        content: `
# Fondasi Kepemimpinan Modern

## Leader vs Manager
Seorang leader fokus pada:
- Visi dan strategi jangka panjang
- Menginspirasi dan memotivasi tim
- Membangun budaya dan values
- Mengembangkan potensi orang lain

## Gaya Kepemimpinan
1. **Transformational** - Menginspirasi perubahan
2. **Servant** - Melayani tim
3. **Democratic** - Melibatkan tim dalam keputusan
4. **Situational** - Menyesuaikan dengan konteks
        `,
      },
      {
        id: 2,
        title: 'Membangun Tim yang Kuat',
        description: 'Strategi rekrutmen, development, dan retention talent',
        duration: '45 menit',
        content: `
# Membangun Tim yang Kuat

## Rekrutmen yang Tepat
- Definisikan culture fit dengan jelas
- Gunakan proses interview terstruktur
- Libatkan tim dalam proses hiring

## Pengembangan Talent
- Regular 1-on-1 meetings
- Career development plan
- Mentoring dan coaching
- Training dan learning opportunities

## Retensi Karyawan
- Kompensasi kompetitif
- Growth opportunities
- Work-life balance
- Recognition dan appreciation
        `,
      },
    ],
  },
};

// Data Video untuk setiap kursus
export const videoData = {
  1: {
    courseTitle: 'Data Science dan Machine Learning dengan Python',
    videos: [
      {
        id: 1,
        title: 'Selamat Datang di Kursus Data Science',
        duration: '8:45',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        description: 'Pengenalan kursus dan overview materi yang akan dipelajari',
      },
      {
        id: 2,
        title: 'Install Python dan Jupyter Notebook',
        duration: '15:20',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400',
        description: 'Langkah-langkah instalasi Python dan setup environment',
      },
      {
        id: 3,
        title: 'Dasar-dasar Pandas',
        duration: '25:30',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        description: 'Belajar manipulasi data dengan library Pandas',
      },
      {
        id: 4,
        title: 'Visualisasi Data dengan Matplotlib',
        duration: '20:15',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        description: 'Membuat grafik dan chart untuk analisis data',
      },
      {
        id: 5,
        title: 'Machine Learning dengan Scikit-learn',
        duration: '35:00',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
        description: 'Implementasi algoritma ML menggunakan Scikit-learn',
      },
    ],
  },
  2: {
    courseTitle: 'Menciptakan Skema Warna untuk Proyek UX Design',
    videos: [
      {
        id: 1,
        title: 'Pengenalan Color Theory',
        duration: '12:30',
        thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400',
        description: 'Dasar-dasar teori warna yang perlu dipahami designer',
      },
      {
        id: 2,
        title: 'Menggunakan Color Wheel',
        duration: '18:45',
        thumbnail: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=400',
        description: 'Cara menggunakan color wheel untuk harmoni warna',
      },
      {
        id: 3,
        title: 'Psikologi Warna untuk UI/UX',
        duration: '22:00',
        thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        description: 'Memahami dampak psikologis warna pada user',
      },
      {
        id: 4,
        title: 'Membuat Color Palette dengan Figma',
        duration: '30:15',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
        description: 'Tutorial praktis membuat color palette di Figma',
      },
    ],
  },
  3: {
    courseTitle: 'Culture & Leadership: Strategi untuk Bisnis Sukses',
    videos: [
      {
        id: 1,
        title: 'Apa itu Kepemimpinan yang Efektif?',
        duration: '15:00',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
        description: 'Mendefinisikan kepemimpinan yang efektif di era modern',
      },
      {
        id: 2,
        title: 'Membangun Budaya Perusahaan',
        duration: '25:30',
        thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
        description: 'Langkah-langkah membangun culture yang kuat',
      },
      {
        id: 3,
        title: 'Komunikasi Efektif untuk Leader',
        duration: '20:00',
        thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400',
        description: 'Teknik komunikasi yang harus dimiliki setiap leader',
      },
      {
        id: 4,
        title: 'Mengelola Tim Remote',
        duration: '28:45',
        thumbnail: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400',
        description: 'Tips dan strategi memimpin tim yang bekerja remote',
      },
    ],
  },
};

export const getQuizByCourseId = (courseId) => {
  return quizData[courseId] || null;
};

export const getModulesByCourseId = (courseId) => {
  return moduleData[courseId] || null;
};

export const getVideosByCourseId = (courseId) => {
  return videoData[courseId] || null;
};
