module.exports =(env) => { 
    console.log(env)
    if (env.dev === true)
    return require(`./webpack.dev.js`) 
    else
    return require(`./webpack.prod.js`) 
}