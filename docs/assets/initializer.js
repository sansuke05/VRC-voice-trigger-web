// ワールドリストの情報をhtmlに設定し、選択できるようにする
var setWorldInfo = function(worldList) {
    worldList.forEach(world => {
        let option = document.createElement("option");
        option.value = world;
        option.text = world;
        document.getElementById("worldNames").appendChild(option);
    });
}