function prompt(question, callback) {
    var stdin = process.stdin;
    var stdout = process.stdout;

    stdin.resume();
    stdout.write(question);


    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

prompt('Qual é seu nome?', function (data) {
    process.stdout.write(data);
    process.exit();
});

process.on('exit', function () {
   process.stdout.write(' Até Logo!! \n')
});

module.exports =




