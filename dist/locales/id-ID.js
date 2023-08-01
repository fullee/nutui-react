/*!
* @nutui/nutui-react v2.0.8 Tue Aug 01 2023 20:50:44 GMT+0800 (中国标准时间)
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/
const n = {
  save: "Simpan",
  confirm: "Konfirmasi",
  cancel: "Batal",
  done: "Selesai",
  noData: "Tidak Ada Data",
  placeholder: "Kolom Input",
  select: "Pilih",
  video: {
    errorTip: "Terjadi Kesalahan",
    clickRetry: "Coba Lagi"
  },
  fixednav: {
    activeText: "Tutup Navigasi",
    inactiveText: "Buka Navigasi"
  },
  infiniteloading: {
    pullRefreshText: "Lepaskan untuk memperbarui",
    loadText: "Memuat",
    loadMoreText: "Oops, sudah sampai bawah"
  },
  pagination: {
    prev: "Sebelumnya",
    next: "Selanjutnya"
  },
  range: { rangeText: "is overflow" },
  calendaritem: {
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    end: "Selesai",
    start: "Mulai",
    confirm: "Mengonfirmasi",
    title: "Kalender",
    monthTitle: (a, e) => `${a}/${Number(e) < 10 ? `0${Number(e)}` : e}`,
    today: "Hari ini",
    loadPreviousMonth: "Muat Bulan Sebelumnya",
    noEarlierMonth: "Tidak Ada Bulan Sebelumnya"
  },
  shortpassword: {
    title: "SIlakan masukan kata sandi",
    description: "Anda telah menggunakan aset virtual, mohon lakukan verifikasi.",
    tips: "Lupa Kata Sandi"
  },
  uploader: {
    ready: "File berhasil diunggah",
    readyUpload: "Siap untuk mengunggah",
    waitingUpload: "Menunggu untuk diunggah",
    uploading: "Mengunggah",
    success: "Berhasil Diunggah",
    error: "Gagal Mengunggah",
    deleteWord: "The user blocked the deletion!"
  },
  countdown: {
    day: " Hari ",
    hour: " Jam ",
    minute: " Menit ",
    second: " Detik "
  },
  address: {
    selectRegion: "Pilih Daerah",
    deliveryTo: "Kirim Ke",
    chooseAnotherAddress: "Pilih alamat lain"
  },
  signature: {
    reSign: "Masuk Kembali",
    unsupported: "Maaf, browser Anda saat ini tidak mendukung Canvas, sehingga kita tidak dapat menggunakan kontrol ini!"
  },
  ecard: {
    chooseText: "Pilih",
    otherValueText: "Jumlah Lain",
    placeholder: "Kolom Input"
  },
  timeselect: {
    pickupTime: "Waktu Penjemputan"
  },
  sku: {
    buyNow: "Beli Sekarang",
    buyNumber: "Jumlah Pembelian",
    addToCard: "Tambahkan ke Keranjang"
  },
  skuheader: {
    skuId: "Nomor SKU"
  },
  addresslist: {
    addAddress: "Tambah Alamat Baru"
  },
  comment: {
    complaintsText: "Saya memiliki komplain",
    additionalReview: (a) => `Ulas setelah ${a} hari dari pembelian`,
    additionalImages: (a) => `Terdapat ${a} komentar lainnya`
  },
  searchbar: {
    basePlaceholder: "pergi ke jd.com, membeli barang baik",
    text: "teks",
    test: "tes",
    title1: "penggunaan dasar",
    title2: "bentuk kotak pencarian dan panjang maksimum",
    title3: "pengaturan latar belakang di dalam dan diluar kotak pencarian",
    title4: "tetapan teks kotak pencarian",
    title5: "pengaturan ikon suai",
    title6: "Monitor perubahan data"
  },
  audio: {
    back: "Fastback",
    forward: "maju",
    pause: "berhenti sebentar",
    start: "Mulailah",
    mute: "bisu",
    tips: "Acara Onplayend hanya akan dipicu saat loop = false"
  },
  datepicker: {
    year: "Tahun",
    month: "Bulan",
    day: "Hari",
    hour: "Jam",
    min: "Menit",
    seconds: "Detik"
  },
  pullToRefresh: {
    pullingText: "Tarik ke bawah untuk menyegarkan",
    canReleaseText: "Rilis untuk menyegarkan",
    refreshingText: "Memuat...",
    completeText: "Penyegaran berhasil"
  },
  watermark: {
    errorCanvasTips: "Canvas is not supported in the current environment"
  }
};
export {
  n as default
};
