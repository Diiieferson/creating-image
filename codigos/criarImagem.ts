import * as path from 'node:path';
import * as fs from 'node:fs';

const imagePathSaida = path.resolve(__dirname, 'saida')

const headers = ['P2', '600 600', '255']

function createRow() {
    let row = Array(600)
    for (let index = 0; index < 600; index++) {
        if (index >= 280 && index <= 320) {
            row[index] = 0
        } else if ((index >= 260 && index < 280)
            || (index > 320 && index <= 340)
        ) {
            row[index] = 130
        } else if ((index >= 240 && index < 260)
            || (index > 340 && index <= 360)
        ) {
            row[index] = 60
        } else if ((index >= 220 && index < 240)
            || (index > 360 && index <= 380)
        ) {
            row[index] = 190
        } else {
            row[index] = 255
        }
    }
   
    return row.join(' ')
}

function generate(file:string) {
    const saidaFilePath = path.resolve(imagePathSaida, file)
    headers.map(line => {
        fs.appendFileSync(saidaFilePath, `${line}\n`, 'ascii')
    })

    for (let index = 0; index < 600; index++) {
        fs.appendFileSync(saidaFilePath, `${createRow()}\n`, 'ascii')
    }
}

generate('saida.pgm')