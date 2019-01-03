let speechEnabled = false;

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