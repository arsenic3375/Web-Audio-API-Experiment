window.addEventListener('click', () => {
    sound();
});

function sound() {
    let context = new AudioContext();
    let o = context.createOscillator();
    o.type = "sine";
    o.connect(context.destination);
    o.start();
    setTimeout(function() {o.stop();}, 1000);
}
