
const regForm = document.forms.regForm;

const nameField = regForm.name;
const secNameField = regForm.secName;
const emailField = regForm.email;
const passwordField = regForm.password;

regForm.addEventListener('submit', (e) => {

    let HaveErros = false;

    //Объекты ошибок
    const ErrorMessages = regForm.children;

    let resName = true;
    //Проверка имени на длину
    if(nameField.value.length >= 2)
    {
        ErrorMessages.length_name.style.display = 'none';
    }
    else
    {
        ErrorMessages.length_name.style.display = 'block';
        resName = false;
        HaveErros = true;
    }
    //Проверка имени на кириллицу
    if(/^[а-я]+$/i.test(nameField.value))
    {
        ErrorMessages.alphabet_name.style.display = 'none';
    }
    else
    {
        ErrorMessages.alphabet_name.style.display = 'block';
        resName = false;
        HaveErros = true;
    }
    //Окрашиваем поле в зависимости от результата
    if(resName)
    {
        document.getElementById("register_name").style.backgroundColor = "white";
    }else{
        document.getElementById("register_name").style.backgroundColor = "pink";
    }


    let resSec = true;
    //Проверка фамилии на длину
    if(secNameField.value.length >= 2)
    {
        ErrorMessages.length_secName.style.display = 'none';
    }
    else
    {
        ErrorMessages.length_secName.style.display = 'block';
        resSec = false;
        HaveErros = true;
    }
    //Проверка фамилии на кириллицу
    if(/^[а-я]+$/i.test(secNameField.value))
    {
        ErrorMessages.alphabet_secName.style.display = 'none';
    }
    else
    {
        ErrorMessages.alphabet_secName.style.display = 'block';
        resSec = false;
        HaveErros = true;
    }
    //Окрашиваем поле в зависимости от результата
    if(resSec)
    {
        document.getElementById("register_secName").style.backgroundColor = "white";
    }else{
        document.getElementById("register_secName").style.backgroundColor = "pink";
    }

    //Проверка email 
    if(/^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/i.test(emailField.value))
    {
        ErrorMessages.email_error.style.display = 'none';
        document.getElementById("register_email").style.backgroundColor = "white";
    }
    else
    {
        ErrorMessages.email_error.style.display = 'block';
        document.getElementById("register_email").style.backgroundColor = "pink";
        HaveErros = true;
    }

    let resPasswd = true;
    //Проверки пароля
    //На длину
    if(passwordField.value.length >= 8)
    {
        ErrorMessages.length_passwd.style.display = 'none';
    }
    else
    {
        ErrorMessages.length_passwd.style.display = 'block';
        resPasswd = false;
        HaveErros = true;
    }
    //На наличие цифры
    if(/[0-9]/.test(passwordField.value))
    {
        ErrorMessages.digit_passwd.style.display = 'none';
    }
    else
    {
        ErrorMessages.digit_passwd.style.display = 'block';
        resPasswd = false;
        HaveErros = true;
    }
    //На наличие буквы
    if(/[a-zA-Z]/.test(passwordField.value))
    {
        ErrorMessages.char_passwd.style.display = 'none';
    }
    else
    {
        ErrorMessages.char_passwd.style.display = 'block';
        resPasswd = false;
        HaveErros = true;
    }
    //Окрашиваем поле в зависимости от результата
    if(resPasswd)
    {
        document.getElementById("register_password").style.backgroundColor = "white";
    }else{
        document.getElementById("register_password").style.backgroundColor = "pink";
    }

    if(HaveErros)
    {
        //Отменяет перезагрузку страницы при отправке формы
        e.preventDefault();
    }
    else
    {
        let result = confirm(`Вы ввели следующие поля:
                              Имя: ${nameField.value}
                              Фамилия: ${secNameField.value}
                              E-mail: ${emailField.value}
                              Пароль: ${passwordField.value}`);
        if(!result)
        {
            //Отменяет перезагрузку страницы при отправке формы
            e.preventDefault();
        }
    }

})

