export default function handler(req, res) {
  res.status(200).json({ 
    message: "Halo! API Anda sudah aktif.", 
    status: "Berhasil" 
  });
}
