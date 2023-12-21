/*
    README:

    Данный скрипт производит обработку формы с дальнейшей отправкой в PHP обработчик
    
    В случае необходимости добавления новых полей / удадения ненужных меняем код в следующих местах:

    1. В switch, ветках case, в зависимости от ответа капчи (true/false/null) в методе ajax массив data:
       - до ":" указывются имена имена полей в POST массиве (там они создадутся автомаически)
       - после ":" указываются селекторы полей (input), откуда берется информация. Это может быть id или запись вида input[name=""]
    2. Ветка "success":
       - меняем запись вида $("").val(''). В поле $("") прописываем свои значения полей. Данный участок кода производит очистку полей после успешной отправки формы
          
    В случае необходимости изменения текста уведомления меняем текст внутри $(".success-title").html() (можно прописать любой HTML код)
 */

var button = document.querySelector("#sm"),
    message = document.querySelector(".message"),
    modalDialog = document.querySelector(".modal__dialog"),
    modalIcon = document.querySelector(".success-ico"), requiredFields, requiredCounter, radioVal, radioElem, radioCounter, allElemsCount, checkboxElem, checkboxVal, capchaFlag, templatePath;
function fadeIn(el, timeout, display){
    el.style.opacity = 0;
    el.style.display = display || 'flex';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
    el.style.opacity = 1;
    }, 10);
};
checkboxVal = "off";
radioVal = '';
document.addEventListener("click", function(e){
    if(e.target.type == "radio"){
        radioElem = e.target;
        radioVal = document.querySelector('label[for='+ e.target.id +']').textContent;
    }
    if(e.target.type == "checkbox"){
        if(checkboxVal == "on"){
            checkboxVal = "";
        }
        else{
            checkboxVal = e.target.value;
        }
    }
});
templatePath = document.querySelector("#template_path").value;
button.addEventListener("click",function(e){
        e.preventDefault();
        $.ajax({
            url: templatePath + "/checkCaptcha.php",
            method: "POST",
            data: {
                'captcha_word': $('input[name="captcha_word"]').val(),
                'captcha_sid': $('input[name="captcha_sid"]').val(),
            },
            dataType: "json",
            success: function(data){
                capchaFlag = data.capchaFlag;
            }
        }); 
        function agregateForm(){
            requiredFields = document.querySelectorAll("input[required]");
            requiredCounter = 0;
            radioCounter = 0;
            allElemsCount = 0;
            for(requiredField of requiredFields){
                if(requiredField.value != '' && requiredField.type != "checkbox"){
                    requiredCounter++;
                }
                if(requiredField.type == "radio"){
                    radioCounter++;
                }
            }    
            radioCounter--;
            requiredCounter = requiredCounter - radioCounter;
            allElemsCount = requiredFields.length - radioCounter;  
            if(requiredCounter != allElemsCount)
            {
                $(".success-title").html("Заполнены не все поля ввода");
                $(".success-ico").html('<img class src="/local/templates/main2/assets/images/pupupError.jpg" alt="">');
                fadeIn(message, 500);
                message.classList.add("show");
            }
            else if(checkboxVal != "on"){
                $(".success-title").html("Примите согласие на обработку персональных данных");
                $(".success-ico").html('<img class src="/local/templates/main2/assets/images/pupupError.jpg" alt="">');
                fadeIn(message, 500);
                message.classList.add("show");
            }
            else{
                switch(capchaFlag){
                    case true:
                        if(modalDialog != null){
                            modalDialog.parentNode.classList.remove("modal--show");
                        }
                        $.ajax({
                            url: templatePath + '/addToIBlock.php',
                            method: "POST",
                            data: {
                                'name': $("#form_text_4").val(),
                                'sirname': $("#form_text_10").val(),
                                'patronymic': $("#form_text_11").val(),
                                'phone': $(".regestry_form__tel").val(),
                                'email': $(".regestry_form__email").val(),
                                'section': $("#dropdown").val(),
                                'partType': radioVal,
                                'workPlace': $("#form_text_13").val(),
                                'positionAtWork': $("#form_text_14").val(),
                                'iblock_id': $("#iblock_id").val()
                            },
                            success: function(){
                                $(".success-title").html("Спасибо!<br>Ваша заявка приянята");
                                $(".success-ico").html('<img src="/local/templates/main2/assets/images/popup-success.svg" alt="">')
                                fadeIn(message, 500);
                                $('.message').addClass("show");
                                $("body").css('overflow', 'hidden');
                                $("#form_text_4").val('');
                                $("#form_text_10").val('');
                                $("#form_text_11").val('');
                                $(".regestry_form__tel").val('');
                                $(".regestry_form__email").val('');
                                $("#form_text_13").val('');
                                $("#form_text_14").val('');
                                $(".inputtext").val('');
                                $('input[type=checkbox]').prop('checked', false); 
                                $('input[type=radio]').prop('checked', false); 
                                checkboxVal = "off";
                                radioVal = '';
                                $.get('/local/templates/main2/components/bitrix/form.result.new/geosib_registry/refreshCaptcha.php', function(data) {
                                    $('#captcha_img').attr('src','/bitrix/tools/captcha.php?captcha_sid='+data);
                                    $('input[name="captcha_sid"]').val(data);
                                });
                                    
                            },
                            error: function(){
                                $(".message").html("Что то пошло не так");
                            }
                        });
                        break;
                    case false:
                        $(".success-title").html("Не верно введено значение CAPTCHA");
                        $(".success-ico").html('<img class src="/local/templates/main2/assets/images/pupupError.jpg" alt="">');
                        fadeIn(message, 500);
                        message.classList.add("show");
                        break;
                    case null:
                        $(".success-title").html("Не введено значение CAPTCHA");
                        $(".success-ico").html('<img class src="/local/templates/main2/assets/images/pupupError.jpg" alt="">');
                        fadeIn(message, 500);
                        message.classList.add("show");
                        break;
                }
        } 
    }
    setTimeout(agregateForm, 100);
});