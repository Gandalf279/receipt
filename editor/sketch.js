// RECEIPT!
// This is the file to edit. p5.js reference: https://p5js.org/reference/
import JsBarcode from "jsbarcode";

export const receipt = {
  height: 510, // 240–2000 px. Width is fixed by the printer.
  seed: 67,
};

// everything here is editable. play around or rm -rf and see what you come up with!
export function drawReceipt(p) {
  const { width: w, height: h } = p;
  const margin = 24;

  // Header
  p.noStroke();
  p.fill(0);
    p.textFont("monospace");
    p.textAlign(p.CENTER, p.TOP);
    p.textStyle(p.BOLD);
    p.textSize(28);
    p.text("BOYKISSER :3", w / 2, 30);

  dashedLine(p, margin, 94, w - margin, 94, 6, 5);






  // COORDINATES:
  // 0, 0 - 284, 240
  // MARGINS:
  // 50, 110, 50, 50

  // (50,110,334,450)

  //   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠠⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  // ⡴⠒⠒⠒⠒⠒⠶⠦⠄⢹⣄⠀⠀⠑⠄⣀⡠⠤⠴⠒⠒⠒⠀⠀
  // ⢇⠀⠀⠀⠀⠀⠀⠐⠋⠀⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀
  // ⠈⢆⠀⠀⠀⠀⡤⠤⣄⠀⠀⠀⠀⡤⠤⢄⠀⠀⠀⠀⠀⣠⠃⠀
  // ⠀⡀⠑⢄⡀⡜⠀⡜⠉⡆⠀⠀⠀⡎⠙⡄⠳⡀⢀⣀⣜⠁⠀⠀
  // ⠀⠹⣍⠑⠀⡇⠀⢣⣰⠁⠀⠀⠀⠱⣠⠃⠀⡇⠁⣠⠞⠀⠀⠀
  // ⠀⠀⠀⡇⠔⣦⠀⠀⠀⠈⣉⣀⡀⠀⠀⠰⠶⠖⠘⢧⠀⠀⠀⠀
  // ⠀⠀⠰⠤⠐⠤⣀⡀⠀⠈⠑⣄⡁⠀⡀⣀⠴⠒⠀⠒⠃⠀⠀⠀
  // ⠀⠀⠀⠀⠀⠀⠘⢯⡉⠁⠀⠀⠀⠀⠉⢆⠀⠀⠀⠀⠀⠀⠀⠀
  // ⠀⠀⠀⠀⠀⠀⢀⣞⡄⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀

  p.noStroke();
  p.fill(0);
    p.textFont("monospace");
    p.textAlign(p.CENTER, p.TOP);
    p.textStyle(p.BOLD);
    p.textSize(25);
    p.text("   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠠⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", w / 2 - 5, 100);
    p.text("   ⡴⠒⠒⠒⠒⠒⠶⠦⠄⢹⣄⠀⠀⠑⠄⣀⡠⠤⠴⠒⠒⠒⠀⠀", w / 2 - 5, 130);
    p.text("   ⢇⠀⠀⠀⠀⠀⠀⠐⠋⠀⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀", w / 2 - 5, 160);
    p.text("   ⠈⢆⠀⠀⠀⠀⡤⠤⣄⠀⠀⠀⠀⡤⠤⢄⠀⠀⠀⠀⠀⣠⠃⠀", w / 2 - 5, 190);
    p.text("   ⠀⡀⠑⢄⡀⡜⠀⡜⠉⡆⠀⠀⠀⡎⠙⡄⠳⡀⢀⣀⣜⠁⠀⠀", w / 2 - 5, 210);
    p.text("   ⠀⠹⣍⠑⠀⡇⠀⢣⣰⠁⠀⠀⠀⠱⣠⠃⠀⡇⠁⣠⠞⠀⠀⠀", w / 2 - 5, 240);
    p.text("   ⠀⠀⠀⡇⠔⣦⠀⠀⠀⠈⣉⣀⡀⠀⠀⠰⠶⠖⠘⢧⠀⠀⠀⠀", w / 2 - 5, 270);
    p.text("   ⠀⠀⠰⠤⠐⠤⣀⡀⠀⠈⠑⣄⡁⠀⡀⣀⠴⠒⠀⠒⠃⠀⠀⠀", w / 2 - 5, 300);
    p.text("   ⠀⠀⠀⠀⠀⠀⠘⢯⡉⠁⠀⠀⠀⠀⠉⢆⠀⠀⠀⠀⠀⠀⠀⠀", w / 2 - 5, 330);
    p.text("   ⠀⠀⠀⠀⠀⠀⢀⣞⡄⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀", w / 2 - 5, 360);



  dashedLine(p, margin, 420, w - margin, 420, 6, 5);

  const barcodeValue = "I Like Bois :3";
  drawBarcode(p, barcodeValue, w / 2, 440);

  p.noStroke();
  p.fill(0);
  p.textFont("monospace");
  p.textAlign(p.CENTER, p.TOP);
  p.textStyle(p.NORMAL);
  p.textSize(10);
  p.text(barcodeValue, w / 2, 1024);
}

function drawBarcode(p, value, centerX, y) {
  const barcodeCanvas = document.createElement("canvas");
  JsBarcode(barcodeCanvas, value, {
    format: "CODE128",
    width: 1,
    height: 52,
    displayValue: false,
    margin: 0,
    background: "#ffffff",
    lineColor: "#000000",
  });
  // Draw directly on p5's canvas: p.image expects a p5 image wrapper, while
  // JsBarcode returns a regular browser canvas.
  p.drawingContext.drawImage(barcodeCanvas, Math.floor(centerX - barcodeCanvas.width / 2), y);
}

function dashedLine(p, x1, y1, x2, y2, dash, gap) {
  p.stroke(0);
  p.strokeWeight(2);
  for (let x = x1; x < x2; x += dash + gap) {
    p.line(x, y1, Math.min(x + dash, x2), y2);
  }
}