// ワールドリストの情報をhtmlに設定し、選択できるようにする
var setWorldInfo = function(worldList) {
    index = 0;

    worldList.forEach(world => {
        let option = document.createElement("option");
        option.value = '' + index;
        option.text = world;
        document.getElementById("worldNames").appendChild(option);

        console.log(index);
        index++;
    });
}