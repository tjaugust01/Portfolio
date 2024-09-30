// Hole das Canvas-Element und den 2D-Kontext
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Lege die Größe der Zellen fest
const cellSize = 20;
const canvasSize = 400;
const numCells = canvasSize / cellSize;

// Erstelle das Spielfeld als 2D-Array
let gameBoard = [];

for (let x = 0; x < numCells; x++) {
    gameBoard[x] = [];
    for (let y = 0; y < numCells; y++) {
        gameBoard[x][y] = 0; // 0 bedeutet eine leere Zelle
    }
}

// Funktion zum Zeichnen des Spielfelds
function drawBoard() {
    for (let x = 0; x < numCells; x++) {
        for (let y = 0; y < numCells; y++) {
            // Lege die Farbe der Zellen fest (hier einfaches Grau für leere Zellen)
            if (gameBoard[x][y] === 0) {
                ctx.fillStyle = "lightgrey"; // Leere Zelle
            } else if (gameBoard[x][y] === 1) {
                ctx.fillStyle = "green"; // Schlange (später hinzugefügt)
            }

            // Zeichne das Rechteck für jede Zelle
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

            // Zeichne die Umrandung der Zellen
            ctx.strokeStyle = "black";
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

// Zeichne das Spielfeld beim Start des Spiels
drawBoard();
