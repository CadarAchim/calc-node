process.stdin.on('data', (chunck)=>{
    const input = chunck.toString().trim();
    
    if(input === 'exit'){
        process.exit(0);
    }

    try{
        const value = eval(input);
        console.log(`${value}`);
    }catch(exception){
        console.log("I don't know how to do that")
    }

    process.stdout.write('Enter your simple equation:');
})

process.stdout.write('Enter your simple equation:');
