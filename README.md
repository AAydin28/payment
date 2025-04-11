Bu React projesi, görselde verilen tasarıma uygun bir ödeme formu oluşturmayı amaçlamaktadır. Kullanıcı, kredi kartı bilgilerini girip "Şimdi Öde" butonuna tıkladığında, tüm form verileri bir alert mesajı olarak gösterilecektir. Form verileri useState hook'u ile yönetilmiştir.

Proje Özeti
Form Elemanları:

Kart Üzerindeki İsim (metin girişi)

Kart Numarası (metin girişi)

Ay (select elemanı)

Yıl (select elemanı)

Güvenlik Kodu (CVV) (metin girişi)

Özellikler:

Her input alanının değeri, useState hook'u ile yönetilmiştir.

Ay ve Yıl için select elemanları kullanılmıştır.

Ay için 1-12 arası ayları temsil eden seçenekler, Yıl içinse mevcut yıldan itibaren gelecek birkaç yıl seçeneği oluşturulmuştur.

"Şimdi Öde" butonuna tıklanıldığında form verileri bir alert() mesajı olarak gösterilir.

Sayfanın yenilenmesi engellenmiştir.
