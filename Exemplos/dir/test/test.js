var prompt = require('./../prompt');

prompt('Qual é seu nome?', function (data) {
    process.stdout.write(data);
    process.exit();
});

process.on('exit', function () {
    process.stdout.write(' Até Logo!! \n')
});
