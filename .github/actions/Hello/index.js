const core= require('@actions/core');
const core= require('@actions/github');
try {
    // throw(new Error("some error message"));
    const name = core.getInput('who-to-greet');
    console.log(`"Hello ${name}"`);
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    
    console.log(JSON.stringify(github, null, '\t'));
} catch(error) {
    core.setFailed(error.name);
}



// core.setFailed('abc')