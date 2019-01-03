var recognize = function() {
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

            // jsonMsgの更新
            

            communicateWebSocket();

            input = defaultInput;
            recognition.start()
        }
    });
    
    // 聞き取りを開始する
    recognition.start();
}