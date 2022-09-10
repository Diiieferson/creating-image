import * as path from 'node:path';
import * as fs from 'node:fs';

const imagePath = path.resolve(__dirname, 'images')
const imagePathSaida = path.resolve(__dirname, 'saida')

function generate(file:string) {
    const filePath = path.resolve(imagePath, file)
    const saidaFilePath = path.resolve(imagePathSaida, file)
    fs.readFile(filePath, 'ascii' ,(err, data) => {
        data.split('\n').map(line => {
            line.split(' ')
            fs.appendFileSync(saidaFilePath, `${line}\n`, 'ascii')
        })
    })
}

fs.readdir(imagePath, (e, files) => {
    if (!e) {
        files.forEach((file) => {
            generate(file)
        })
    }
})
