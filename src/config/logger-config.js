import winston from "winston";

const {combine,timestamp,label,printf}=winston.format;

const customeFormat=printf(({level,message,timestamp})=>{
    return `${timestamp} : ${level}: ${message}`;
});

const logger=winston.createLogger({
    format:combine(
        timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        customeFormat
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:'combined.log'})
    ]
});
 
export default logger;