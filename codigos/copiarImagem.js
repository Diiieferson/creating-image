var path = require("node:path");
var fs = require("node:fs");
var imagePath = path.resolve(__dirname, 'images');
var imagePathSaida = path.resolve(__dirname, 'saida');
function generate(file) {
    var filePath = path.resolve(imagePath, file);
    var saidaFilePath = path.resolve(imagePathSaida, file);
    fs.readFile(filePath, 'ascii', function (err, data) {
        data.split('\n').map(function (line) {
            line.split(' ');
            fs.appendFileSync(saidaFilePath, "".concat(line, "\n"), 'ascii');
        });
    });
}
fs.readdir(imagePath, function (e, files) {
    if (!e) {
        files.forEach(function (file) {
            generate(file);
        });
    }
});
