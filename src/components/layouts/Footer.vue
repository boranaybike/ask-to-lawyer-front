<template>
    
      
<v-footer class="footer " style="margin: -16px; background-color: rgba(0, 0, 0, 0.863);">
<v-row ><v-col class="text-left mt-5" cols="3"> <div class="ml-4" style="color:#ff6006"> <p>Şirketimiz</p> </div><br>
<v-btn
  color="white"
  variant="text"
  
  rounded="xl"
  style="font-size: 60%; padding-right: 100px;">
  Hakkımızda
</v-btn>


<router-link style="text-decoration: none;" to="/lawyers">
<v-btn
  color="white"
  variant="text"
  
  rounded="xl"
  style="font-size: 60%; padding-right: 100px;">
  Avukatlarımız
  
</v-btn></router-link>
</v-col><v-col class="text-left mt-5" cols="3"><div class="ml-4"  style="color:#ff6006" > <p>Kaynaklar</p> </div><br>


  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        color="white"
        variant="text"
        style="font-size: 60%; margin-right: 100px"
        >Gizlilik Politikası
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Gizlilik Politikası</span>
      </v-card-title>
      <v-card-text
        >Toplanan Bilgiler: Platformumuzda kayıt olmanız veya hizmetlerimizi
        kullanmanız durumunda, sizden belirli kişisel bilgiler toplayabiliriz.
        Bu bilgiler adınız, iletişim bilgileriniz ve ödeme bilgilerinizi
        içerebilir. Ayrıca, platform üzerinden gerçekleştirilen iletişimlerin
        kaydedilmesi gibi, platformun kullanımı sırasında oluşturulan diğer
        verileri de toplayabiliriz. Kişisel Bilgilerin Kullanımı Topladığımız
        kişisel bilgileri aşağıdaki amaçlarla kullanabiliriz: a. Hizmetlerimizin
        sunulması: Size hizmetlerimizi sağlamak, sorularınıza cevap vermek ve
        taleplerinizi yerine getirmek için kişisel bilgilerinizi kullanabiliriz.
        b. İletişim: Sizinle iletişim kurmak, bildirimler göndermek ve
        hizmetlerimizle ilgili güncellemeleri sağlamak için iletişim
        bilgilerinizi kullanabiliriz. c. Hukuki Yükümlülükler: Platformumuzdaki
        hizmetleri sunarken, ilgili yasal düzenlemelere ve yürürlükteki hukuki
        yükümlülüklere uymak amacıyla kişisel bilgilerinizi kullanabiliriz. d.
        İyileştirme ve Analiz: Platformumuzu geliştirmek, kullanıcı deneyimini
        iyileştirmek, hizmetlerimizi analiz etmek ve istatistiksel veriler elde
        etmek için kişisel bilgilerinizi kullanabiliriz. Kişisel Bilgilerin
        Paylaşımı Platformumuzda topladığımız kişisel bilgileri, aşağıdaki
        durumlar dışında üçüncü taraflarla paylaşmayız: a. Onayınız: Kişisel
        bilgilerinizi, size bildirilen amaçlarla sınırlı olarak, onayınız
        doğrultusunda paylaşabiliriz. b. Hukuki Gerekler: İlgili yasal
        düzenlemelere uyum sağlamak veya hukuki taleplere yanıt vermek amacıyla
        kişisel bilgilerinizi paylaşabiliriz. c. Hizmet Sağlayıcılar:
        Platformumuzun işleyişini desteklemek için hizmet sağlayıcılarla kişisel
        bilgilerinizi paylaşabiliriz. Bu hizmet sağlayıcılar, verilerinizi
        yalnızca belirtilen amaçlar doğrultusunda işlemek ve gizliliklerini
        korumakla yükümlüdür. d. Yasal Sorumluluklar: Platformumuzdaki kullanım
        şartlarının ihlal edilmesi, kullanıcıların veya platformun haklarını
        koruma veya sahtekârlık, güvenlik veya teknik sorunları tespit etme ve
        önleme gibi durumlarında, kişisel bilgilerinizi paylaşabiliriz. Veri
        Güvenliği Kişisel bilgilerinizin güvenliği bizim için önemlidir. Makul
        güvenlik önlemleri kullanarak kişisel bilgilerinizi korumaya
        çalışıyoruz. Ancak, internet üzerinden iletişim veya veri depolama
        konusunda herhangi bir yöntemin tamamen güvenli olmadığını anlamanızı
        rica ederiz. Bu nedenle, kişisel bilgilerinizi paylaşırken dikkatli
        olmanız ve güvenli parolalar kullanmanız önemlidir. Çocukların Gizliliği
        Platformumuz, 18 yaşın altındaki çocukların kişisel bilgilerini kasıtlı
        olarak toplamaz veya kullanmaz. Eğer bir ebeveyn veya veli olarak,
        çocuğunuzun bizimle iletişim kurduğunu fark ederseniz, derhal bizimle
        iletişime geçmenizi rica ederiz. Çerezler Platformumuz çerezleri
        kullanabilir. Çerezler, tarayıcınıza küçük bir metin dosyası olarak
        yerleştirilen ve kullanıcının tercihlerini hatırlayan bir teknolojidir.
        Çerezler, hizmetlerimizi daha etkili bir şekilde sunmak ve geliştirmek
        için kullanılır. Çerezleri kabul etmek veya reddetmek konusunda
        tercihlerinizi tarayıcınızın ayarlarında belirleyebilirsiniz. Diğer Web
        Sitelerine Bağlantılar Platformumuz, diğer web sitelerine bağlantılar
        içerebilir. Ancak, bu web sitelerinin gizlilik uygulamaları hakkında
        kontrolümüz olmadığını lütfen unutmayın. Başka bir web sitesine
        yönlendirildiğinizde, o web sitesinin gizlilik politikasını okumanız
        önerilir. Gizlilik Politikası Güncellemeleri Bu gizlilik politikası,
        değişebilir ve güncellenebilir. Politikadaki önemli değişiklikleri size
        bildireceğiz veya güncellenmiş politikayı platformumuzda yayınlayacağız.
        Bu nedenle, düzenli olarak politikayı gözden geçirmeniz önerilir.
        İletişim Herhangi bir soru, endişe veya talebiniz için gizlilik
        politikPlatformumuzla ilgili herhangi bir sorunuz, endişeniz veya
        talebiniz için gizlilik politikamızla ilgili herhangi bir konuda
        iletişime geçmek isterseniz iletişim bilgilerini kullanabilirsiniz: Size
        yardımcı olmaktan memnuniyet duyacağız ve sorularınıza en kısa sürede
        cevap vermeye çalışacağız. Bu gizlilik politikası son güncelleme
        tarihine göre yürürlükte olacaktır. Güncellenmiş politika, tarihinde
        değiştirilmiş ve yayınlanmış olacak ve ilgili değişiklikler derhal
        etkili olacaktır. Bu gizlilik politikasının Türkçe dilinde sunulan bir
        örnektir. Uluslararası kullanıcılarımızın yerel yasalara ve
        düzenlemelere uymak için kendi ülkelerinin yasalarına uygun bir şekilde
        hareket etmeleri önemlidir. Platformumuzu kullanarak, bu gizlilik
        politikasını kabul etmiş sayılırsınız. Gizlilik politikamızla ilgili
        herhangi bir endişeniz veya sorunuz varsa, lütfen bizimle iletişime
        geçmekten çekinmeyin. Bu gizlilik politikası, avukatlar ve müvekkiller
        arasında soru ve cevap alışverişi yapılabilen platformumuzun gizlilik
        politikasını açıklamaktadır ve AvukataSordum tarafından hazırlanmıştır.
        AvukataSordum - 2023
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
  
  
  
  
  
  
  
  
  
  
  <v-btn
  color="white"
  variant="text"
  style="font-size: 60%; margin-right: 100px;">Şartlar ve Koşullar
  </v-btn></v-col>
