window.$ = window.jQuery = require("jquery");
console.log( [$, jQuery] );

var formData = {
    formTitle       : "Pozitif Psikoloji Test Bataryası",
    formDate        : "Ekim 2015",
    formIntro       : "Değerli Katılımcı, #nl# Çalışmaya katılmak tamamen #b# GÖNÜLLÜLÜK #-b# esasına bağlıdır. Çalışmaya \
    katılmamayı tercih edebilirsiniz veya herhangi bir zamanda, herhangi bir nedenle ya da neden göstermeksizin \
    araştırmadan çekilebilirsiniz. Bu durumlarda herhangi bir olumsuz sonuçta karşılaşmayacaksınız. Çalışma sonucunda \
    birey bazında herhangi bir değerlendirme yapılmayacak, vermiş olduğunuz bilgiler sadece ve sadece #b# BİLİMSEL AMAÇLA KULLANILACAK #-b# \
    ve üçüncü şahıslarla kesinlikle paylaşılmayacaktır. Araştırmada elde edeceğimiz bilgilerle ilgili #b# GİZLİLİK #-b# esastır. \
    Araştırmacı, vereceğiniz bilgilerin gizliliğini koruma konusunda sorumluluğu kabul etmektedir. #nl# Ekteki ölçeklerde yaşamınızla ilgili \
    bazı ifadeler bulunmaktadır. Her bir ifadeyi size uygunluk derecesine göre cevap anahtarı üzerinde işaretleyiniz. #nl# \
    Çalışma hakkında her türlü bilgi ve sorularınızı araştırmacıya iletebilirsiniz. #nl# Bilimsel bir çalışmaya vermiş \
    olduğunuz destekten ve samimi cevaplarınızdan dolayı çok teşekkür ederiz. #nl# #nl# #b# NOT: #-b# Bu test bataryası, \
    eğitim dönemi sonunda sizin kazanımlarınızı değerlendirmek için de kullanılacaktır. Araştırma sonucu size geri \
    bildirim olarak iletilecektir. İsminizi yazmanız sizin tercihinize bırakılmıştır.",
    formCredentials : [
        "ad soyad", "cinsiyet", "yaş", "bölüm", "sınıf"
    ],
    formScales      : [
        {
            scaleTitle      : "Doğrusal Zeka Ölçeği",
            scaleResponses  : [
                {
                    text : "Hiç katılmıyorum",
                    value : 1
                },
                {
                    text : "Çoğunlukla katılmıyorum",
                    value : 2
                },
                {
                    text : "Biraz katılıyorum",
                    value : 3
                },
                {
                    text: "Katılıyorum",
                    value : 4
                },
                {
                    text: "Çoğunlukla katılıyorum",
                    value : 5
                },
                {
                    text: "Tamamen katılıyorum",
                    value: 6
                }
            ],
            scaleQuestions : [
                "Hayatımı sürdürebilmek için, hem olumlu hem de olumsuz duygularımın farkındayım.",
                "Olumsuz duygularım, hayatımda değiştirmem gereken şeyler hakkında bana yardımcı olur.",
                "Baskı altında bile sakin kalabilirim.",
                "Andan ana değişen duygularımı yönlendirebilirim.",
                "Zor bir durumla karşılaştığımda, hayatın isteklerine odaklanabilir ve sakinliğimi koruyabilirim.",
                "Zor bir durumla karşılaştığımda, eğlence, mizah, mücadele ruhu gibi olumlu özelliklerimi bir araya getirip kullanabilirim.",
                "Hissettiğim duyguların sorumluluğunu bilirim.",
                "Bir şeyler beni üzdükten sonra hemen kendime gelirim.",
                "Diğer insanların problemlerini dinlemede etkinimdir.",
                "Olumsuz duyguların etrafında dönüp durmam.",
                "Diğer insanların duygusal ihtiyaçlarına karşı hassasımdır.",
                "Diğer insanların üzerinde sakinleştirici bir etkim vardır.",
                "Aksiliklerle karşılaştığımda tekrar ve tekrar kendimi motive edebilirim.",
                "Hayatın zorluklarına karşı yaratıcı olmaya çalışırım.",
                "Diğer insanların motivasyonları, istekleri ve durumlarına uygun cevap verebilirim.",
                "İhtiyaç olduğunda sakinlik, uyanıklık ve duruma odaklanmayı kolayca sağlayabilirim.",
                "Zamanı geldiğinde olumsuz duygularımla yüzleşebilirim ve duruma uygun olarak çalışabilirim.",
                "Üzücü bir olaydan sonra kendimi yatıştırabilirim.",
                "İyilik halimi sürdürebilmek için doğru duygularımı tanımanın çok önemli olduğunu düşünüyorum.",
                "İnsanlar duygularını açıkça söylemediklerinde bile, onların duygularını anlayabilirim.",
                "İnsanların duygularını onların yüz ifadelerinden anlayabilirim.",
                "Bir görev için çağrıldığımda, olumsuz duygularımı bir yana bırakabilirim.",
                "İnsanların ihtiyaçlarını gösteren sosyal sinyalleri(işaretleri) hemen fark ederim.",
                "İnsanlar beni diğer insanların duyguları için etkin bir danışman olarak görürler.",
                "Kendi duygularının farkında olan insanlar hayatlarını daha iyi idare ederler.",
                "Sık sık diğerlerinin durumlarını(morallerini) geliştirmeye çalışırım.",
                "İlişkileri yürütmek için iyi tavsiyelerde bulunabilirim.",
                "İnsanların duygularına kolayca uyum sağlarım.",
                "İnsanların motivasyonlarını sağlamada ve amaçlarına ulaşmalarında yardım ederim.",
                "Olumsuz duygularımdan hemencecik kurtulabilirim."
            ],
            scaleSource : "Mumcuoglu, Ö. (2002). Bar-On Duygusal Zeka Testi'nin Türkçe Dilsel Esdegerlik, Güvenirlik ve Geçerlik Çalısması, Yüksek Lisans Tezi, Marmara Üniversitesi Egitim Bilimleri Enstitüsü, İstanbul"
        },
        {
            scaleTitle  : "Warwick-Edinburgh Mental İyi Oluş Ölçeği",
            scaleResponses  : [
                {
                    text : "Hiç katılmıyorum",
                    value : 1
                },
                {
                    text : "Katılmıyorum",
                    value : 2
                },
                {
                    text : "Biraz katılıyorum",
                    value : 3
                },
                {
                    text: "Katılıyorum",
                    value : 4
                },
                {
                    text: "Tamamen katılıyorum",
                    value: 5
                }
            ],
            scaleQuestions : [
                "Gelecekle ilgili iyimserim.",
                "Kendimi işe yarar(faydalı) hissediyorum.",
                "Kendimi rahatlamış hissediyorum.",
                "Diğer insanlara karşı ilgiliyim.",
                "Farklı işlere zaman ayırabilecek enerjim var.",
                "Sorunlarla iyi bir şekilde başa çıkabilirim.",
                "Açık ve net bir biçimde düşünebiliyorum.",
                "Kendimden memnunum.",
                "Kendimi diğer insanlara yakın hissediyorum.",
                "Kendime güveniyorum.",
                "Kendi kararlarımı kendim verebiliyorum.",
                "Sevildiğimi hissediyorum.",
                "Yeni şeylere karşı ilgiliyim.",
                "Neşeli hissediyorum."
            ],
            scaleSource : "Kendal, G. (2015). Warwick-Edinburgh Mental İyi Oluş Ölçeği'nin Türkçe Formu: Geçerlilik ve güvenirlik çalışması. The Journal of Happiness & Well-Being, 3(1), 103-115."
        },
        {
            scaleTitle  : "Oxford Mutluluk Ölçeği",
            scaleResponses  : [
                {
                    text : "Hiç katılmıyorum",
                    value : 1
                },
                {
                    text : "Çoğunlukla katılmıyorum",
                    value : 2
                },
                {
                    text : "Biraz katılıyorum",
                    value : 3
                },
                {
                    text: "Katılıyorum",
                    value : 4
                },
                {
                    text: "Çoğunlukla katılıyorum",
                    value : 5
                },
                {
                    text: "Tamamen katılıyorum",
                    value: 6
                }
            ],
            scaleQuestions : [
                "Kendimden hoşnut değilim.",
                "Diğer insanlara karşı oldukça ilgiliyim.",
                "Hayatın oldukça ödüllendirici olduğunu düşünüyorum.",
                "Neredeyse herkese karşı oldukça sıcak duygular besliyorum.",
                "Sabahları dinlenmiş olarak uyanırım.",
                "Geleceğim hakkında pek iyimser değilim.",
                "Pek çok şeyi eğlenceli buluyorum.",
                "Yaptığım şeylere karşı ilgili ve kendini adayan birisiyim.",
                "Hayat güzeldir.",
                "Dünyanın iyi bir yer olduğunu düşünmüyorum.",
                "Çok gülen birisiyim.",
                "Hayatımdaki her şeyden oldukça memnunum.",
                "Çekici birisi olduğumu düşünmüyorum.",
                "Yaptıklarımla yapmak istediklerim arasında büyük fark var.",
                "Çok mutluyum.",
                "Çevremdeki güzellikleri fark ederim.",
                "Diğer insanlar üzerinde daima neşeli bir etki bırakırım.",
                "Yapmak istediğim her şeye zaman bulabilirim.",
                "Yaşamımın kontrolü elimde değilmiş gibi hissediyorum.",
                "Kendimi herhangi bir konuda sorumluluk alabilecek güçte hissediyorum.",
                "Zihinsel olarak kendimi tamamen zinde(dinç) hissediyorum.",
                "Genellikle neşeli ve sevinçliyim.",
                "Herhangi bir konuda karar vermekte zorlanırım.",
                "Yaşamımın belli bir amacı ve anlamı yok.",
                "Kendimi oldukça enerjik hissediyorum.",
                "Genellikle olaylar üzerinde olumlu etkim vardır.",
                "Diğer insanlarla birlikte olmaktan keyif almıyorum.",
                "Kendimi çok sağlıklı hissetmiyorum.",
                "Geçmişimle ilgili pek mutlu anılara sahip değilim."
            ],
            scaleSource : "Doğan, T, T., & Sapmaz, F. (2012). Oxford Mutluluk Ölçeği Türkçe Formunun Psikometrik Özelliklerinin Üniversite Öğrencilerinde İncelenmesi. Düşünen Adam Psikiyatri ve Nörolojik Bilimler Dergisi, 25(4), 297-304."
        }
    ]
}

