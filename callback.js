function fetchUserData(userId, callback){
    setTimeout(function(){
        const users = {
        1: {id: 1, name: "Mouhamadou"},
        2: {id: 2, name: "Tom"},
        };

        const user = users[userId];
        if (user) {
            callback(null, user);
        } else {
            callback("User not found ",  null);
        }
    },1000)

}

//callback function:
function handleUserData(error, user){
    if(error){
        console.log("Error: " + error);
    }else{
        console.log("User :" + user);
    }
}
