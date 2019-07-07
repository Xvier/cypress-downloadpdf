const request = require('request');
const fs = require('fs-extra')
var path = require('path')
function downloadPdf(args) {

    const directory = args.directory;
    const cookieHeader = args.cookies.map(e => e.name + '=' + e.value).join(';');
    const fileName = args.fileName;
    return new Promise((resolve, reject) => {
        request({ url: args.url, encoding: null, headers: { Cookie: cookieHeader } }, function (err, res, body) {
            if (!res) {
                return reject(new Error('No response'));
            }
            if (res.statusCode !== 200) {
                return reject(new Error('Bad status code: ' + res.statusCode));
            }


            //const fileName = matches[1].replace(/['"]/g, '') + '.pdf';
            const file = path.join(__dirname + directory, fileName)
            //fs.writeFileSync(directory + fileName, body);
            fs.outputFileSync(file, body)
            resolve(body);
        });
    });
}


export function downloadpdfPlugin(on) {
    on('task', { downloadPdf })
}