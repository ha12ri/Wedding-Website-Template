b = false;

function func(){
    if(b){
        document.getElementById('navbar').style="height: 12vh; transition:all 2s ease;";
        b = false;

    }else{
        document.getElementById('navbar').style="height: 25vh;transition:all 2s ease;";
        b = true;

    }
}