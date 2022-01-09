function preload() {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    Video = createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
}

function draw() {

}

function takesnap()
{
    save('mysnap.png')
}