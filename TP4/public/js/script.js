const shifumi = {
    scoreP: 0,
    scoreC: 0,
    player: -1,


    select:
        function (type) {
            if (this.player == -1) {
                this.player = type
                const pImg = document.querySelectorAll("#player img")
                    , cImg = document.querySelectorAll("#computer img")
                pImg.forEach((item) => {
                    if (item.id != "player_" + type) {
                        item.style.visibility = "hidden"
                    }
                });
                cImg.forEach((item) => {
                    item.style.visibility = 'hidden'
                });
                setTimeout(() => {
                    shifumi.computeur()
                }, 1000);
            }
        }
    ,

    computeur: function () {
        const p = this.player
        let c = Math.floor(Math.random() * 2)
        const cImg = document.getElementById("computer_" + c)



        cImg.style.visibility = "visible"
        if (p == c) {
            /*Egalité*/
        }
        else {
            if (p == (c + 1) % 3) {
                this.scoreP += 1
                document.getElementById("scoreP").innerHTML = "Score"+this.scoreP
                console.log("j gagne");
                
            }
            else {
                this.scoreC += 1
                document.getElementById("scoreC").innerHTML = "Score"+this.scoreC
                console.log("c gagne");
                
            }
        }
        console.log(p);
        console.log(c);



        setTimeout(() => {
            shifumi.reset()
        }, 2000);
    },

    reset: function () {
        document.querySelectorAll("#player img").forEach((item) => {
            item.style.visibility = "visible"
        });
        document.querySelectorAll("#computer img").forEach((item) => {
            item.style.visibility = 'visible'
        });
        this.player = -1
    }

}
let lstP = document.querySelectorAll("#player img")
lstP.forEach((item, i) => item.addEventListener("click", () => shifumi.select(i)))