var obj = {
  "title": "DZÖ",
  "response-columns"  : {
    "Hiç katılmıyorum"        : 1,
    "Çoğunlukla katılmıyorum" : 2,
    "Biraz katılmıyorum"      : 3,
    "Katılıyorum"             : 4,
    "Çoğunlukla katılıyorum"  : 5,
    "Tamamen katılıyorum"     : 6
  },
  "questions"         : [
    "Hayatımı sürdürebilmek için, hem olumlu hem de olumsuz duygularımın farkındayım.",
    "Olumsuz duygularım, hayatımda değiştirmem gereken şeyler hakkında bana yardımcı olur.",
    "Baskı altında bile sakin kalabilirim.",
    "Andan ana değişen duygularımı yönlendirebilirim."
  ],
  "source"            : "Mumcuoglu, Ö. (2002). Bar-On Duygusal Zeka Testi'nin Türkçe Dilsel Esdegerlik, Güvenirlik ve Geçerlik Çalısması, Yüksek Lisans Tezi, Marmara Üniversitesi Egitim Bilimleri Enstitüsü, İstanbul"
};

var currentScale = 0;

var createIntroPage = function() {
    var back = document.createElement("div");
    back.className = "outback";
    document.body.appendChild(back);

    var formTitle = document.createElement("h1");
    formTitle.className = "form-title";
    formTitle.id = "title";
    formTitle.textContent = formData.formTitle;
    formTitle.lang = "tr";
    back.appendChild(formTitle);

    var formDate = document.createElement("h2");
    formDate.className = "form-date";
    formDate.textContent = formData.formDate;
    formDate.lang = "tr";
    back.appendChild(formDate);

    formIntroText = formData.formIntro;
    formIntroText = formIntroText.split("#nl#").join("</p><p>");
    formIntroText = formIntroText.split("#b#").join("<b>");
    formIntroText = formIntroText.split("#-b#").join("</b>");
    formIntroText = "<p>" + formIntroText + "</p>";

    var text = document.createElement("div");
    text.className = "intro-text";
    text.innerHTML = formIntroText;
    back.appendChild(text);

    var proceedButton = document.createElement("input");
    proceedButton.type = "submit";
    proceedButton.value = "Devam";
    proceedButton.addEventListener("click", createCredentialRequestPage, false);
    back.appendChild(proceedButton);
}

