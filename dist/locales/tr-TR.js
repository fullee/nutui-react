/*!
* @nutui/nutui-react v2.0.8 Tue Aug 01 2023 20:50:44 GMT+0800 (中国标准时间)
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/
const i = {
  save: "Kaydet",
  confirm: "Onayla",
  cancel: "İptal",
  done: "Bitti",
  noData: "Veri Yok",
  placeholder: "Placeholder",
  select: "Seçiniz",
  video: {
    errorTip: "Video yüklenemedi",
    clickRetry: "Yeniden Tıklayın"
  },
  fixednav: {
    activeText: "Navigasyonu kaldır",
    inactiveText: "Navigasyonu aç"
  },
  infiniteloading: {
    pullRefreshText: "yenile",
    loadText: "yükleniyor...",
    loadMoreText: "Oops, işte şimdi ayfanın sonuna geldiniz"
  },
  pagination: {
    prev: "Önceki",
    next: "Sonraki"
  },
  range: { rangeText: "Aralıkta görünmüyor" },
  calendaritem: {
    weekdays: [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi"
    ],
    end: "Son",
    start: "Başlangıç",
    confirm: "Onayla",
    title: "Takvim seçimi",
    monthTitle: (e, a) => `${e}/${Number(a) < 10 ? `0${Number(a)}` : a}`,
    today: "Bugün",
    loadPreviousMonth: "Önceki ayı yükle",
    noEarlierMonth: "Önceki ay yok"
  },
  shortpassword: {
    title: "Lütfen şifrenizi girin",
    description: "Bir sanal varlık kullanıyorsunuz, lütfen kimlik doğrulaması yapın",
    tips: "Şifrenizi mi unuttunuz"
  },
  uploader: {
    ready: "Tamamlamaya hazır",
    readyUpload: "Yüklemeye hazır",
    waitingUpload: "Yükleme için bekleniyor",
    uploading: "Yükleniyor...",
    success: "Yükleme başarılı",
    error: "Yükleme başarısız",
    deleteWord: "Kullanıcı silme işlemini engelledi!"
  },
  countdown: {
    day: " gün ",
    hour: " saat ",
    minute: " dakika ",
    second: " saniye "
  },
  address: {
    selectRegion: "Lütfen bölgenizi seçin",
    deliveryTo: "Teslimat yeri",
    chooseAnotherAddress: "Başka bir adres seçin"
  },
  signature: {
    reSign: "Yeniden imzala",
    unsupported: "Üzgünüz, mevcut tarayıcı Canvas'ı desteklemiyor ve bu kontrol kullanılamıyor!"
  },
  ecard: {
    chooseText: "Lütfen eCard değerini seçin",
    otherValueText: "Diğer değer",
    placeholder: "Lütfen 1-5000 arasında bir tamsayı girin"
  },
  timeselect: {
    pickupTime: "Teslim alma zamanı"
  },
  sku: {
    buyNow: "Şimdi Satın Al",
    buyNumber: "Numara Satın Al",
    addToCard: "Sepete ekle"
  },
  skuheader: {
    skuId: "ürün numarası"
  },
  addresslist: {
    addAddress: "Yeni adres ekleyin"
  },
  comment: {
    complaintsText: "Şikayet etmek istiyorum",
    additionalReview: (e) => `atın aldıktan ${e} gün sonra gözden geçirin`,
    additionalImages: (e) => ` ${e} İnceleme görüntülerinin`
  },
  searchbar: {
    basePlaceholder: " iyi şeyler satın alın",
    text: "metin",
    test: "test",
    title1: "Temel kullanım",
    title2: "Arama kutusu şekli ve maksimum uzunluk",
    title3: "Arama kutusu iç ve dış arka plan ayarları",
    title4: "Arama kutusu metin ayarları",
    title5: "Özel icon ayarları",
    title6: "Veri değişikliklerini dinleme"
  },
  audio: {
    back: "Hızlı geri",
    forward: "hızlı ileri",
    pause: "duraklat",
    start: "başla",
    mute: "sessiz",
    tips: "onPlayEnd olayı loop=false olduğunda ateşlenir"
  },
  datepicker: {
    year: "yıl",
    month: "ay",
    day: "gün",
    hour: "saat",
    min: "dakika",
    seconds: "saniye"
  },
  pullToRefresh: {
    pullingText: "yenilemek için aşağı çekin",
    canReleaseText: "Yenilemek için bırakın",
    refreshingText: "Yükleniyor...",
    completeText: "Yenileme başarılı"
  },
  watermark: {
    errorCanvasTips: "Geçerli ortam Canvası desteklemiyor"
  }
};
export {
  i as default
};
