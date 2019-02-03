const IP = "127.0.0.1"
const PORT = "12345"

var communicateWebSocket = function() {
    let url = "ws://" + IP + ":" + PORT;
    let con = new WebSocket(url);

    // JSON to String
    let message = JSON.stringify(jsonMsg)

    // 接続してメッセージ送信
    con.onopen = function(e) {
        console.log("Socket 接続成功");
        con.send(message);
    }

    con.onerror = function(error) {
        console.log('通信エラーが発生しました');
    }

    // サーバーからメッセージの受信
    con.onmessage = function(e) {
        let reseavedJSON = JSON.parse(e.data);

        if(reseavedJSON.Status === "Socket OK!") {
            console.log(e.data);
        } else {
            console.log("ローカルサーバーへのメッセージの送信に失敗しました");
            return;
        }

        if(reseavedJSON.Mode === "init") {
            setWorldInfo(reseavedJSON.Message);
        }

        con.close();
    }
}