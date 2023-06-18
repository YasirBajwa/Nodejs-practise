
const {constants} = require('../constant');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
           res.json({  title:'Validation Failed', message: err.message,  code: statusCode})
            break;
        case constants.NOT_FOUND :
            res.json({  title:'Not Found', message: err.message,  code: statusCode})    

        case constants.UNAUTHORIZED:
            res.json({  title:'Unauthorized', message: err.message,  code: statusCode})
         
        case constants.FORBIDDEN:
            res.json({  title:'Forbidden', message: err.message,  code: statusCode})   
        
         case constants.SERVER_ERROR:
            res.json({  title:'Server Error', message: err.message,  code: statusCode})   
    
        default:
            console.log('no error')
            break;
    }


}

module.exports = errorHandler;