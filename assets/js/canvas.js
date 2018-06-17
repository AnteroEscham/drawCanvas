const   canvas = document.querySelector('#canvas'),
        ctx = canvas.getContext('2d'),
        inputColor = document.querySelector('.canvas-bar__color-input'),
        inputStrokeWidth = document.querySelector('.canvas-bar__stroke-width'),
        clearBtn = document.querySelector('.canvas-bar__clear-btn');


let draw = {

    flag: true,
    color: '#000000',
    strokeWidth: 10,

    touchCoords: {}
};

window.addEventListener('load' , e => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

window.addEventListener('resize' , e => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


document.addEventListener('mousedown', e => {
    
    if (e.target.closest('.canvas')) {
        e.preventDefault();
        draw.flag = true;

        draw.lastCoords = { x: e.pageX, y: e.pageY };

        document.addEventListener('mousemove', e => {

            if (draw.flag) {

                    ctx.beginPath();
                    ctx.moveTo(draw.lastCoords.x, draw.lastCoords.y);
                    ctx.lineTo(e.pageX, e.pageY);
                    ctx.lineWidth = draw.strokeWidth;
                    ctx.lineCap = "round";
                    ctx.strokeStyle = draw.color;
                    ctx.stroke();

                    draw.lastCoords = { x: e.pageX, y: e.pageY };
            }
        });

        document.addEventListener('mouseup', e => {

            draw.flag = false;
        });
    }
});


//TOUCH EVENTS
document.addEventListener('touchstart', e => {
    e.preventDefault();

    if (e.target.closest('.canvas')) {
        


        let touches = e.changedTouches;

        for (const touch of touches) {
            draw.touchCoords[touch.identifier] = { x: touch.pageX, y: touch.pageY };
        }
    }
});

document.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.target.closest('.canvas')) {
        

        for (const touch of e.changedTouches) {
            ctx.beginPath();
            ctx.moveTo(draw.touchCoords[touch.identifier].x, draw.touchCoords[touch.identifier].y);
            ctx.lineTo(touch.pageX, touch.pageY);
            ctx.lineWidth = draw.strokeWidth;
            ctx.lineCap = "round";
            ctx.strokeStyle = draw.color;
            ctx.stroke();
    
            draw.touchCoords[touch.identifier] = { x: touch.pageX, y: touch.pageY };

            console.log(draw.touchCoords);
        }

        


    }
    

    
            
    
});

function touchCancel (e) {
    const touches = e.changedTouches;

    for (const touch of touches) {
        delete draw.touchCoords[touch.identifier];
    }
}

document.addEventListener('touchend', touchCancel);

document.addEventListener('touchcancel', touchCancel);







export {
    inputColor,
    inputStrokeWidth,
    clearBtn,
    draw,
    canvas,
    ctx
}