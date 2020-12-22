class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
            console.log(playerCount);
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(name){
        var playerIndex = "Player" + playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}