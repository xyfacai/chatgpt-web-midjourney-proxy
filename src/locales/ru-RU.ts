export default {
  common: {
    add: 'Добавить',
    addSuccess: 'Добавлено успешно',
    edit: 'Редактировать',
    editSuccess: 'Изменено успешно',
    delete: 'Удалить',
    deleteSuccess: 'Удалено успешно',
    save: 'Сохранить',
    saveSuccess: 'Сохранено успешно',
    reset: 'Сбросить',
    action: 'Действие',
    export: 'Экспортировать',
    exportSuccess: 'Экспорт выполнен успешно',
    import: 'Импортировать',
    importSuccess: 'Импорт выполнен успешно',
    clear: 'Очистить',
    clearSuccess: 'Очищено успешно',
    yes: 'Да',
    no: 'Нет',
    confirm: 'Подтвердить',
    download: 'Загрузить',
    noData: 'Нет данных',
    wrong: 'Что-то пошло не так, пожалуйста, повторите попытку позже.',
    success: 'Успех',
    failed: 'Не удалось',
    verify: 'Проверить',
    unauthorizedTips: 'Не авторизован, сначала подтвердите свою личность.',
    stopResponding: 'Прекращение отклика',
  },
  chat: {
    newChatButton: 'Новый чат',
    //placeholder: 'Спросите меня о чем-нибудь ... (Shift + Enter = перенос строки, "/" для вызова подсказок)',
    placeholder: 'Вы можете ввести что-то сказать, или вы можете вставить скриншоты или перетащить файлы.',
    placeholderMobile: 'Спросите меня о чем-нибудь ...',
    copy: 'Копировать',
    copied: 'Скопировано',
    copyCode: 'Копировать код',
    clearChat: 'Очистить чат',
    clearChatConfirm: 'Вы уверены, что хотите очистить этот чат?',
    exportImage: 'Экспорт в изображение',
    exportImageConfirm: 'Вы уверены, что хотите экспортировать этот чат в формате PNG?',
    exportSuccess: 'Экспортировано успешно',
    exportFailed: 'Не удалось выполнить экспорт',
    usingContext: 'Режим контекста',
    turnOnContext: 'В текущем режиме отправка сообщений будет включать предыдущие записи чата.',
    turnOffContext: 'В текущем режиме отправка сообщений не будет включать предыдущие записи чата.',
    deleteMessage: 'Удалить сообщение',
    deleteMessageConfirm: 'Вы уверены, что хотите удалить это сообщение?',
    deleteHistoryConfirm: 'Вы уверены, что хотите очистить эту историю?',
    clearHistoryConfirm: 'Вы уверены, что хотите очистить историю чата?',
    preview: 'Предварительный просмотр',
    showRawText: 'Показать как обычный текст',
  },
  setting: {
    setting: 'Настройки',
    general: 'Общее',
    advanced: 'Дополнительно',
    config: 'Конфигурация',
    avatarLink: 'Ссылка на аватар',
    name: 'Имя',
    description: 'Описание',
    backgroundImage: 'Фоновое изображение',
    role: 'Роль',
    temperature: 'Температура',
    top_p: 'Top_p',
    resetUserInfo: 'Сбросить информацию о пользователе',
    chatHistory: 'История чата',
    theme: 'Тема',
    language: 'Язык',
    api: 'API',
    reverseProxy: 'Обратный прокси-сервер',
    timeout: 'Время ожидания',
    socks: 'Socks',
    httpsProxy: 'HTTPS-прокси',
    balance: 'Баланс API',
    monthlyUsage: 'Ежемесячное использование',
  },
  store: {
    siderButton: 'Хранилище подсказок',
    local: 'Локальное',
    online: 'Онлайн',
    title: 'Название',
    description: 'Описание',
    clearStoreConfirm: 'Вы действительно хотите очистить данные?',
    importPlaceholder: 'Пожалуйста, вставьте здесь JSON-данные',
    addRepeatTitleTips: 'Дубликат названия, пожалуйста, введите другое название',
    addRepeatContentTips: 'Дубликат содержимого: {msg}, пожалуйста, введите другой текст',
    editRepeatTitleTips: 'Конфликт названий, пожалуйста, измените название',
    editRepeatContentTips: 'Конфликт содержимого {msg}, пожалуйста, измените текст',
    importError: 'Не совпадает ключ-значение',
    importRepeatTitle: 'Название повторяющееся, пропускается: {msg}',
    importRepeatContent: 'Содержание повторяющееся, пропускается: {msg}',
    onlineImportWarning: 'Внимание! Проверьте источник JSON-файла!',
    downloadError: 'Проверьте состояние сети и правильность JSON-файла',
  },
  "mj": {
    "setOpen": "OpenAI связанный",
    "setOpenPlaceholder": "Должен содержать http(s)://",
    "setOpenUrl": "Адрес интерфейса OpenAI",
    "setOpenKeyPlaceholder": "Используйте свой собственный ключ OpenAI для обхода ограничений доступа по паролю",
    "setMj": "Midjourney связанный",
    "setMjUrl": "Адрес интерфейса Midjourney:",
    "setMjKeyPlaceholder": "Используйте свой собственный Api Secret для обхода ограничений доступа по паролю",
    "setUploader": "Связанный с загрузкой",
    "setUploaderUrl": "Адрес загрузки:",
    "setBtSave": "Сохранить",
    "setBtBack": "Восстановить по умолчанию",


  "redraw": "Частичная Перерисовка",
  "fail1": "Пожалуйста, будьте терпеливы, идет загрузка.",
  "success1": "Изображение успешно обновлено!",
  "high_variation": "Сильные Изменения",
  "low_variation": "Слабые Изменения",
  "p15": "Увеличение 1.5x",
  "p20": "Увеличение 2x",
  "p100": "Обычное",
  "retry": "Повторный Анализ",
  "pan_left": "Переанализировать влево",
  "pan_right": "Переанализировать вправо",
  "pan_up": "Переанализировать вверх",
  "pan_down": "Переанализировать вниз",
  "up2": "Высокое Разрешение 2x",
  "up4": "Высокое Разрешение 4x",

  "thinking": "В раздумьях...",
  "noReUpload": "Нельзя повторно загружать",
  "uploading": "Загрузка...",
  "uploadSuccess": "Загрузка успешна",
  "uploadFail": "Ошибка загрузки:",
  "upPdf": "<span>Загрузите изображение или вложение<br/>Вы можете загрузить изображения, PDF, EXCEL и другие документы</span><p>Поддерживается перетаскивание</p>",
  "upImg": "<span><b>Загрузить изображение</b><br/>Автоматически вызовет модель gpt-4-vision-preview<br>Примечание: Могут действовать дополнительные тарифы за изображения<br/>Форматы: jpeg, jpg, png, gif</span><p>Поддерживается перетаскивание</p> <p class=\"pt-2\"><b>Загрузить MP3 MP4</b> <br>Автоматически вызовет модель whisper-1<br>Форматы: mp3, mp4, mpeg, mpga, m4a, wav, webm</p>",
  "clearAll": "Очистить параметры",
  "czoom": "Настроить",
  "customTitle": "Настроить зум",
  "zoominfo": "Измените значение зума, диапазон от 1.0 до 2.0, по умолчанию установлено 1.8",

  "modleSuccess": "Модель успешно загружена",
  "setingSuccess": "Настройки успешно выполнены",

 "tokenInfo1": "Оставшиеся токены = Длина модели - Установка роли - Контекст (История разговора) - Количество ответов - Текущий ввод",
"tokenInfo2": "Оставьте установку роли пустой, и система предоставит значение по умолчанию.",
"noSuppertModel": "Обновите, эта модель в настоящее время не поддерживается!",
"failOcr": "Ошибка распознавания",
"remain": "Осталось:",

  "totalUsage": "Общая сумма подписки",
  "disableGpt4": "GPT4 отключен",
  "setTextInfo": "Ошибка ключа OpenAI API, нажмите здесь, чтобы повторить попытку",

  "attr1": "Вложение",
  "ulink": "Ссылка на оригинальное изображение",
  "copyFail": "Не удалось скопировать",
  "tts": "Текст в речь",
  "fail": "Произошла ошибка",
  "noSupperChrom": "Браузер не поддерживается!",
  "lang": "Голос",
  "ttsLoading": "Преобразование в речь...",
  "ttsSuccess": "Преобразование успешно",
  "micIng": "Идет запись, скажите что-нибудь...",
  "mStart": "Начать",
  "mPause": "Пауза",
  "mGoon": "Продолжить",
  "mRecord": "Перезаписать",
  "mPlay": "Воспроизвести",
  "mCanel": "Отмена",
  "mSent": "Отправить",
  "findVersion": "Обнаружить обновленную версию",
  "yesLastVersion": "Уже последняя версия",
  "infoStar": "",
  "setBtSaveChat": "Сохранить только чат",
  "setBtSaveSys": "Сохранить в систему",

  "wsrvClose": "Закрыть wsrv",
  "wsrvOpen": "Открыть wsrv",

  "temperature": "Случайность",
  "temperatureInfo": "При увеличении значения (temperature) ответы становятся более случайными",
  "top_p": "Верхняя вероятность выборки",
  "top_pInfo": "(top_p) аналогично случайности, но не следует изменять вместе с температурой",
  "presence_penalty": "Свежесть темы",
  "presence_penaltyInfo": "При увеличении значения (presence_penalty) увеличивается вероятность расширения на новые темы",
  "frequency_penalty": "Частотное наказание",
  "frequency_penaltyInfo": "При увеличении значения (frequency_penalty) увеличивается вероятность уменьшения повторяющихся слов"
  ,"tts_voice": "Голос TTS",
  "typing": "Печать",
  "authErro": "Ошибка авторизации",
  "authBt": "Пожалуйста, введите пароль доступа к авторизации снова",

  "micWhisper": "Распознавание шепота",
  "micAsr": "Мгновенное распознавание",
  "micRec": "Начать запись, пожалуйста, говорите! Запись автоматически остановится, если 2 секунды не будет звука.",
  "micRecEnd": "Запись завершена",
  subtle: 'Высокое разрешение 2x'
  ,creative: 'Высокое разрешение 2x. Творческий'
  ,gpt_gx: 'GPT использует g-*',

  
  "ideoabout": "О Идеограмме",
  "ideoserver": "Сервер Идеограммы",
  "ideokeyPlaceholder": "API-ключ для Идеограммы (необязательно)",
  "ideopls": "Подсказки для описания изображения",
  "nohead": "Не включает",

  klingabout: 'Клинг О',
  klingserver: 'Адрес API Клинг',
  klingkeyPlaceholder: 'API-ключ Клинг (необязательно)',
  klingkey: 'Ключ Клинг',
  mode: 'Режим',
  duration: 'Продолжительность',
  negative_prompt: 'Поместите текст без объектов сюда',
  std: 'Высокая производительность',
  pro: 'Высокое качество',
  needImg: 'Пожалуйста, загрузите эталонное изображение, чтобы это заработало!',
  seed: 'Число семени 1~2147483647',
  klingInfo: 'Описание: <li>1. Высокое качество стоит в 3.5 раза дороже</li> <li>2. 10 секунд стоит в 2 раза дороже</li> <li>3. Последний кадр должен иметь эталонное изображение для действия</li>'
  ,"camera_type": "Объектив",
  "cnull": "Умное соответствие",
  "down_back": "Опустить и отдалить",
  "forward_up": "Продвинуть вперед и поднять",
  "right_turn_forward": "Повернуть вправо и продвинуться вперед",
  "left_turn_forward": "Повернуть влево и продвинуться вперед"
  ,kling:'Kling',
  rttab: 'Голос',
  rtinfo: 'Служба голосового общения в реальном времени (realtime)',
  rtsetting: 'Пожалуйста, настройте сервер. В настоящее время Realtime поддерживает только удаленные службы; для локальных услуг свяжитесь с автором.',
  rjcloded: 'Соединение разорвано',
  checkkey: 'Пожалуйста, проверьте правильность API-ключа',
  rtsuccess: 'Соединение нормально, поддерживаем звонок',
  rtservererror: 'Ошибка подключения к серверу WebSocket!',
  rtservererror2: 'Запись не поддерживается, возможно, это связано с устройством!',
  rtconecting: 'Подключение к серверу'

  ,"confirmDelete": "Вы уверены, что хотите удалить?",
  "pikaabout": "О Pika",
  "pikaserver": "Адрес API Pika",
  "pikakeyPlaceholder": "API-ключ Pika (необязательно)",
  "createFail": "Не удалось создать",
  "selecteff": "Эффект справки",

   "udioabout": "О Udio",
    "udiokeyPlaceholder": "API-ключ Udio (необязательно)",
    "udioserver": "Адрес API Udio",
    "ud_prompt": "Подсказка",
    "ud_prompt_pls": "Подсказка: Описание, Стиль",
    "ud_ly_write": "Пользовательские тексты",
    "ud_ly_auto": "Интеллектуальные тексты",
    "ud_ly_null": "Чистая музыка",
    "ud_v32": "Доступно",
    "ud_v130": "Долгое время",
    "ud_info": "Примечание: <ul><li>1. Udio-32 имеет короткую продолжительность</li><li>2. Udio-130 стоит вдвое дороже Udio-32</li><li>3. В подсказке можно указать стиль, описание и т. д.</li></ul>",
    "ud_fail": "Не удалось сгенерировать эту песню!",
    "ud_doing": "Нельзя воспроизводить во время генерации",
    "ud_continuation": "Продолжение",
    "ud_precede": "Предшествующее",

    "upImg2": "<span><b>Загрузить изображение</b><br/>Эта модель поддерживает распознавание изображений<br>Примечание: будут дополнительные расходы на изображения<br/>Форматы: jpeg jpg png gif</span><p>Поддерживает перетаскивание</p> <p class=\"pt-2\"><b>Загрузить MP3 MP4</b> <br>Автоматически вызовет модель whisper-1<br>Форматы: mp3 mp4 mpeg mpga m4a wav webm</p>",
    "rml_info": "Примечание:<ul><li>1. Должно быть изображение</li><li>2. Модель имеет только одну gen3a_turbo</li><li>3. Цена за 10 секунд вдвое выше, чем за 5 секунд</li></ul>",
    "rml_heng": "Пейзаж",
    "rml_shu": "Портрет",
    
    "pixabout": "Связано с Pixverse",
    "pixkeyPlaceholder": "API-ключ Pixverse можно оставить пустым",
    "pixserver": "Адрес API Pixverse",
    "pixinfo": " Описание:<br> <ul> <li>1. Основано на v3.5 360p продолжительность 5s режим Normal</li><li>2. v2.5 это 0.5 раза</li> <li>3. Продолжительность 10s это 2 раза</li> <li>4. 540P это 1.5 раза, 720P это 2 раза, 1080P это 4 раза</li> <li>5. Режим производительности это 2 раза</li> <li>6. Множители умножаются, например, 720P продолжительность 10s это 2*2, что составляет 4 раза, и если добавить производительность, то это будет 8 раз</li></ul>"
    ,
    "riffabout": "О Riffusion",
    "riffkeyPlaceholder": "API-ключ Riffusion (необязательно)",
    "riffserver": "Адрес API Riffusion",
    "riffinfo": "Описание",
    
    "editImage": "Редактирование изображения",
    "editVideo": "Изображение в видео",
    "moreset": "Дополнительные параметры"
    
  },
  "mjset": {
    "server": "Сервер",
    "about": "О нас",
    "model": "Модель",
    "sysname": "Искусственный интеллект для рисования"
  },
  "mjtab": {
    "chat": "Чат",
    "draw": "Рисование",
    "drawinfo": "Рисование с использованием искусственного интеллекта Midjourney",
    "gallery": "Галерея",
    "galleryInfo": "Моя галерея"
  },
  "mjchat": {
    "loading": "Идет загрузка изображения",
    "openurl": "Открыть ссылку напрямую",
    "failReason": "Причина сбоя:",
    "reload": "Перезагрузить",
    "progress": "Прогресс:",
    "wait": "Задача отправлена, подождите...",
    "reroll": "Перерисовать",
    "wait2": "Задача {id} отправлена, подождите",
    "redrawEditing": "Редактирование части изображения",
    "face": "Сменить лицо",
    "blend": "Смешивание изображений",
    "draw": "Рисовать",
    "submiting": "Отправка...",
    "submit": "Отправить",
    "wait3": "Пожалуйста, не закрывайте! Создание изображения...",
    "success": "Сохранено успешно",
    "successTitle": "Успешно",
    "modlePlaceholder": "Пользовательские модели (разделять пробелами, необязательно)",
    "myModle": "Мои модели",
    "historyCnt": "Количество контекста",
    "historyToken": "Больше контекста делает память точнее, но расходует больше квоты",
    "historyTCnt": "Количество ответов",
    "historyTCntInfo": "Больше ответов, возможно, потребуется больше квоты",
    "role": "Настройка роли",
    "rolePlaceholder": "Дайте своему разговору уникальную роль, необязательно",
    "loading2": "Загрузка...",
    "loadmore": "Загрузить еще",
    "nofind": "Не удалось найти",
    "nofind2": "Связанные материалы отсутствуют. Попробуйте следующее",
    "success2": "Переключение успешно!",
    "modelChange": "Смена модели",
    "search": "Поиск",
    "searchPlaceholder": "Имя и описание GPTs",
    "attr": "Прикрепленные файлы",
    "noproduct": "В галерее пока нет ваших работ",
    "myGallery": "Моя галерея",
    "yourHead": "Ваш аватар",
    "your2Head": "Изображение знаменитости",
    "tipInfo": "Примечание:<li>1 Изображение должно содержать лицо, иначе не будет изображения</li> <li>2 «Изображение знаменитости» можно сначала создать с помощью mj</li> <li>3 «Изображение знаменитости» может быть аниме</li> <li>4 «Ваш аватар» рекомендуется использовать фотографию лица</li>",
    "placeInput": "Пожалуйста, введите подсказку!",
    "more5sb": "Максимум 5 изображений для загрузки",
    "exSuccess": "Экспорт успешен... Проверьте загрузки",
    "downloadSave": "aiрисование.txt",
    "noproducet": "Пока нет готовых работ",
    "imgBili": "Соотношение изображения",
    "imagEx": "Экспорт ссылок изображений",
    "prompt": "Подсказка",
    "imgCYes": "Содержит макет",
    "imgCUpload": "Загрузить свой макет",
    "imgCInfo": "Информация о макете:<br/> 1. Макет позволяет использовать свои изображения для создания рисунков MJ<br/> 2. Можно использовать несколько макетов, максимум 5, размер каждого изображения не более 1 Мб<br/>",
    "imgCadd": "+Добавить",
    "del": "Удалить",
    "img2text": "Изображение в текст",
    "img2textinfo": "Не знаете, как написать подсказку? Попробуйте изображение в тексте! <br/> Передайте изображение, получите подсказку",
    "traning": "Перевод...",
    "imgcreate": "Создание изображения",
    "imginfo": "Дополнительные параметры: <li>1 --no Игнорировать --no car, чтобы не рисовать машины на изображении</li><li>2 --seed Получить сначала сид --seed 123456</li><li>3 --chaos 10 Смешивание (диапазон: 0-100)</li><li>4 --tile Фрагментирование</li>",
    "tStyle": "Стиль",
    "tView": "Вид",
    "tShot": "Угол обзора",
    "tLight": "Освещение",
    "tQuality": "Качество изображения",
    "tStyles": "Уровень искусства",
    "tVersion": "Версия модели",
    "dalleInfo": "Инструкции: <li>1 DALL-E - это модель от OpenAI для создания изображений</li><li>2 Изображения от OpenAI имеют ограниченный срок годности, сделайте резервную копию</li><li>3 Внимание: изображения размером 1790 пикселей стоят вдвое дороже</li>",
    "version": "Версия",
    "size": "Размер",
    "blendInfo": "Инструкции: <li>1 Смешивание как минимум двух изображений</li><li>2 Максимальное количество загружаемых изображений - 6</li>",
    "blendStart": "Начать смешивание",
    "no2add": "Не добавляйте одно и то же изображение повторно",
    "add2more": "Добавьте как минимум два изображения",
    "no1m": "Размер изображения не должен превышать 1 Мб",
    "imgExt": "Формат изображения должен быть jpg, gif, png, jpeg",
    "setSync": "Синхронизировать Midjourney и Suno"
    ,"addGPTS": "Добавить GPTs",
    "addPlaceholder": "Вставьте GID GPTs сюда или прямо вставьте ссылку на GPTs",
    "gidError": "Не найден действительный GID, пожалуйста, заполните еще раз",
    "success3": "GPTs успешно добавлены!"
  },
	draw: {
		qualityList: {
			general: "General",
			clear: "Clear",
			hd: "HD",
			ultraHd: "Ultra HD",
		},
		styleList: {
			cyberpunk: "Cyberpunk",
			star: "Star",
			anime: "Anime",
			japaneseComicsManga: "Japanese Comics/Manga",
			inkWashPaintingStyle: "Ink Wash Painting Style",
			original: "Original",
			landscape: "Landscape",
			illustration: "Illustration",
			manga: "Manga",
			modernOrganic: "Modern Organic",
			genesis: "Genesis",
			posterstyle: "Poster Style",
			surrealism: "Surrealism",
			sketch: "Sketch",
			realism: "Realism",
			watercolorPainting: "Watercolor Painting",
			cubism: "Cubism",
			blackAndWhite: "Black and White",
			fmPhotography: "Film Photography Style",
			cinematic: "Cinematic",
			clearFacialFeatures: "Clear Facial Features",
		},
		viewList: {
			wideView: "Wide View",
			birdView: "Bird's Eye View",
			topView: "Top View",
			upview: "Upview",
			frontView: "Front View",
			headshot: "Headshot",
			ultrawideshot: "Ultrawide Shot",
			mediumShot: "Medium Shot (MS)",
			longShot: "Long Shot (LS)",
			depthOfField: "Depth of Field (DOF)",
		},
		shotList: {
			faceShot: "Face Shot (VCU)",
			bigCloseUp: "Big Close-Up (BCU)",
			closeUp: "Close-Up (CU)",
			waistShot: "Waist Shot (WS)",
			kneeShot: "Knee Shot (KS)",
			fullLengthShot: "Full Length Shot (FLS)",
			extraLongShot: "Extra Long Shot (ELS)",
		},
		stylesList: {
			styleLow: "Style Low",
			styleMed: "Style Medium",
			styleHigh: "Style High",
			styleVeryHigh: "Style Very High",
		},
		lightList: {
			coldLight: "Cold Light",
			warmLight: "Warm Light",
			hardLighting: "Hard Lighting",
			dramaticLight: "Dramatic Light",
			reflectionLight: "Reflection Light",
			mistyFoggy: "Misty/Foggy",
			naturalLight: "Natural Light",
			sunLight: "Sun Light",
			moody: "Moody",
		},
		versionList: {
			mjV6: "MJ V6",
			mjV61: "MJ V6.1",
			mjV52: "MJ V5.2",
			mjV51: "MJ V5.1",
			nijiV6: "Niji V6",
			nijiV5: "Niji V5",
			nijiV4: "Niji V4",
			nijiJourney: "Niji Journey",
		},
		botList: {
			midjourneyBot: "Midjourney Bot",
			nijiJourney: "Niji Journey",
		},
		dimensionsList: {
			square: "Square (1:1)",
			portrait: "Portrait (2:3)",
			landscape: "Landscape (3:2)",
		},
	}
   ,suno:{
    "description": "Режим описания",
    "custom": "Профессиональный режим",
    "style": "Стиль песни",
    "stylepls": "Название песни, например, Поп-музыка",
    "emputy": "Нет доступного содержимого",
    "noly": "Текст песни недоступен",
    "inputly": "Пожалуйста, введите название песни или текст",
    "doingly": "В процессе, пожалуйста, подождите.",
    "doingly2": "Получение текста...",
    "title": "Название песни",
    "titlepls": "Название песни, например, Каникулы",
    "desc": "Описание песни",
    "descpls": "Описание песни, например, Оригинальная поп-музыка о каникулах",
    "noneedly": "Текст песни не требуется",
    "rank": "Случайный выбор",
    "ly": "Текст песни",
    "lypls": "Текст песни: с определенным форматом",
    "generate": "Создать песню",
    "generately": "Сгенерировать текст",
    "nodata": "Пожалуйста, сначала создайте песню, чтобы получить список песен",

    "menu": "Музыка",
    "menuinfo": "Создание музыки Suno",
    "server": "Конечная точка API Suno",
    "serverabout": "Связанные с Suno",
    "setOpenKeyPlaceholder": "Связанный ключ для API Suno; необязательно",

    upMps: 'Загрузить аудио',
    extend: 'Расширить',
    extendFrom: 'Расширить от',
    extendAt: 'Расширение начинается с',
    fail: 'Неудача',
    info: 'Инструкции:<br>Длительность загружаемого аудио должна быть от 6 до 60 секунд'

    
   }
   ,video:{
    "menu": "Видео",
    "menuinfo": "Создание видео Luma и других",
    "descpls": "Описание создания видео",
    "lumaabout": "О Luma",
    "lumaserver": "Адрес API Luma",
    "setOpenKeyPlaceholder": "Ключ API Luma, необязательно",
    "generate": "Создать видео",
    "nodata": "Нет доступных видео, сначала сгенерируйте!",
    "selectimg": "Выберите изображение",
    "clear": "Очистить",
    "plsInput": "Введите содержимое!",
    "submitSuccess": "Успешно отправлено!",
    "process": "Создание видео...",
    "repeat": "Повторить",
    "lumainfo": "Объяснение: <ul><li>1. Видеоролики Pro и relax имеют водяные знаки на ссылках.</li><li>2. Версия Pro без водяных знаков требует получения ссылки на скачивание через кнопку «Скачать».</li><li>3. Ссылки на версии Pro имеют временные ограничения; пожалуйста, немедленно сохраните файл MP4 локально.</li><li>4. Для версий Pro сохраните файл MP4 локально в течение 30 минут после создания, так как канал может быть заблокирован или закрыт.</li><li>5. Если ссылка для загрузки версий Pro недействительна, будет предоставлена ссылка на видео с водяными знаками.</li></ul>",
    "runwayabout": "Связанные с Runway",
    "runwayserver": "Адрес API Runway",
    "setOpenKeyPlaceholder2": "Ключ API Runway, необязательно",
    "endImg": "Конечное изображение",
    "runwayinfo": "Объяснение: <ul><li>1. У изображений и видеороликов Runway есть срок действия.</li><li>2. Пожалуйста, сохраните файл MP4 локально в течение 30 минут после создания видео.</li></ul>",
    "nosup": "Временно не поддерживается",
    "rwgen2": "Версия: Gen-2, экономичная",
    "rwgen3": "Версия: Gen-3 Alpha",
    "repeat2":"Expired.Reget"
  }
  ,
  dance:{
    menu: "Танец",
    menuinfo: "Создание танцевальных видео с Viggle и другими.",
    character: "Персонаж",
    viggleabout: "О Viggle",
    viggleserver: "Адрес API Viggle",
    setOpenKeyPlaceholder: "Ключ API Viggle, необязательно",
    info: "Инструкции:<br>1. Изображения персонажей лучше всего делать полноразмерными фотографиями.<br>2. Видео танцевальных шаблонов должны быть личными, а не групповыми.",
    model: "Модель",
    bgw: "Белый фон",
    bgg: "Зеленый фон",
    bgmoban: "Фон шаблона",
    bgrole: "Фон персонажа",
    gring: "Генерация...",
    uprolefirst: "Пожалуйста, сначала загрузите изображение персонажа",
    uprolefail: "Ошибка загрузки",
    upvideo: "+ Загрузить шаблонное танцевальное видео",
    usevideo: "+ Использовать официальный шаблон",
    moban: "Танцевальный шаблон",
    moban2: "Название шаблона",
    use: "Использовать"
}

}
