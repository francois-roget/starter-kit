const fs = require('fs');

async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* await walk(entry);
        else if (d.isFile()) yield entry;
    }
}

function logFolders(){
    for await (const p of walk('.')){
        console.log(p)
    }
}

try {
    console.log('Cleaning git repository...');
    // fs.rmdirSync('.git', { recursive: true });
    
    console.log('Configuring project');
    logFolders();
}catch(e){
    console.error(e);
    process.exit(1);
}

