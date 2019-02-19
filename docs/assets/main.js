let speechEnabled = false;

// ワールドセレクト時の処理
$(document).ready(function() {
    $("#worldNames").change(function() {
        var world = $(this).val();
        
        // jsonMsgの更新
        jsonMsg.Mode = "chworld";
        jsonMsg.Message = world;

        communicateWebSocket();
    });
});


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

// 画面ロード時の処理
// ワールド情報取得メッセージを鯖に投げる
window.onload = function() {
    communicateWebSocket();
}