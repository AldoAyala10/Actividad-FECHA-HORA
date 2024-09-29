
//middleware
const middleware=((req, res, next)=>{
    const now = new Date();
    console.log(`Acceso en: ${now}`);
    next();
    
});

module.exports = middleware;
