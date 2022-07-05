// console.log(process.argv)

// const arg1 = process.argv[2]
// const arg2 = process.argv[3]

const { exec } = require('child_process');

const script = exec('bash runJob.sh',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });

/*
ibmcloud login <apiKey>
ibmcloud target -g <resourceGroup>
ibmcloud ce project select --name <projectName>
ibmcloud ce jobrun submit --job <jobName> -a <fileName> -a <arg1> -a <arg2>
*/