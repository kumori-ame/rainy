const WIDTH =  500;
const HEIGHT = 1500;
const rand_x = Math.floor(Math.random() * 500);
const rand_y = Math.floor(Math.random() * 500);

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

const context = canvas.getContext('2d');
let rects = [];

document.body.appendChild(canvas);


const rng = Math.floor(Math.random() *4);

function make_rain(n){
    for (let i = 0; i < n; i++){
        rects.push({x:Math.floor(Math.random() * 500),
                    y:Math.floor(Math.random() * -10)**rng -rng*5 -200});
    }
    rects.sort((a,b)=>{
        if(a.y < b.y) return 1;
        else if(a.name > b.y) return -1;
        return 0;
    })

}

function loop(timestamp){

    context.clearRect(0,0, WIDTH, HEIGHT);

    for (const c of rects){
        if(c.y < 1950){c.y += 35;
                    console.log(c.y)}
        else{
            rects.splice(0,1);
        }
    }

    for(const c of rects){
        context.beginPath();
        context.fillStyle = 'rgb(209,237,255)';
        context.fillRect(c.x,c.y,0.18,100);
        context.fill();
    }
    make_rain(2);
    window.requestAnimationFrame((ts) => loop(ts));
}
window.requestAnimationFrame((ts) => loop(ts));
