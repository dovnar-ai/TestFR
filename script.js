	
document.addEventListener("DOMContentLoaded", function () {    
	// Встановлення поточної дати
    const dateElement = document.getElementById("currentDate");
    let formattedDate = "";
    
    if (dateElement) {
        const today = new Date();
        formattedDate = today.toLocaleDateString("uk-UA");
        dateElement.textContent = formattedDate;
    }

    // Функція для збереження в localStorage
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    // Збереження ПІБ
    const fullNameInput = document.getElementById("fullName");
    if (fullNameInput) {
        document.querySelector("form").addEventListener("submit", function () {
            saveToLocalStorage("fullName", fullNameInput.value);
        });
    }

    // Збереження статі
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    if (genderInputs.length > 0) {
        genderInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("gender", this.value);
				saveToLocalStorage("genderId", this.id);
            });
        });
    }
	
	// Збереження ваги та зросту
    const VesInput = document.getElementById("Ves");
    const RostInput = document.getElementById("Rost");	
    if (VesInput && RostInput) {
        document.querySelector("form[action='./page4.html']").addEventListener("submit", function () {
            saveToLocalStorage("Ves", VesInput.value);
            saveToLocalStorage("Rost", RostInput.value);
			
        });
    }

    // Збереження тиску
    const systolicInput = document.getElementById("systolicPressure");
    const diastolicInput = document.getElementById("diastolicPressure");
    if (systolicInput && diastolicInput) {
        document.querySelector("form[action='./page5.html']").addEventListener("submit", function () {
            saveToLocalStorage("systolicPressure", systolicInput.value);
            saveToLocalStorage("diastolicPressure", diastolicInput.value);
		
        });
    }
	
	// Збереження ОТ та ЧСС
    const taliaInput = document.getElementById("Talia");
    const chssInput = document.getElementById("CHSS");
    if (taliaInput && chssInput) {
        document.querySelector("form[action='./page6.html']").addEventListener("submit", function () {
            saveToLocalStorage("Talia", taliaInput.value);
            saveToLocalStorage("CHSS", chssInput.value);
			
        });
    }
	
	// Збереження порушень сну
    const sonInputs = document.querySelectorAll('input[name="son"]');
    if (sonInputs.length > 0) {
        sonInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("son", this.value);
				saveToLocalStorage("sonId", this.id);

            });
        });
    }
	
	// Збереження тривалості сну
    const sonInput = document.getElementById("Son");
    if (sonInput) {
        document.querySelector("form[action='./page7.html']").addEventListener("submit", function () {
            saveToLocalStorage("Son", sonInput.value);
		
        });
    }
	
	// Збереження звичок
    const sigInput = document.getElementById("Sig");
    const alkInput = document.getElementById("Alk");
    if (sigInput && alkInput) {
        document.querySelector("form[action='./page8.html']").addEventListener("submit", function () {
            saveToLocalStorage("Sig", sigInput.value);
            saveToLocalStorage("Alk", alkInput.value);

        });
    }
	
	// Збереження сидячи та їжі
    const sidimInput = document.getElementById("Sidim");
    const edaInput = document.getElementById("Eda");
    if (sidimInput && edaInput) {
        document.querySelector("form[action='./page9.html']").addEventListener("submit", function () {
            saveToLocalStorage("Sidim", sidimInput.value);
            saveToLocalStorage("Eda", edaInput.value);

        });
    }
	
	 // Збереження напруги
    const naprugaInputs = document.querySelectorAll('input[name="napruga"]');
    if (naprugaInputs.length > 0) {
        naprugaInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("napruga", this.value);
				saveToLocalStorage("naprugaId", this.id);

            });
        });
    }
	
	 // Збереження настрою
    const nastriInputs = document.querySelectorAll('input[name="nastri"]');
    if (nastriInputs.length > 0) {
        nastriInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("nastri", this.value);
				saveToLocalStorage("nastriId", this.id);

            });
        });
    }
	
		 // Збереження образ
    const obraziInputs = document.querySelectorAll('input[name="obrazi"]');
    if (obraziInputs.length > 0) {
        obraziInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("obrazi", this.value);
				saveToLocalStorage("obraziId", this.id);
		
            });
        });
    }
	
	 // Збереження уваги
    const uvagaInputs = document.querySelectorAll('input[name="uvaga"]');
    if (uvagaInputs.length > 0) {
        uvagaInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("uvaga", this.value);
				saveToLocalStorage("uvagaId", this.id);

            });
        });
    }
	
		 // Збереження смутку
    const smutokInputs = document.querySelectorAll('input[name="smutok"]');
    if (smutokInputs.length > 0) {
        smutokInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("smutok", this.value);
				saveToLocalStorage("smutokId", this.id);
			
            });
        });
    }
	
	 // Збереження пильності
    const pilnistInputs = document.querySelectorAll('input[name="pilnist"]');
    if (pilnistInputs.length > 0) {
        pilnistInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("pilnist", this.value);
				saveToLocalStorage("pilnistId", this.id);
			
            });
        });
    }
	
		 // Збереження прокидання вночі
    const vnociInputs = document.querySelectorAll('input[name="vnoci"]');
    if (vnociInputs.length > 0) {
        vnociInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("vnoci", this.value);
				saveToLocalStorage("vnociId", this.id);
			
            });
        });
    }
	
	 // Збереження серцебиття
    const serceInputs = document.querySelectorAll('input[name="serce"]');
    if (serceInputs.length > 0) {
        serceInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("serce", this.value);
				saveToLocalStorage("serceId", this.id);
			
            });
        });
    }
	
		 // Збереження безнадійності
    const beznadInputs = document.querySelectorAll('input[name="beznad"]');
    if (beznadInputs.length > 0) {
        beznadInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("beznad", this.value);
				saveToLocalStorage("beznadId", this.id);
			
            });
        });
    }
	
	 // Збереження задоволення
    const zadovInputs = document.querySelectorAll('input[name="zadov"]');
    if (zadovInputs.length > 0) {
        zadovInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("zadov", this.value);
				saveToLocalStorage("zadovId", this.id);
				
            });
        });
    }
	
	 // Збереження інформації про здоров'я
    const zdorovInputs = document.querySelectorAll('input[name="zdorov"]');
    if (zdorovInputs.length > 0) {
        zdorovInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("zdorov", this.value);
				 saveToLocalStorage("zdorovId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про потенціал
    const potencInputs = document.querySelectorAll('input[name="potenc"]');
    if (potencInputs.length > 0) {
        potencInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("potenc", this.value);
				 saveToLocalStorage("potencId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про любов
    const lubovInputs = document.querySelectorAll('input[name="lubov"]');
    if (lubovInputs.length > 0) {
        lubovInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("lubov", this.value);
				 saveToLocalStorage("lubovId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про життя
    const lifeInputs = document.querySelectorAll('input[name="life"]');
    if (lifeInputs.length > 0) {
        lifeInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("life", this.value);
				 saveToLocalStorage("lifeId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про активність
    const activInputs = document.querySelectorAll('input[name="activ"]');
    if (activInputs.length > 0) {
        activInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("activ", this.value);
				 saveToLocalStorage("activId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про фінанси
    const finansyInputs = document.querySelectorAll('input[name="finansy"]');
    if (finansyInputs.length > 0) {
        finansyInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("finansy", this.value);
				 saveToLocalStorage("finansyId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про час з друзями
    const chasInputs = document.querySelectorAll('input[name="chas"]');
    if (chasInputs.length > 0) {
        chasInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("chas", this.value);
				 saveToLocalStorage("chasId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про роботу
    const robotaInputs = document.querySelectorAll('input[name="robota"]');
    if (robotaInputs.length > 0) {
        robotaInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("robota", this.value);
				 saveToLocalStorage("robotaId", this.id);
			
            });
        });
    }
	
	 // Збереження інформації про статус
    const socstatusInputs = document.querySelectorAll('input[name="socstatus"]');
    if (socstatusInputs.length > 0) {
        socstatusInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("socstatus", this.value);
				 saveToLocalStorage("socstatusId", this.id);
			
            });
        });
    }

    // Збереження інформації про друзів
    const friendsInputs = document.querySelectorAll('input[name="friends"]');
    if (friendsInputs.length > 0) {
        friendsInputs.forEach(input => {
            input.addEventListener("change", function () {
                saveToLocalStorage("friends", this.value);
				 saveToLocalStorage("friendsId", this.id);

            });
        });
    }
	

    // Функція для запису даних у `data.txt`
    function saveToFile(data) {
        const blob = new Blob([data], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "data.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
	
	function sendEmail(initId, sessionId, templateId, email, fullName, data)
	{
		emailjs.init(initId); // Замініть на ваш публічний ключ EmailJS
		return emailjs.send(sessionId,templateId, {
            to_email: email,
            to_name: "Олено Вадимівна",
            from_name: "Опитування факторів ризику",
            message: data
        });
	}
	
	 function makeStringFromData(data){
        let result = "";
        data.forEach(element => {
            result += element.description;
            if(element.id) result += ` (id ${element.id})`;
            result += `: ${element.value}`;
            if(element.label.includes("Pressure")) result += " мм.рт.ст.";
			if(element.label.includes("Ves")) result += " кг";
			if(element.label.includes("Rost")) result += " см";
			if(element.label.includes("Talia")) result += " см";
			if(element.label.includes("CHSS")) result += " уд/хв";
			if(element.label.includes("Son")) result += " год";
			if(element.label.includes("sig")) result += " шт/день";
			if(element.label.includes("alk")) result += " гр/день";
			if(element.label.includes("sidim")) result += " год/день";
			if(element.label.includes("eda")) result += " рази/день";
            result += `\r\n`;
        });
        return result;
    }
	

    // Функція для завершення опитування
    window.finish = function (last_button) {
    //   alert("Finish");
	// Формування масиву Х   
	    let pol;
		let imt;
		let ot;
		let css;
		let x=new Array(12);
		let a1=new Array(10);
		let a2=new Array(10);
		
		pol=Number(localStorage["genderId"]);
		rost1=Number(localStorage["Rost"])/100.0;
		ves1=Number(localStorage["Ves"]);
		if (rost1>0) imt=ves1/rost1/rost1;
		if (imt < 29.9) { x[0] = 0; } else { x[0] = 1; };
		if (Number(localStorage["systolicPressure"]) < 120) { x[1] = 0; } else { x[1] = 1; };
		x[2] = 0;
		x[3] = 0;
        ot=Number(localStorage["Talia"]); 
        css= Number(localStorage["CHSS"]);
        if(pol == 1)
        {
            if (ot > 102) x[2] = 1;
        }
        else
        {
            if (ot > 88) x[2] = 1;
        }
        if (css > 75) x[3] = 1;
		x[4] = 0;
        if (Number(localStorage["Son"]) < 7) x[4] = 1;
		x[5] = Number(localStorage["sonId"]);
		x[7] = 0;
		x[8] = 0;
        if(Number(localStorage["Sig"]) > 10) x[7] = 1;
        if (Number(localStorage["Alk"]) > 200) x[8] = 1;
		x[6] = 0;
		x[9] = 0;
        if(Number(localStorage["Sidim"]) / 12 * 100 > 50) x[6] = 1;
        if (Number(localStorage["Eda"]) < 3) x[9] = 1;
		a1[0]=Number(localStorage["naprugaId"]);
        a1[1]=Number(localStorage["nastriId"]);		
		a1[2]=Number(localStorage["obraziId"]);
		a1[3]=Number(localStorage["uvagaId"]);		
		a1[4]=Number(localStorage["smutokId"]);	
		a1[5]=Number(localStorage["pilnistId"]);
		a1[6]=Number(localStorage["vnociId"]);
		a1[7]=Number(localStorage["serceId"]);
		a1[8]=Number(localStorage["beznadId"]);
		a1[9]=Number(localStorage["zadovId"]);
		let sum = 0;
        for(let i=0; i<a1.length; i++) sum+=a1[i];
        x[11] = 0;
        if (sum < 4) x[11] = 1;	
		a2[0]=Number(localStorage["zdorovId"]);	
		a2[1]=Number(localStorage["potencId"]);	
		a2[2]=Number(localStorage["lubovId"]);	
		a2[3]=Number(localStorage["lifeId"]);
		a2[5]=Number(localStorage["activId"]);	
		a2[6]=Number(localStorage["finansyId"]);
		a2[7]=Number(localStorage["chasId"]);
		a2[8]=Number(localStorage["robotaId"]);	
		a2[9]=Number(localStorage["socstatusId"]);	
		a2[4]=Number(localStorage["friendsId"]);
		sum = 0;
		for(let i=0; i<a2.length; i++) sum += a2[i];
		x[10] = 0;
		if (sum < 18) x[10] = 1;
	   
	    const fullName = localStorage.getItem("fullName") || "Не вказано";
        const gender = localStorage.getItem("gender") || "Не вказано";
        const genderId = localStorage.getItem("genderId") || -1;
		const ves = localStorage.getItem("Ves") || "Не вказано";
        const rost = localStorage.getItem("Rost") || "Не вказано";
        const systolicPressure = localStorage.getItem("systolicPressure") || "Не вказано";
        const diastolicPressure = localStorage.getItem("diastolicPressure") || "Не вказано";
		const talia = localStorage.getItem("Talia") || "Не вказано";
        const chss = localStorage.getItem("CHSS") || "Не вказано";
		
		const son = localStorage.getItem("son") || "Не вказано";
        const sonId = localStorage.getItem("sonId") || -1;
		const Son = localStorage.getItem("Son") || "Не вказано";
		const sig = localStorage.getItem("Sig") || "Не вказано";
        const alk = localStorage.getItem("Alk") || "Не вказано";
		const sidim = localStorage.getItem("Sidim") || "Не вказано";
        const eda = localStorage.getItem("Eda") || "Не вказано";
		const napruga = localStorage.getItem("napruga") || "Не вказано";
        const naprugaId = localStorage.getItem("naprugaId") || -1;
		const nastri = localStorage.getItem("nastri") || "Не вказано";
        const nastriId = localStorage.getItem("nastriId") || -1;
		const obrazi = localStorage.getItem("obrazi") || "Не вказано";
        const obraziId = localStorage.getItem("obraziId") || -1;
		const uvaga = localStorage.getItem("uvaga") || "Не вказано";
        const uvagaId = localStorage.getItem("uvagaId") || -1;
		const smutok = localStorage.getItem("smutok") || "Не вказано";
        const smutokId = localStorage.getItem("smutokId") || -1;
		const pilnist = localStorage.getItem("pilnist") || "Не вказано";
        const pilnistId = localStorage.getItem("pilnistId") || -1;
		const vnoci = localStorage.getItem("vnoci") || "Не вказано";
        const vnociId = localStorage.getItem("vnociId") || -1;
		const serce = localStorage.getItem("serce") || "Не вказано";
        const serceId = localStorage.getItem("serceId") || -1;
		const beznad = localStorage.getItem("beznad") || "Не вказано";
        const beznadId = localStorage.getItem("beznadId") || -1;
		const zadov = localStorage.getItem("zadov") || "Не вказано";
        const zadovId = localStorage.getItem("zadovId") || -1;
		const zdorov = localStorage.getItem("zdorov") || "Не вказано";
        const zdorovId = localStorage.getItem("zdorovId") || -1;
		const potenc = localStorage.getItem("potenc") || "Не вказано";
        const potencId = localStorage.getItem("potencId") || -1;
		const lubov = localStorage.getItem("lubov") || "Не вказано";
        const lubovId = localStorage.getItem("lubovId") || -1;
		const life = localStorage.getItem("life") || "Не вказано";
        const lifeId = localStorage.getItem("lifeId") || -1;
		const activ = localStorage.getItem("activ") || "Не вказано";
        const activId = localStorage.getItem("activId") || -1;
		const finansy = localStorage.getItem("finansy") || "Не вказано";
        const finansyId = localStorage.getItem("finansyId") || -1;
		const chas = localStorage.getItem("chas") || "Не вказано";
        const chasId = localStorage.getItem("chasId") || -1;
		const robota = localStorage.getItem("robota") || "Не вказано";
        const robotaId = localStorage.getItem("robotaId") || -1;
		const socstatus = localStorage.getItem("socstatus") || "Не вказано";
        const socstatusId = localStorage.getItem("socstatusId") || -1;
		
        const friends = localStorage.getItem("friends") || "Не вказано";
        const friendsId = localStorage.getItem("friendsId") || -1;
        const currentDate = formattedDate || new Date().toLocaleDateString("uk-UA");

        // Формування масиву даних
           const surveyData = [
            {label: "currentDate", value: currentDate, description: "Дата"},
            {label: "fullName", value: fullName, description: "ПІБ"},
            {label: "gender", id: genderId, value: gender, description: "Стать"},
			{label: "Ves", value: ves, description: "Вага"},
            {label: "Rost", value: rost, description: "Зріст"},
            {label: "systolicPressure", value: systolicPressure, description: "Систолічний тиск"},
            {label: "diastolicPressure", value: diastolicPressure, description: "Діастолічний тиск"},
			{label: "Talia", value: talia, description: "Обхват талії"},
            {label: "CHSS", value: chss, description: "ЧСС"},
			
			{label: "son", id: sonId, value: son, description: "Сон"},
			{label: "Son", value: Son, description: "Тривалість сну"}, // год
			{label: "sig", value: sig, description: "Кількість сигарет"}, // шт/день
			{label: "alk", value: alk, description: "Кріпкий алкоголь"}, // гр/день
			{label: "sidim", value: sidim, description: "Сидимо"}, // год/день
			{label: "eda", value: eda, description: "Їмо"}, // рази/день
			{label: "napruga", id: naprugaId, value: napruga, description: "Нездатність розслабитися"},
			{label: "nastri", id: nastriId, value: nastri, description: "Поганий настрій"},
			{label: "obrazi", id: obraziId, value: obrazi, description: "Неприємні спогади"},
			{label: "uvaga", id: uvagaId, value: uvaga, description: "Неуважність"},
			{label: "smutok", id: smutokId, value: smutok, description: "Сильний смуток"},
			{label: "pilnist", id: pilnistId, value: pilnist, description: "Надмірна пильність"},
			{label: "vnoci", id: vnociId, value: vnoci, description: "Часті прокидання вночі"},
			{label: "serce", id: serceId, value: serce, description: "Прискорене серцебиття"},
			{label: "beznad", id: beznadId, value: beznad, description: "Безнадійність"},
			{label: "zadov", id: zadovId, value: zadov, description: "Незадоволеність щоденними справами"},
			{label: "zdorov", id: zdorovId, value: zdorov, description: "Здоров'я"},
			{label: "potenc", id: potencId, value: potenc, description: "Потенціал"},
			{label: "lubov", id: lubovId, value: lubov, description: "Любов у житті"},
			{label: "life", id: lifeId, value: life, description: "Задоволеність життям"},
			{label: "activ", id: activId, value: activ, description: "Соціальна активність"},
			{label: "finansy", id: finansyId, value: finansy, description: "Фінансове благополуччя"},
			{label: "chas", id: chasId, value: chas, description: "Спілкування з сім'єю та друзями"},
			{label: "robota", id: robotaId, value: robota, description: "Задоволеність роботою"},
			{label: "socstatus", id: socstatusId, value: socstatus, description: "Задоволеність соціальним статусом"},
			
            {label: "friends", id: friendsId, value: friends, description: "Друзі"},
        ];

        let dataString = makeStringFromData(surveyData);

		alert(dataString);
		
		// Блок аналізу
		
		// Ввод из файла Data2.txt
		let F = new Array(555);
		for (let i=0;i<555;i++) F[i]=new Array(13);

		let FF=[0,0,0,0,0,0,0,0,0,0,0,0,1,
				1,0,1,1,0,0,0,0,0,0,0,0,6,
				0,0,0,0,1,0,0,0,0,0,0,0,1,
				1,1,1,0,1,0,0,0,0,0,0,0,3,
				1,0,1,1,1,0,0,0,0,0,0,0,6,
				0,0,0,0,0,1,0,0,0,0,0,0,1,
				1,0,1,1,0,1,0,0,0,0,0,0,6,
				0,0,0,0,1,1,0,0,0,0,0,0,1,
				1,0,1,0,1,1,0,0,0,0,0,0,6,
				1,1,1,0,1,1,0,0,0,0,0,0,3,
				1,0,1,1,1,1,0,0,0,0,0,0,6,
				0,0,0,0,0,0,1,0,0,0,0,0,1,
				1,0,1,1,0,0,1,0,0,0,0,0,6,
				0,0,0,0,1,0,1,0,0,0,0,0,1,
				1,0,1,0,1,0,1,0,0,0,0,0,6,
				1,1,1,0,1,0,1,0,0,0,0,0,3,
				1,0,1,1,1,0,1,0,0,0,0,0,6,
				0,0,0,0,0,1,1,0,0,0,0,0,1,
				1,1,1,0,0,1,1,0,0,0,0,0,3,
				1,0,1,1,0,1,1,0,0,0,0,0,6,
				0,0,0,0,1,1,1,0,0,0,0,0,1,
				1,0,1,0,1,1,1,0,0,0,0,0,6,
				1,1,1,0,1,1,1,0,0,0,0,0,3,
				1,0,1,1,1,1,1,0,0,0,0,0,6,
				1,1,1,1,1,1,1,0,0,0,0,0,2,
				1,0,1,1,0,0,0,1,0,0,0,0,6,
				1,1,1,0,1,0,0,1,0,0,0,0,3,
				1,0,1,1,1,0,0,1,0,0,0,0,6,
				1,1,1,0,0,1,0,1,0,0,0,0,3,
				1,0,1,1,0,1,0,1,0,0,0,0,6,
				1,0,1,0,1,1,0,1,0,0,0,0,6,
				1,1,1,0,1,1,0,1,0,0,0,0,3,
				1,0,1,1,1,1,0,1,0,0,0,0,6,
				1,0,1,1,0,0,1,1,0,0,0,0,6,
				1,0,1,0,1,0,1,1,0,0,0,0,6,
				1,1,1,0,1,0,1,1,0,0,0,0,3,
				1,0,1,1,1,0,1,1,0,0,0,0,6,
				1,1,1,0,0,1,1,1,0,0,0,0,3,
				1,0,1,1,0,1,1,1,0,0,0,0,6,
				1,0,1,0,1,1,1,1,0,0,0,0,6,
				1,1,1,0,1,1,1,1,0,0,0,0,3,
				1,0,1,1,1,1,1,1,0,0,0,0,6,
				1,0,1,1,0,0,0,0,1,0,0,0,6,
				1,1,1,0,1,0,0,0,1,0,0,0,3,
				1,0,1,1,1,0,0,0,1,0,0,0,6,
				1,0,1,1,0,1,0,0,1,0,0,0,6,
				1,0,1,0,1,1,0,0,1,0,0,0,6,
				1,1,1,0,1,1,0,0,1,0,0,0,3,
				1,0,1,1,1,1,0,0,1,0,0,0,6,
				1,0,1,1,0,0,1,0,1,0,0,0,6,
				1,0,1,0,1,0,1,0,1,0,0,0,6,
				1,1,1,0,1,0,1,0,1,0,0,0,3,
				1,0,1,1,1,0,1,0,1,0,0,0,6,
				1,1,1,0,0,1,1,0,1,0,0,0,3,
				1,0,1,1,0,1,1,0,1,0,0,0,6,
				1,0,1,0,1,1,1,0,1,0,0,0,6,
				1,1,1,0,1,1,1,0,1,0,0,0,3,
				1,0,1,1,1,1,1,0,1,0,0,0,6,
				1,1,1,1,1,1,1,0,1,0,0,0,2,
				1,0,1,1,0,0,0,1,1,0,0,0,6,
				1,0,1,0,1,0,0,1,1,0,0,0,6,
				1,1,1,0,1,0,0,1,1,0,0,0,3,
				1,0,1,1,1,0,0,1,1,0,0,0,6,
				1,1,1,0,0,1,0,1,1,0,0,0,3,
				1,0,1,1,0,1,0,1,1,0,0,0,6,
				1,0,1,0,1,1,0,1,1,0,0,0,6,
				1,1,1,0,1,1,0,1,1,0,0,0,3,
				1,0,1,1,1,1,0,1,1,0,0,0,6,
				1,0,1,1,0,0,1,1,1,0,0,0,6,
				1,0,1,0,1,0,1,1,1,0,0,0,6,
				1,1,1,0,1,0,1,1,1,0,0,0,3,
				1,0,1,1,1,0,1,1,1,0,0,0,6,
				1,1,1,0,0,1,1,1,1,0,0,0,3,
				1,0,1,1,0,1,1,1,1,0,0,0,6,
				1,0,1,0,1,1,1,1,1,0,0,0,6,
				1,1,1,0,1,1,1,1,1,0,0,0,3,
				1,0,1,1,1,1,1,1,1,0,0,0,6,
				1,0,1,1,0,0,0,0,0,1,0,0,6,
				1,1,1,0,1,0,0,0,0,1,0,0,3,
				1,0,1,1,1,0,0,0,0,1,0,0,6,
				1,0,1,1,0,1,0,0,0,1,0,0,6,
				1,0,1,0,1,1,0,0,0,1,0,0,6,
				1,1,1,0,1,1,0,0,0,1,0,0,3,
				1,0,1,1,1,1,0,0,0,1,0,0,6,
				1,0,1,1,0,0,1,0,0,1,0,0,6,
				1,0,1,0,1,0,1,0,0,1,0,0,6,
				1,1,1,0,1,0,1,0,0,1,0,0,3,
				1,0,1,1,1,0,1,0,0,1,0,0,6,
				1,1,1,0,0,1,1,0,0,1,0,0,3,
				1,0,1,1,0,1,1,0,0,1,0,0,6,
				1,0,1,0,1,1,1,0,0,1,0,0,6,
				1,1,1,0,1,1,1,0,0,1,0,0,3,
				1,0,1,1,1,1,1,0,0,1,0,0,6,
				1,0,1,1,0,0,0,1,0,1,0,0,6,
				1,0,1,0,1,0,0,1,0,1,0,0,6,
				1,1,1,0,1,0,0,1,0,1,0,0,3,
				1,0,1,1,1,0,0,1,0,1,0,0,6,
				1,1,1,0,0,1,0,1,0,1,0,0,3,
				1,0,1,1,0,1,0,1,0,1,0,0,6,
				1,0,1,0,1,1,0,1,0,1,0,0,6,
				1,1,1,0,1,1,0,1,0,1,0,0,3,
				1,0,1,1,1,1,0,1,0,1,0,0,6,
				1,0,1,1,0,0,1,1,0,1,0,0,6,
				1,0,1,0,1,0,1,1,0,1,0,0,6,
				1,1,1,0,1,0,1,1,0,1,0,0,3,
				1,0,1,1,1,0,1,1,0,1,0,0,6,
				1,1,1,0,0,1,1,1,0,1,0,0,3,
				1,0,1,1,0,1,1,1,0,1,0,0,6,
				1,0,1,0,1,1,1,1,0,1,0,0,6,
				1,1,1,0,1,1,1,1,0,1,0,0,3,
				1,0,1,1,1,1,1,1,0,1,0,0,6,
				1,0,1,1,0,0,0,0,1,1,0,0,6,
				1,1,1,0,1,0,0,0,1,1,0,0,3,
				1,0,1,1,1,0,0,0,1,1,0,0,6,
				1,0,1,1,0,1,0,0,1,1,0,0,6,
				1,0,1,0,1,1,0,0,1,1,0,0,6,
				1,1,1,0,1,1,0,0,1,1,0,0,3,
				1,0,1,1,1,1,0,0,1,1,0,0,6,
				1,0,1,1,0,0,1,0,1,1,0,0,6,
				1,0,1,0,1,0,1,0,1,1,0,0,6,
				1,1,1,0,1,0,1,0,1,1,0,0,3,
				1,0,1,1,1,0,1,0,1,1,0,0,6,
				1,1,1,0,0,1,1,0,1,1,0,0,3,
				1,0,1,1,0,1,1,0,1,1,0,0,6,
				1,0,1,0,1,1,1,0,1,1,0,0,6,
				1,1,1,0,1,1,1,0,1,1,0,0,3,
				1,0,1,1,1,1,1,0,1,1,0,0,6,
				1,0,1,1,0,0,0,1,1,1,0,0,6,
				1,0,1,0,1,0,0,1,1,1,0,0,6,
				1,1,1,0,1,0,0,1,1,1,0,0,3,
				1,0,1,1,1,0,0,1,1,1,0,0,6,
				1,1,1,0,0,1,0,1,1,1,0,0,3,
				1,0,1,1,0,1,0,1,1,1,0,0,6,
				1,0,1,0,1,1,0,1,1,1,0,0,6,
				1,1,1,0,1,1,0,1,1,1,0,0,3,
				1,0,1,1,1,1,0,1,1,1,0,0,6,
				1,0,1,1,0,0,1,1,1,1,0,0,6,
				1,0,1,0,1,0,1,1,1,1,0,0,6,
				1,1,1,0,1,0,1,1,1,1,0,0,3,
				1,0,1,1,1,0,1,1,1,1,0,0,6,
				1,1,1,0,0,1,1,1,1,1,0,0,3,
				1,0,1,1,0,1,1,1,1,1,0,0,6,
				1,0,1,0,1,1,1,1,1,1,0,0,6,
				1,1,1,0,1,1,1,1,1,1,0,0,3,
				1,0,1,1,1,1,1,1,1,1,0,0,6,
				1,0,1,1,0,0,0,0,0,0,1,0,6,
				1,1,1,0,1,0,0,0,0,0,1,0,3,
				1,0,1,1,1,0,0,0,0,0,1,0,6,
				1,0,1,1,0,1,0,0,0,0,1,0,6,
				1,0,1,0,1,1,0,0,0,0,1,0,6,
				1,1,1,0,1,1,0,0,0,0,1,0,3,
				1,0,1,1,1,1,0,0,0,0,1,0,6,
				1,0,1,1,0,0,1,0,0,0,1,0,6,
				1,0,1,0,1,0,1,0,0,0,1,0,6,
				1,1,1,0,1,0,1,0,0,0,1,0,3,
				1,0,1,1,1,0,1,0,0,0,1,0,6,
				1,1,1,0,0,1,1,0,0,0,1,0,3,
				1,0,1,1,0,1,1,0,0,0,1,0,6,
				1,0,1,0,1,1,1,0,0,0,1,0,6,
				1,1,1,0,1,1,1,0,0,0,1,0,3,
				1,0,1,1,1,1,1,0,0,0,1,0,6,
				1,0,1,1,0,0,0,1,0,0,1,0,6,
				1,1,1,0,1,0,0,1,0,0,1,0,3,
				1,0,1,1,1,0,0,1,0,0,1,0,6,
				1,1,1,0,0,1,0,1,0,0,1,0,3,
				1,0,1,1,0,1,0,1,0,0,1,0,6,
				1,0,1,0,1,1,0,1,0,0,1,0,6,
				1,1,1,0,1,1,0,1,0,0,1,0,3,
				1,0,1,1,1,1,0,1,0,0,1,0,6,
				1,0,1,1,0,0,1,1,0,0,1,0,6,
				1,0,1,0,1,0,1,1,0,0,1,0,6,
				1,1,1,0,1,0,1,1,0,0,1,0,3,
				1,0,1,1,1,0,1,1,0,0,1,0,6,
				1,1,1,0,0,1,1,1,0,0,1,0,3,
				1,0,1,1,0,1,1,1,0,0,1,0,6,
				1,0,1,0,1,1,1,1,0,0,1,0,6,
				1,1,1,0,1,1,1,1,0,0,1,0,3,
				1,0,1,1,1,1,1,1,0,0,1,0,6,
				1,0,1,1,0,0,0,0,1,0,1,0,6,
				1,1,1,0,1,0,0,0,1,0,1,0,3,
				1,0,1,1,1,0,0,0,1,0,1,0,6,
				1,0,1,1,0,1,0,0,1,0,1,0,6,
				1,0,1,0,1,1,0,0,1,0,1,0,6,
				1,1,1,0,1,1,0,0,1,0,1,0,3,
				1,0,1,1,1,1,0,0,1,0,1,0,6,
				1,0,1,1,0,0,1,0,1,0,1,0,6,
				1,0,1,0,1,0,1,0,1,0,1,0,6,
				1,1,1,0,1,0,1,0,1,0,1,0,3,
				1,0,1,1,1,0,1,0,1,0,1,0,6,
				1,1,1,0,0,1,1,0,1,0,1,0,3,
				1,0,1,1,0,1,1,0,1,0,1,0,6,
				1,0,1,0,1,1,1,0,1,0,1,0,6,
				1,1,1,0,1,1,1,0,1,0,1,0,3,
				1,0,1,1,1,1,1,0,1,0,1,0,6,
				1,0,1,1,0,0,0,1,1,0,1,0,6,
				1,0,1,0,1,0,0,1,1,0,1,0,6,
				1,1,1,0,1,0,0,1,1,0,1,0,3,
				1,0,1,1,1,0,0,1,1,0,1,0,6,
				1,1,1,0,0,1,0,1,1,0,1,0,3,
				1,0,1,1,0,1,0,1,1,0,1,0,6,
				1,0,1,0,1,1,0,1,1,0,1,0,6,
				1,1,1,0,1,1,0,1,1,0,1,0,3,
				1,0,1,1,1,1,0,1,1,0,1,0,6,
				1,0,1,1,0,0,1,1,1,0,1,0,6,
				1,0,1,0,1,0,1,1,1,0,1,0,6,
				1,1,1,0,1,0,1,1,1,0,1,0,3,
				1,0,1,1,1,0,1,1,1,0,1,0,6,
				1,1,1,0,0,1,1,1,1,0,1,0,3,
				1,0,1,1,0,1,1,1,1,0,1,0,6,
				1,0,1,0,1,1,1,1,1,0,1,0,6,
				1,1,1,0,1,1,1,1,1,0,1,0,3,
				1,0,1,1,1,1,1,1,1,0,1,0,6,
				1,0,1,1,0,0,0,0,0,1,1,0,6,
				1,1,1,0,1,0,0,0,0,1,1,0,3,
				1,0,1,1,1,0,0,0,0,1,1,0,6,
				1,0,1,1,0,1,0,0,0,1,1,0,6,
				1,0,1,0,1,1,0,0,0,1,1,0,6,
				1,1,1,0,1,1,0,0,0,1,1,0,3,
				1,0,1,1,1,1,0,0,0,1,1,0,6,
				1,0,1,1,0,0,1,0,0,1,1,0,6,
				1,0,1,0,1,0,1,0,0,1,1,0,6,
				1,1,1,0,1,0,1,0,0,1,1,0,3,
				1,0,1,1,1,0,1,0,0,1,1,0,6,
				1,1,1,0,0,1,1,0,0,1,1,0,3,
				1,0,1,1,0,1,1,0,0,1,1,0,6,
				1,0,1,0,1,1,1,0,0,1,1,0,6,
				1,1,1,0,1,1,1,0,0,1,1,0,3,
				1,0,1,1,1,1,1,0,0,1,1,0,6,
				1,0,1,1,0,0,0,1,0,1,1,0,6,
				1,0,1,0,1,0,0,1,0,1,1,0,6,
				1,1,1,0,1,0,0,1,0,1,1,0,3,
				1,0,1,1,1,0,0,1,0,1,1,0,6,
				1,1,1,0,0,1,0,1,0,1,1,0,3,
				1,0,1,1,0,1,0,1,0,1,1,0,6,
				1,0,1,0,1,1,0,1,0,1,1,0,6,
				1,1,1,0,1,1,0,1,0,1,1,0,3,
				1,0,1,1,1,1,0,1,0,1,1,0,6,
				1,0,1,1,0,0,1,1,0,1,1,0,6,
				1,0,1,0,1,0,1,1,0,1,1,0,6,
				1,1,1,0,1,0,1,1,0,1,1,0,3,
				1,0,1,1,1,0,1,1,0,1,1,0,6,
				1,1,1,0,0,1,1,1,0,1,1,0,3,
				1,0,1,1,0,1,1,1,0,1,1,0,6,
				1,0,1,0,1,1,1,1,0,1,1,0,6,
				1,1,1,0,1,1,1,1,0,1,1,0,3,
				1,0,1,1,1,1,1,1,0,1,1,0,6,
				1,0,1,1,0,0,0,0,1,1,1,0,6,
				1,1,1,0,1,0,0,0,1,1,1,0,3,
				1,0,1,1,1,0,0,0,1,1,1,0,6,
				1,0,1,1,0,1,0,0,1,1,1,0,6,
				1,0,1,0,1,1,0,0,1,1,1,0,6,
				1,1,1,0,1,1,0,0,1,1,1,0,3,
				1,0,1,1,1,1,0,0,1,1,1,0,6,
				1,0,1,1,0,0,1,0,1,1,1,0,6,
				1,0,1,0,1,0,1,0,1,1,1,0,6,
				1,1,1,0,1,0,1,0,1,1,1,0,3,
				1,0,1,1,1,0,1,0,1,1,1,0,6,
				1,1,1,0,0,1,1,0,1,1,1,0,3,
				1,0,1,1,0,1,1,0,1,1,1,0,6,
				1,0,1,0,1,1,1,0,1,1,1,0,6,
				1,1,1,0,1,1,1,0,1,1,1,0,3,
				1,0,1,1,1,1,1,0,1,1,1,0,6,
				1,0,1,1,0,0,0,1,1,1,1,0,6,
				1,0,1,0,1,0,0,1,1,1,1,0,6,
				1,1,1,0,1,0,0,1,1,1,1,0,3,
				1,0,1,1,1,0,0,1,1,1,1,0,6,
				1,1,1,0,0,1,0,1,1,1,1,0,3,
				1,0,1,1,0,1,0,1,1,1,1,0,6,
				1,0,1,0,1,1,0,1,1,1,1,0,6,
				1,1,1,0,1,1,0,1,1,1,1,0,3,
				1,0,1,1,1,1,0,1,1,1,1,0,6,
				1,0,1,1,0,0,1,1,1,1,1,0,6,
				1,0,1,0,1,0,1,1,1,1,1,0,6,
				1,1,1,0,1,0,1,1,1,1,1,0,3,
				1,0,1,1,1,0,1,1,1,1,1,0,6,
				1,1,1,0,0,1,1,1,1,1,1,0,3,
				1,0,1,1,0,1,1,1,1,1,1,0,6,
				1,0,1,0,1,1,1,1,1,1,1,0,6,
				1,1,1,0,1,1,1,1,1,1,1,0,3,
				1,0,1,1,1,1,1,1,1,1,1,0,6,
				1,0,1,1,0,0,0,0,0,0,0,1,6,
				1,1,1,0,1,0,0,0,0,0,0,1,3,
				1,0,1,1,1,0,0,0,0,0,0,1,6,
				1,0,1,1,0,1,0,0,0,0,0,1,6,
				1,0,1,0,1,1,0,0,0,0,0,1,6,
				1,1,1,0,1,1,0,0,0,0,0,1,3,
				1,0,1,1,1,1,0,0,0,0,0,1,6,
				1,0,1,1,0,0,1,0,0,0,0,1,6,
				1,0,1,0,1,0,1,0,0,0,0,1,6,
				1,1,1,0,1,0,1,0,0,0,0,1,3,
				1,0,1,1,1,0,1,0,0,0,0,1,6,
				1,1,1,0,0,1,1,0,0,0,0,1,3,
				1,0,1,1,0,1,1,0,0,0,0,1,6,
				1,0,1,0,1,1,1,0,0,0,0,1,6,
				1,1,1,0,1,1,1,0,0,0,0,1,3,
				1,0,1,1,1,1,1,0,0,0,0,1,6,
				1,0,1,1,0,0,0,1,0,0,0,1,6,
				1,1,1,0,1,0,0,1,0,0,0,1,3,
				1,0,1,1,1,0,0,1,0,0,0,1,6,
				1,1,1,0,0,1,0,1,0,0,0,1,3,
				1,0,1,1,0,1,0,1,0,0,0,1,6,
				1,0,1,0,1,1,0,1,0,0,0,1,6,
				1,1,1,0,1,1,0,1,0,0,0,1,3,
				1,0,1,1,1,1,0,1,0,0,0,1,6,
				1,0,1,1,0,0,1,1,0,0,0,1,6,
				1,0,1,0,1,0,1,1,0,0,0,1,6,
				1,1,1,0,1,0,1,1,0,0,0,1,3,
				1,0,1,1,1,0,1,1,0,0,0,1,6,
				1,1,1,0,0,1,1,1,0,0,0,1,3,
				1,0,1,1,0,1,1,1,0,0,0,1,6,
				1,0,1,0,1,1,1,1,0,0,0,1,6,
				1,1,1,0,1,1,1,1,0,0,0,1,3,
				1,0,1,1,1,1,1,1,0,0,0,1,6,
				1,0,1,1,0,0,0,0,1,0,0,1,6,
				1,1,1,0,1,0,0,0,1,0,0,1,3,
				1,0,1,1,1,0,0,0,1,0,0,1,6,
				1,0,1,1,0,1,0,0,1,0,0,1,6,
				1,0,1,0,1,1,0,0,1,0,0,1,6,
				1,1,1,0,1,1,0,0,1,0,0,1,3,
				1,0,1,1,1,1,0,0,1,0,0,1,6,
				1,0,1,1,0,0,1,0,1,0,0,1,6,
				1,0,1,0,1,0,1,0,1,0,0,1,6,
				1,1,1,0,1,0,1,0,1,0,0,1,3,
				1,0,1,1,1,0,1,0,1,0,0,1,6,
				1,1,1,0,0,1,1,0,1,0,0,1,3,
				1,0,1,1,0,1,1,0,1,0,0,1,6,
				1,0,1,0,1,1,1,0,1,0,0,1,6,
				1,1,1,0,1,1,1,0,1,0,0,1,3,
				1,0,1,1,1,1,1,0,1,0,0,1,6,
				1,0,1,1,0,0,0,1,1,0,0,1,6,
				1,0,1,0,1,0,0,1,1,0,0,1,6,
				1,1,1,0,1,0,0,1,1,0,0,1,3,
				1,0,1,1,1,0,0,1,1,0,0,1,6,
				1,1,1,0,0,1,0,1,1,0,0,1,3,
				1,0,1,1,0,1,0,1,1,0,0,1,6,
				1,0,1,0,1,1,0,1,1,0,0,1,6,
				1,1,1,0,1,1,0,1,1,0,0,1,3,
				1,0,1,1,1,1,0,1,1,0,0,1,6,
				1,0,1,1,0,0,1,1,1,0,0,1,6,
				1,0,1,0,1,0,1,1,1,0,0,1,6,
				1,1,1,0,1,0,1,1,1,0,0,1,3,
				1,0,1,1,1,0,1,1,1,0,0,1,6,
				1,1,1,0,0,1,1,1,1,0,0,1,3,
				1,0,1,1,0,1,1,1,1,0,0,1,6,
				1,0,1,0,1,1,1,1,1,0,0,1,6,
				1,1,1,0,1,1,1,1,1,0,0,1,3,
				1,0,1,1,1,1,1,1,1,0,0,1,6,
				1,0,1,1,0,0,0,0,0,1,0,1,6,
				1,1,1,0,1,0,0,0,0,1,0,1,3,
				1,0,1,1,1,0,0,0,0,1,0,1,6,
				1,0,1,1,0,1,0,0,0,1,0,1,6,
				1,0,1,0,1,1,0,0,0,1,0,1,6,
				1,1,1,0,1,1,0,0,0,1,0,1,3,
				1,0,1,1,1,1,0,0,0,1,0,1,6,
				1,0,1,1,0,0,1,0,0,1,0,1,6,
				1,0,1,0,1,0,1,0,0,1,0,1,6,
				1,1,1,0,1,0,1,0,0,1,0,1,3,
				1,0,1,1,1,0,1,0,0,1,0,1,6,
				1,1,1,0,0,1,1,0,0,1,0,1,3,
				1,0,1,1,0,1,1,0,0,1,0,1,6,
				1,0,1,0,1,1,1,0,0,1,0,1,6,
				1,1,1,0,1,1,1,0,0,1,0,1,3,
				1,0,1,1,1,1,1,0,0,1,0,1,6,
				1,0,1,1,0,0,0,1,0,1,0,1,6,
				1,0,1,0,1,0,0,1,0,1,0,1,6,
				1,1,1,0,1,0,0,1,0,1,0,1,3,
				1,0,1,1,1,0,0,1,0,1,0,1,6,
				1,1,1,0,0,1,0,1,0,1,0,1,3,
				1,0,1,1,0,1,0,1,0,1,0,1,6,
				1,0,1,0,1,1,0,1,0,1,0,1,6,
				1,1,1,0,1,1,0,1,0,1,0,1,3,
				1,0,1,1,1,1,0,1,0,1,0,1,6,
				1,0,1,1,0,0,1,1,0,1,0,1,6,
				1,0,1,0,1,0,1,1,0,1,0,1,6,
				1,1,1,0,1,0,1,1,0,1,0,1,3,
				1,0,1,1,1,0,1,1,0,1,0,1,6,
				1,1,1,0,0,1,1,1,0,1,0,1,3,
				1,0,1,1,0,1,1,1,0,1,0,1,6,
				1,0,1,0,1,1,1,1,0,1,0,1,6,
				1,1,1,0,1,1,1,1,0,1,0,1,3,
				1,0,1,1,1,1,1,1,0,1,0,1,6,
				1,0,1,1,0,0,0,0,1,1,0,1,6,
				1,1,1,0,1,0,0,0,1,1,0,1,3,
				1,0,1,1,1,0,0,0,1,1,0,1,6,
				1,0,1,1,0,1,0,0,1,1,0,1,6,
				1,0,1,0,1,1,0,0,1,1,0,1,6,
				1,1,1,0,1,1,0,0,1,1,0,1,3,
				1,0,1,1,1,1,0,0,1,1,0,1,6,
				1,0,1,1,0,0,1,0,1,1,0,1,6,
				1,0,1,0,1,0,1,0,1,1,0,1,6,
				1,1,1,0,1,0,1,0,1,1,0,1,3,
				1,0,1,1,1,0,1,0,1,1,0,1,6,
				1,1,1,0,0,1,1,0,1,1,0,1,3,
				1,0,1,1,0,1,1,0,1,1,0,1,6,
				1,0,1,0,1,1,1,0,1,1,0,1,6,
				1,1,1,0,1,1,1,0,1,1,0,1,3,
				1,0,1,1,1,1,1,0,1,1,0,1,6,
				1,0,1,1,0,0,0,1,1,1,0,1,6,
				1,0,1,0,1,0,0,1,1,1,0,1,6,
				1,1,1,0,1,0,0,1,1,1,0,1,3,
				1,0,1,1,1,0,0,1,1,1,0,1,6,
				1,1,1,0,0,1,0,1,1,1,0,1,3,
				1,0,1,1,0,1,0,1,1,1,0,1,6,
				1,0,1,0,1,1,0,1,1,1,0,1,6,
				1,1,1,0,1,1,0,1,1,1,0,1,3,
				1,0,1,1,1,1,0,1,1,1,0,1,6,
				1,0,1,1,0,0,1,1,1,1,0,1,6,
				1,0,1,0,1,0,1,1,1,1,0,1,6,
				1,1,1,0,1,0,1,1,1,1,0,1,3,
				1,0,1,1,1,0,1,1,1,1,0,1,6,
				1,1,1,0,0,1,1,1,1,1,0,1,3,
				1,0,1,1,0,1,1,1,1,1,0,1,6,
				1,0,1,0,1,1,1,1,1,1,0,1,6,
				1,1,1,0,1,1,1,1,1,1,0,1,3,
				1,0,1,1,1,1,1,1,1,1,0,1,6,
				1,0,1,1,0,0,0,0,0,0,1,1,6,
				1,1,1,0,1,0,0,0,0,0,1,1,3,
				1,0,1,1,1,0,0,0,0,0,1,1,6,
				1,0,1,1,0,1,0,0,0,0,1,1,6,
				1,0,1,0,1,1,0,0,0,0,1,1,6,
				1,1,1,0,1,1,0,0,0,0,1,1,3,
				1,0,1,1,1,1,0,0,0,0,1,1,6,
				1,0,1,1,0,0,1,0,0,0,1,1,6,
				1,0,1,0,1,0,1,0,0,0,1,1,6,
				1,1,1,0,1,0,1,0,0,0,1,1,3,
				1,0,1,1,1,0,1,0,0,0,1,1,6,
				1,1,1,0,0,1,1,0,0,0,1,1,3,
				1,0,1,1,0,1,1,0,0,0,1,1,6,
				0,1,0,0,1,1,1,0,0,0,1,1,4,
				1,0,1,0,1,1,1,0,0,0,1,1,6,
				1,1,1,0,1,1,1,0,0,0,1,1,3,
				1,0,1,1,1,1,1,0,0,0,1,1,6,
				1,0,1,1,0,0,0,1,0,0,1,1,6,
				1,0,1,0,1,0,0,1,0,0,1,1,6,
				1,1,1,0,1,0,0,1,0,0,1,1,3,
				1,0,1,1,1,0,0,1,0,0,1,1,6,
				1,1,1,0,0,1,0,1,0,0,1,1,3,
				1,0,1,1,0,1,0,1,0,0,1,1,6,
				1,0,1,0,1,1,0,1,0,0,1,1,6,
				1,1,1,0,1,1,0,1,0,0,1,1,3,
				1,0,1,1,1,1,0,1,0,0,1,1,6,
				1,0,1,1,0,0,1,1,0,0,1,1,6,
				1,0,1,0,1,0,1,1,0,0,1,1,6,
				1,1,1,0,1,0,1,1,0,0,1,1,3,
				1,0,1,1,1,0,1,1,0,0,1,1,6,
				1,1,1,0,0,1,1,1,0,0,1,1,3,
				1,0,1,1,0,1,1,1,0,0,1,1,6,
				1,0,1,0,1,1,1,1,0,0,1,1,6,
				1,1,1,0,1,1,1,1,0,0,1,1,3,
				1,0,1,1,1,1,1,1,0,0,1,1,6,
				1,0,1,1,0,0,0,0,1,0,1,1,6,
				1,1,1,0,1,0,0,0,1,0,1,1,3,
				1,0,1,1,1,0,0,0,1,0,1,1,6,
				1,0,1,1,0,1,0,0,1,0,1,1,6,
				1,0,1,0,1,1,0,0,1,0,1,1,6,
				1,1,1,0,1,1,0,0,1,0,1,1,3,
				1,0,1,1,1,1,0,0,1,0,1,1,6,
				1,0,1,1,0,0,1,0,1,0,1,1,6,
				1,0,1,0,1,0,1,0,1,0,1,1,6,
				1,1,1,0,1,0,1,0,1,0,1,1,3,
				1,0,1,1,1,0,1,0,1,0,1,1,6,
				1,1,1,0,0,1,1,0,1,0,1,1,3,
				1,0,1,1,0,1,1,0,1,0,1,1,6,
				0,1,0,0,1,1,1,0,1,0,1,1,4,
				1,0,1,0,1,1,1,0,1,0,1,1,6,
				1,1,1,0,1,1,1,0,1,0,1,1,3,
				1,0,1,1,1,1,1,0,1,0,1,1,6,
				0,0,0,0,0,0,0,1,1,0,1,1,5,
				0,0,0,1,0,0,0,1,1,0,1,1,5,
				1,0,1,1,0,0,0,1,1,0,1,1,6,
				1,0,1,0,1,0,0,1,1,0,1,1,6,
				1,1,1,0,1,0,0,1,1,0,1,1,3,
				1,0,1,1,1,0,0,1,1,0,1,1,6,
				1,1,1,0,0,1,0,1,1,0,1,1,3,
				1,0,1,1,0,1,0,1,1,0,1,1,6,
				1,0,1,0,1,1,0,1,1,0,1,1,6,
				1,1,1,0,1,1,0,1,1,0,1,1,3,
				1,0,1,1,1,1,0,1,1,0,1,1,6,
				1,0,1,1,0,0,1,1,1,0,1,1,6,
				1,0,1,0,1,0,1,1,1,0,1,1,6,
				1,1,1,0,1,0,1,1,1,0,1,1,3,
				1,0,1,1,1,0,1,1,1,0,1,1,6,
				1,1,1,0,0,1,1,1,1,0,1,1,3,
				1,0,1,1,0,1,1,1,1,0,1,1,6,
				1,0,1,0,1,1,1,1,1,0,1,1,6,
				1,1,1,0,1,1,1,1,1,0,1,1,3,
				1,0,1,1,1,1,1,1,1,0,1,1,6,
				1,0,1,1,0,0,0,0,0,1,1,1,6,
				1,1,1,0,1,0,0,0,0,1,1,1,3,
				1,0,1,1,1,0,0,0,0,1,1,1,6,
				1,0,1,1,0,1,0,0,0,1,1,1,6,
				1,0,1,0,1,1,0,0,0,1,1,1,6,
				1,1,1,0,1,1,0,0,0,1,1,1,3,
				1,0,1,1,1,1,0,0,0,1,1,1,6,
				1,0,1,1,0,0,1,0,0,1,1,1,6,
				1,0,1,0,1,0,1,0,0,1,1,1,6,
				1,1,1,0,1,0,1,0,0,1,1,1,3,
				1,0,1,1,1,0,1,0,0,1,1,1,6,
				1,1,1,0,0,1,1,0,0,1,1,1,3,
				1,0,1,1,0,1,1,0,0,1,1,1,6,
				1,0,1,0,1,1,1,0,0,1,1,1,6,
				1,1,1,0,1,1,1,0,0,1,1,1,3,
				1,0,1,1,1,1,1,0,0,1,1,1,6,
				1,0,1,1,0,0,0,1,0,1,1,1,6,
				1,0,1,0,1,0,0,1,0,1,1,1,6,
				1,1,1,0,1,0,0,1,0,1,1,1,3,
				1,0,1,1,1,0,0,1,0,1,1,1,6,
				1,1,1,0,0,1,0,1,0,1,1,1,3,
				1,0,1,1,0,1,0,1,0,1,1,1,6,
				1,0,1,0,1,1,0,1,0,1,1,1,6,
				1,1,1,0,1,1,0,1,0,1,1,1,3,
				1,0,1,1,1,1,0,1,0,1,1,1,6,
				1,0,1,1,0,0,1,1,0,1,1,1,6,
				1,0,1,0,1,0,1,1,0,1,1,1,6,
				1,1,1,0,1,0,1,1,0,1,1,1,3,
				1,0,1,1,1,0,1,1,0,1,1,1,6,
				1,1,1,0,0,1,1,1,0,1,1,1,3,
				1,0,1,1,0,1,1,1,0,1,1,1,6,
				1,0,1,0,1,1,1,1,0,1,1,1,6,
				1,1,1,0,1,1,1,1,0,1,1,1,3,
				1,0,1,1,1,1,1,1,0,1,1,1,6,
				1,0,1,1,0,0,0,0,1,1,1,1,6,
				1,1,1,0,1,0,0,0,1,1,1,1,3,
				1,0,1,1,1,0,0,0,1,1,1,1,6,
				1,0,1,1,0,1,0,0,1,1,1,1,6,
				1,0,1,0,1,1,0,0,1,1,1,1,6,
				1,1,1,0,1,1,0,0,1,1,1,1,3,
				1,0,1,1,1,1,0,0,1,1,1,1,6,
				1,0,1,1,0,0,1,0,1,1,1,1,6,
				1,0,1,0,1,0,1,0,1,1,1,1,6,
				1,1,1,0,1,0,1,0,1,1,1,1,3,
				1,0,1,1,1,0,1,0,1,1,1,1,6,
				1,1,1,0,0,1,1,0,1,1,1,1,3,
				1,0,1,1,0,1,1,0,1,1,1,1,6,
				1,0,1,0,1,1,1,0,1,1,1,1,6,
				1,1,1,0,1,1,1,0,1,1,1,1,3,
				1,0,1,1,1,1,1,0,1,1,1,1,6,
				1,0,1,1,0,0,0,1,1,1,1,1,6,
				1,0,1,0,1,0,0,1,1,1,1,1,6,
				1,1,1,0,1,0,0,1,1,1,1,1,3,
				1,0,1,1,1,0,0,1,1,1,1,1,6,
				1,1,1,0,0,1,0,1,1,1,1,1,3,
				1,0,1,1,0,1,0,1,1,1,1,1,6,
				1,0,1,0,1,1,0,1,1,1,1,1,6,
				1,1,1,0,1,1,0,1,1,1,1,1,3,
				1,0,1,1,1,1,0,1,1,1,1,1,6,
				1,0,1,1,0,0,1,1,1,1,1,1,6,
				1,0,1,0,1,0,1,1,1,1,1,1,6,
				1,1,1,0,1,0,1,1,1,1,1,1,3,
				1,0,1,1,1,0,1,1,1,1,1,1,6,
				1,1,1,0,0,1,1,1,1,1,1,1,3,
				1,0,1,1,0,1,1,1,1,1,1,1,6,
				1,0,1,0,1,1,1,1,1,1,1,1,6,
				1,1,1,0,1,1,1,1,1,1,1,1,3,
				1,0,1,1,1,1,1,1,1,1,1,1,6];

			let ind=0;
			for (let i=0;i<555;i++)
			{
				for (let j=0;j<13;j++)
				{
					F[i][j]=FF[ind];
					ind++;
				}
			}			
		
		 // Формування результату
            let min;
            let f = new Array(555);
            for (let ii = 0; ii < 555; ii++)
            {
                f[ii] = 0;
                for (let jj = 0; jj < 12; jj++)
                {
					f[ii] = f[ii]+(x[jj] - F[ii][jj])*(x[jj] - F[ii][jj]);
                }
            }

            min = f[0];
            let nomf = 0;
            for (let ii = 1; ii < 555; ii++)
            {
                if (f[ii] <= min)
                {
                    min = f[ii];
                    nomf = ii;
                }
            }
			
		/*	// Проверка минимумов
			let kolmin=0;
			for (let i=0;i<555;i++) if(f[i]==min) kolmin++;
			alert("Min = "+min+"  kolmin = "+(kolmin+1));   */
				
			
			// Формування рекомендації
            let diag = [ "Ви потребуєте моніторування ФР 1 раз на 12 місяців",
            "Ви потребуєте негайного і ретельного дообстеження",
            "Ви потребуєте постійного моніторування ФР 1 раз на 3 місяці",
            "Ви потребуєте постійного моніторування ФР 1 раз на 6 місяців",
            "Ви потрибуєте моніторування ФР 1 раз на 12 місяців та корекцію способу життя",
            "Ви потрибуєте постійного моніторування ФР 1 раз на 6 місяців та тривалого спостереження, зверніться до лікаря"];
			let recomend=diag[F[nomf][12]-1];
			
            alert("РЕКОМЕНДАЦІЇ: "+recomend);
			
			dataString = dataString+"РЕКОМЕНДАЦІЇ: "+recomend+ `\r\n`;
				
		 // Надсилання даних через EmailJS
        let sendResult = sendEmail(
            "2-Ru5oRquKtddIUuP", 
            "service_l1jvuig", 
            "template_bta987j", 
            "a.dovnar@khai.edu", 
            fullName, 
            dataString);

        sendResult.then(
                function (response) {
                    console.log("Email відправлено:", response);
                    alert("Email відправлено!");
                },
                function (error) {
                    console.error("Помилка надсилання:", error);
                    alert("Помилка надсилання!");
                }  
		
        // Записуємо у data.txt
        // saveToFile(surveyData.join("\n"));

        // Надсилання даних через EmailJS
     //   emailjs.init("2-Ru5oRquKtddIUuP"); // Замініть на ваш публічний ключ EmailJS
		
    /*    emailjs.send("service_l1jvuig","template_bta987j", {
			to_email: "alexandrdovnar@gmail.com",
			to_name: fullName,
			from_name: "Опитування факторів ризику",
			message: surveyData.join("\n"),
            currentDate: currentDate,
            fullName: fullName,
            gender: gender,
            systolicPressure: systolicPressure,
            diastolicPressure: diastolicPressure,
            friends: friends
        }).then(
            function (response) {
                console.log("Email відправлено:", response);
            },
            function (error) {
                console.error("Помилка надсилання:", error);
            } */
        );
    };
});
