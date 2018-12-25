let speechEnabled = false;

function recognize() {
    // WebAPIのインスタンス化
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // 設定
    const defaultInput = "";
    let input = defaultInput;
    recognition.lang = "ja-JP";

    // マイク入力があったときのイベントリスナー
    recognition.addEventListener("result", e => {
        input = e.results[0][0].transcript;
        recognition.stop();
    });

    // 聞き取り終了時のイベントリスナー
    recognition.addEventListener("end", () => {
        if(input === defaultInput) {
            recognition.start()
        } else {
            console.log(input);
            document.getElementById("recognizedText").textContent = input;
            input = defaultInput;
            recognition.start()
        }
    });
    
    // 聞き取りを開始する
    recognition.start();
}

// ボタンクリック時の処理
function initSpeak() {
    document.getElementById("activation").innerHTML = "認識中";
    console.log("button clicked!");

    let initSynth = new SpeechSynthesisUtterance("音声認識を開始します");
    initSynth.lang = "ja-JP";
    speechSynthesis.speak(initSynth);
}

// 音声認識開始
function onStart() {
    initSpeak();

    if(!speechEnabled){
        recognize();
    }
    speechEnabled = true;
}