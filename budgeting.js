let limit = 0;
let spent = 0;

document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

document.getElementById("limit").addEventListener("input", function() {
    limit = parseFloat(this.value) || 0;
    updateStatus();
});

function addPurchase() {
    let purchaseAmount = parseFloat(document.getElementById("purchase").value) || 0;
    spent += purchaseAmount;
    updateStatus();

 document.getElementById("purchase").value = "";
}

function updateStatus() {
    let statusElement = document.getElementById("status");
    statusElement.innerText = `Spent: $${spent}`;
    
    if (spent < limit * 0.8) {
        statusElement.className = "status safe";
    } else if (spent < limit) {
        statusElement.className = "status warning";
    } else {
        statusElement.className = "status danger";
    }
}
