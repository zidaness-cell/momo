function openLetter() {
  const card = document.getElementById('card');
  const cakeWrapper = document.getElementById('cakeWrapper');
  const envelope = document.getElementById('envelope');

  // Jalankan animasi buka surat
  card.classList.add('open');

  // Setelah animasi selesai (0.6s), sembunyikan amplop dan tampilkan kue
  setTimeout(() => {
    envelope.style.display = 'none';       // sembunyikan amplop
    cakeWrapper.style.display = 'block';   // tampilkan kue
  }, 800); // delay agar sinkron dengan animasi
}

function resetLetter() {
  const card = document.getElementById('card');
  const cakeWrapper = document.getElementById('cakeWrapper');
  const envelope = document.getElementById('envelope');

  // Reset semuanya ke kondisi awal
  card.classList.remove('open');
  cakeWrapper.style.display = 'none';
  envelope.style.display = 'block';
}