<v-col class="text-left mt-5" cols="3"> <div class="ml-4" style="color:#ff6006"> <p>Katıl</p> </div><br>

<router-link style="text-decoration: none;" to="/lawyer-register">
<v-btn color="white" variant="text" rounded="xl" style="font-size: 60%;margin-right: 100px;">
Avukat Olarak Katıl
</v-btn>
</router-link>
<router-link style="text-decoration: none;" to="/customer-register">
<v-btn color="white" variant="text" rounded="xl" style="font-size: 60%;margin-right: 100px;">
  danışan olarak katıl  
</v-btn>
</router-link>
</v-col>
<v-col class="text-left mt-5" cols="3">
  <v-card max-width="344" style="background-color: transparent;">
<v-card-item>
<div>
  <div class="text-h6 text-center mr-16" style="color:#ff6006">
    avukata
  </div>
  <div class="text-h6 text-right mr-16 " style="color: aliceblue;">
    sordum
  </div>
  
</div>
</v-card-item>

<v-card-actions>
<div  style="padding-left: 100px;     color: aliceblue;" >
 <v-btn icon="mdi-facebook" size="x-small"></v-btn>
<v-btn icon="mdi-instagram" size="x-small"></v-btn>
<v-btn icon="mdi-twitter" size="x-small"></v-btn>
<v-btn icon="mdi-linkedin" size="x-small"></v-btn>
</div> 
</v-card-actions>
</v-card>
</v-col>
<v-col class="text-center mt-4" cols="12">

<v-divider color="white"></v-divider>

<div>
{{ new Date().getFullYear() }} — <strong>AvukataSordum</strong>
</div>  
</v-col>
</v-row>
</v-footer>



</template>

<script>
export default {
    data() {
      return {
        dialog: false,
      }
    },
  }


</script>

<style scoped>
.v-footer {
position: sticky;
align-items: start;
}

.v-row{
  margin: 0 !important; 
}

</style>