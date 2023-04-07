import { useState } from "react";

function Counter() {
  // Membuat variabel state
  // Mengembalikan 2 data:
  // Nilai saat ini: 0
  // Fungsi untuk mengubah state
  const [hasil, setHasil] = useState(0);

  function Tambah() {
    // Jalankan fungsi setHasil
    // Untuk mengubah state
    setHasil(hasil + 1);
  }

  return (
    <div>
      <p>Hasil: {hasil}</p>
      <button onClick={Tambah}>Tambah</button>
    </div>
  );
}

export default Counter;
