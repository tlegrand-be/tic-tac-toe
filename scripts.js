function replaceButtonWithCanvas() {
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  const page = document.getElementById("page");
  const hiddenElements = document.getElementById("hidden-elements");

  page.style.display = "none";
  document.body.style.marginTop = "7%";

  const gridSize = 3;
  const canvasSize = 400;

  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const cellSize = canvasSize / gridSize;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = col * cellSize;
      const y = row * cellSize;

      context.strokeRect(x, y, cellSize, cellSize);
    }
  }

  hiddenElements.style.display = "block";
}