function sunGlasses(n){
    let topBotLine = "";
    topBotLine = "*".repeat(n * 2);
    topBotLine += " ".repeat(n);
    topBotLine += "*".repeat(n * 2);
    console.log(topBotLine);

    let star = "";
    for(let i = 1; i <= n - 2; i++){
        star = "*";
        let line = "/";
        for(let j = 0; j < (n * 2) - 2; j++){
            star += line;
        }
        star += "*";
        let midLine = "";
        if(i === Math.floor((n - 1) / 2)){
            for(let k = 0; k < n; k++){
                midLine += "|";
            }
        } else{
            for(let k = 0; k < n; k++){
                midLine += " ";
            }
        }
        console.log(star + midLine + star);
    }
    console.log(topBotLine);
}
sunGlasses(5);