var createCredentialRequestPage = function() {
    clearWindow();
    var back = document.createElement("div");
    back.className = "outback";
    document.body.appendChild(back);

    var pageTitle = document.createElement("h1");
    pageTitle.textContent = obj.title;
    back.appendChild(pageTitle);

    var nameLabel = document.createElement("label");
    nameLabel.htmlFor = "patientName";
    nameLabel.textContent = "Ad Soyad:";
    back.appendChild(nameLabel);

    var name = document.createElement("input");
    name.type = "text";
    name.id = "patientName";
    name.name = "Name";
    back.appendChild(name);

    var genderLabel = document.createElement("label");
    genderLabel.htmlFor = "patientGender";
    genderLabel.textContent = "Cinsiyet:";
    back.appendChild(genderLabel);

    var gender = document.createElement("input");
    gender.type = "text";
    gender.id = "patientGender";
    gender.name = "Gender";
    back.appendChild(gender);

    var ageLabel = document.createElement("label");
    ageLabel.htmlFor = "patientAge";
    ageLabel.textContent = "Yaş:";
    back.appendChild(ageLabel);

    var age = document.createElement("input");
    age.type = "text";
    age.id = "patientAge";
    age.name = "Age";
    back.appendChild(age);

    var departmentLabel = document.createElement("label");
    departmentLabel.htmlFor = "patientDepartment";
    departmentLabel.textContent = "Bölüm:";
    back.appendChild(departmentLabel);

    var department = document.createElement("input");
    department.type = "text";
    department.id = "patientDepartment";
    department.name = "Department";
    back.appendChild(department);

    var classLabel = document.createElement("label");
    classLabel.htmlFor = "patientClass";
    classLabel.textContent = "Sınıf:";
    back.appendChild(classLabel);

    var class_ = document.createElement("input");
    class_.type = "text";
    class_.id = "patientClass";
    class_.name = "Class";
    back.appendChild(class_);

    var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Devam";
    submitButton.addEventListener("click", createScale, false);
    back.appendChild(submitButton);
}

