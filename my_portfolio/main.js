const name1 = document.getElementById("name");
const password1 = document.getElementById("password");
const button = document.getElementById("but");
const div = document.getElementById("div");

button.addEventListener("click", function() {
    const name = name1.value.trim();
    const password2 = password1.value.trim();
    
    alert(`привет ${name}, твой пароль "${password2}" уже сохранен в базу данных :)`);
});

//Tahoma