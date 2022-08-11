let count = 0;

function increment() {
    count++;
    document.getElementById("counter-el").textContent = count;
}

function save() {
    document.getElementById("save-el").textContent += count + " - ";
    count = 0;
    document.getElementById("counter-el").textContent = count;
    
}