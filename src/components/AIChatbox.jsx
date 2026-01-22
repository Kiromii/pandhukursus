import React, { useState, useRef, useEffect } from 'react';
import coursesData from '../data/coursesData';

// Komponen AI Chatbox - Asisten Virtual Pandhu
const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Halo! 👋 Saya Pandhu AI, asisten virtual kamu. Ketik perintah untuk mendapatkan informasi:\n\n📚 !kursus tersedia\n🔍 !cari [kata kunci]\n📂 !kategori\n💰 !harga [murah/mahal]\n⭐ !populer\n❓ !bantuan',
      time: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Fungsi untuk mendapatkan kategori unik
  const getCategories = () => {
    const categories = [...new Set(coursesData.map((course) => course.category))];
    return categories;
  };

  // Fungsi untuk memproses perintah
  const processCommand = (command) => {
    const cmd = command.toLowerCase().trim();

    // Perintah !kursus tersedia
    if (cmd === '!kursus tersedia' || cmd === '!kursus') {
      const courseList = coursesData.slice(0, 10).map((c) => `• ${c.title} (${c.level}) - Rp${c.price.toLocaleString('id-ID')}`);
      return `📚 **Kursus Tersedia** (${coursesData.length} total)\n\n${courseList.join('\n')}\n\n💡 Ketik !cari [kata kunci] untuk mencari kursus spesifik`;
    }

    // Perintah !cari
    if (cmd.startsWith('!cari ')) {
      const keyword = cmd.replace('!cari ', '').toLowerCase();
      const results = coursesData.filter((c) => c.title.toLowerCase().includes(keyword) || c.category.toLowerCase().includes(keyword) || c.description.toLowerCase().includes(keyword));

      if (results.length === 0) {
        return `🔍 Tidak ditemukan kursus dengan kata kunci "${keyword}"\n\n💡 Coba kata kunci lain atau ketik !kategori untuk melihat kategori tersedia`;
      }

      const resultList = results.slice(0, 5).map((c) => `• ${c.title}\n  📂 ${c.category} | 👤 ${c.level}\n  💰 Rp${c.price.toLocaleString('id-ID')} | ⭐ ${c.rating}`);
      return `🔍 **Hasil Pencarian: "${keyword}"**\n\nDitemukan ${results.length} kursus:\n\n${resultList.join('\n\n')}`;
    }

    // Perintah !kategori
    if (cmd === '!kategori') {
      const categories = getCategories();
      const categoryList = categories.map((cat) => {
        const count = coursesData.filter((c) => c.category === cat).length;
        return `• ${cat} (${count} kursus)`;
      });
      return `📂 **Kategori Kursus**\n\n${categoryList.join('\n')}\n\n💡 Ketik !cari [nama kategori] untuk melihat kursus dalam kategori`;
    }

    // Perintah !harga
    if (cmd.startsWith('!harga')) {
      const priceType = cmd.replace('!harga', '').trim();

      if (priceType === 'murah') {
        const cheapCourses = [...coursesData].sort((a, b) => a.price - b.price).slice(0, 5);
        const list = cheapCourses.map((c) => `• ${c.title}\n  💰 Rp${c.price.toLocaleString('id-ID')}`);
        return `💰 **Kursus Termurah**\n\n${list.join('\n\n')}`;
      } else if (priceType === 'mahal') {
        const expCourses = [...coursesData].sort((a, b) => b.price - a.price).slice(0, 5);
        const list = expCourses.map((c) => `• ${c.title}\n  💰 Rp${c.price.toLocaleString('id-ID')}`);
        return `💎 **Kursus Premium**\n\n${list.join('\n\n')}`;
      }

      const priceRange = {
        min: Math.min(...coursesData.map((c) => c.price)),
        max: Math.max(...coursesData.map((c) => c.price)),
        avg: Math.round(coursesData.reduce((a, b) => a + b.price, 0) / coursesData.length),
      };
      return `💰 **Informasi Harga**\n\n• Termurah: Rp${priceRange.min.toLocaleString('id-ID')}\n• Termahal: Rp${priceRange.max.toLocaleString('id-ID')}\n• Rata-rata: Rp${priceRange.avg.toLocaleString('id-ID')}\n\n💡 Ketik !harga murah atau !harga mahal`;
    }

    // Perintah !populer
    if (cmd === '!populer') {
      const popular = coursesData.filter((c) => c.is_popular).slice(0, 5);
      const list = popular.map((c) => `• ${c.title}\n  ⭐ ${c.rating} | 💰 Rp${c.price.toLocaleString('id-ID')}`);
      return `🌟 **Kursus Populer**\n\n${list.join('\n\n')}`;
    }

    // Perintah !bantuan
    if (cmd === '!bantuan' || cmd === '!help') {
      return `❓ **Panduan Perintah**\n\n📚 !kursus tersedia - Lihat semua kursus\n🔍 !cari [kata] - Cari kursus\n📂 !kategori - Lihat kategori\n💰 !harga [murah/mahal] - Filter harga\n⭐ !populer - Kursus populer\n\n💬 Atau ketik pertanyaan biasa!`;
    }

    // Perintah tidak dikenali - response natural
    if (cmd.includes('halo') || cmd.includes('hai') || cmd.includes('hi')) {
      return 'Halo juga! 👋 Ada yang bisa saya bantu? Ketik !bantuan untuk melihat perintah yang tersedia.';
    }

    if (cmd.includes('terima kasih') || cmd.includes('makasih') || cmd.includes('thanks')) {
      return 'Sama-sama! 😊 Senang bisa membantu. Jangan ragu untuk bertanya lagi ya!';
    }

    if (cmd.includes('kursus') || cmd.includes('belajar')) {
      return '📚 Sepertinya kamu tertarik dengan kursus! Coba ketik:\n\n• !kursus tersedia - melihat daftar kursus\n• !kategori - melihat kategori\n• !cari [kata kunci] - mencari kursus';
    }

    return `🤔 Maaf, saya tidak mengerti perintah "${command}".\n\nKetik !bantuan untuk melihat daftar perintah yang tersedia.`;
  };

  // Fungsi untuk mengirim pesan
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue,
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulasi delay typing
    setTimeout(
      () => {
        const response = processCommand(inputValue);
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          text: response,
          time: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      800 + Math.random() * 500,
    );
  };

  // Handle keyboard enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Format waktu
  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chatbox Container */}
      <div className={`ai-chatbox-container ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="ai-chatbox-header">
          <div className="ai-chatbox-header-info">
            <div className="ai-chatbox-avatar">
              <div className="ai-avatar-glow"></div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" />
                <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="ai-chatbox-header-text">
              <h4>Pandhu AI</h4>
              <span className="ai-status">
                <span className="ai-status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <button className="ai-chatbox-close" onClick={() => setIsOpen(false)} aria-label="Tutup chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="ai-chatbox-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`ai-message ${msg.type}`}>
              {msg.type === 'bot' && (
                <div className="ai-message-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
              )}
              <div className="ai-message-content">
                <div className="ai-message-bubble">
                  {msg.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <span className="ai-message-time">{formatTime(msg.time)}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="ai-message bot">
              <div className="ai-message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <div className="ai-message-content">
                <div className="ai-message-bubble ai-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Commands */}
        <div className="ai-quick-commands">
          <button onClick={() => setInputValue('!kursus tersedia')}>📚 Kursus</button>
          <button onClick={() => setInputValue('!kategori')}>📂 Kategori</button>
          <button onClick={() => setInputValue('!populer')}>⭐ Populer</button>
          <button onClick={() => setInputValue('!bantuan')}>❓ Bantuan</button>
        </div>

        {/* Input */}
        <div className="ai-chatbox-input">
          <input ref={inputRef} type="text" placeholder="Ketik perintah atau pesan..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} />
          <button className="ai-send-btn" onClick={handleSend} disabled={!inputValue.trim()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button className={`ai-chatbox-trigger ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)} aria-label="Buka chat AI">
        <div className="ai-trigger-glow"></div>
        <div className="ai-trigger-pulse"></div>
        <div className="ai-trigger-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
            <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" />
            <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <span className="ai-trigger-badge">AI</span>
      </button>
    </>
  );
};

export default AIChatbox;
