const errorHandler = (app) =>{
    app.use((err,req,res,next)=>{
        const status = err.status || 500
        const message = err.message || 'something went wrong'
        return res.status(status).json({
            success: false,
            status,
            message
        })
    })
}
module.exports = errorHandler