import { inputColor, inputStrokeWidth, clearBtn, draw, ctx, canvas } from "./canvas";

const   burger = document.querySelector('.burger'),
        bar = document.querySelector('.canvas-bar'),
        close = document.querySelector('.close'),
        InputFill = document.querySelector('.canvas-bar__fill-input'),
        inputColorLabel = document.querySelector('.canvas-bar__color-label'),
        inputFillLabel = document.querySelector('.canvas-bar__fill-label'),
        strokeThumb = document.querySelector('.canvas-bar__stroke-thumb');

InputFill.value = '#f0f0f0';


inputColor.addEventListener('change', e => {
    draw.color = inputColor.value;

    inputColorLabel.style.backgroundColor = inputColor.value;

    console.log('change', inputColor);
});

inputStrokeWidth.addEventListener('change', e => {
    draw.strokeWidth = inputStrokeWidth.value;

    strokeThumb.style.width = `${inputStrokeWidth.value}px`;
    strokeThumb.style.height = `${inputStrokeWidth.value}px`;
});

clearBtn.addEventListener('click', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

burger.addEventListener('click', e => {
    bar.classList.add('canvas-bar--active');
});

close.addEventListener('click', e => {
    bar.classList.remove('canvas-bar--active');
});


InputFill.addEventListener('change', e => {

    canvas.style.backgroundColor = InputFill.value;
    inputFillLabel.style.backgroundColor = InputFill.value;
});