var createScale = function() {
    clearWindow();

    var back = document.createElement("div");
    back.className = "outback";
    document.body.appendChild(back);

    var scaleTitle = document.createElement("h2");
    scaleTitle.className = "scale-title";
    scaleTitle.textContent = formData.formScales[currentScale].scaleTitle;
    back.appendChild(scaleTitle);

    var divider = document.createElement("div");
    divider.className = "divider";
    back.appendChild (divider);

    var questionList = [];

    for (var i = 0; i < formData.formScales[currentScale].scaleQuestions.length; i++) {
        questionList[i] = document.createElement("div");
        questionList[i].className = "question";
        questionList[i].innerHTML = (i + 1) + ". " + formData.formScales[currentScale].scaleQuestions[i];
        var responses = document.createElement("div");
        for (var j = 0; j < formData.formScales[currentScale].scaleResponses.length; j++) {
            var radioButton = document.createElement("div");
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.id = "respond" + (i+1) + "-" + (j+1);
            radio.name = "respond" + (i + 1);
            radio.className = "radio";
            radio.value = formData.formScales[currentScale].scaleResponses[j].value;

            var label = document.createElement("label");
            label.htmlFor = radio.id;
            label.className = "radio-label";
            label.textContent = formData.formScales[currentScale].scaleResponses[j].text;

            radioButton.appendChild(radio);
            radioButton.appendChild(label);

            responses.appendChild(radioButton);

            // radioButton.type = "radio";
            // radioButton.name = "respond" + (i + 1);
            // radioButton.value = formData.formScales[currentScale].scaleResponses[j].value;
            // responses.appendChild(radioButton);
            // responses.innerHTML += formData.formScales[currentScale].scaleResponses[j].text + "<br>";
        }
        questionList[i].appendChild(responses);
        back.appendChild(questionList[i]);
        var separator = document.createElement("div");
        separator.className = "divider";
        back.appendChild(separator);
    }

    var proceedButton = document.createElement("input");
    proceedButton.type = "submit";
    proceedButton.value = "Devam";
    proceedButton.addEventListener("click", function(){
        currentScale += 1;
        createScale();
        $("html,body").animate({scrollTop: 0}, 0);
    }, false);
    back.appendChild(proceedButton);

    $(".question").find("input").parent().find("label").css({cursor: "pointer"});
        $(".question").find("input").on("click", function() {
            // $(this).closest(".question").css( {backgroundColor: "#C5DABB", borderRadius: "5px"});
            // Clear other selected ones
            $(this).parent().parent().find("div").removeClass("selected");
            $(this).closest("div").addClass("selected");
        });
}

var clearWindow = function() {
    document.body.innerHTML = "";
};

// createIntroPage();
// createCredentialRequestPage();

createScale();