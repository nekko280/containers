module.exports = {
    apps : [{
        name      : 'frontend-example001',
        exec_mode : 'cluster',
        instances : 2,
        cwd       : '/var/project/frontend-example001', // 必ず絶対パス指定で！
        script    : '/var/project/frontend-example001/node_modules/nuxt/bin/nuxt.js',
        args      : 'start'
    }]
};
