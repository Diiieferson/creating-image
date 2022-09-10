var path = require("node:path");
var fs = require("node:fs");
var imagePathSaida = path.resolve(__dirname, 'saida');
var headers = ['P2', '600 600', '255'];
function createRow() {
    var row = Array(600);
    for (var index = 0; index < 600; index++) {
        if (index >= 280 && index <= 320) {
            row[index] = 0;
        }
        else if ((index >= 260 && index < 280)
            || (index > 320 && index <= 340)) {
            row[index] = 130;
        }
        else if ((index >= 240 && index < 260)
            || (index > 340 && index <= 360)) {
            row[index] = 60;
        }
        else if ((index >= 220 && index < 240)
            || (index > 360 && index <= 380)) {
            row[index] = 190;
        }
        else {
            row[index] = 255;
        }
    }
    return row.join(' ');
}
function generate(file) {
    var saidaFilePath = path.resolve(imagePathSaida, file);
    headers.map(function (line) {
        fs.appendFileSync(saidaFilePath, "".concat(line, "\n"), 'ascii');
    });
    for (var index = 0; index < 600; index++) {
        fs.appendFileSync(saidaFilePath, "".concat(createRow(), "\n"), 'ascii');
    }
}
generate('saida.pgm');
