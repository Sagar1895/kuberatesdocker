const fs = require('fs');

function readNgVersion() {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    let environmentStr = fs.readFileSync('./src/environments/environment.prod.ts', 'utf8');

    const replace = 'export const environment = ';
    const replaceEnd = ';';

    environmentStr = environmentStr.replace(replace, '');
    environmentStr = environmentStr.replace(replaceEnd, '');

    const environment = JSON.parse(environmentStr);

    environment['VERSION'] = packageJson['version'];

    fs.writeFile('./src/environments/environment.prod.ts', replace + JSON.stringify(environment) + replaceEnd, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!", environment['VERSION']);
    });
}

readNgVersion();
