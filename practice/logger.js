const fs= require('fs');
const fsPromises = require('fs/promises')
const { format } = require('date-fns')
const {v4: uuid} = require('uuid')
const path = require('path')


const logFunction = async (message) => {
try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }

    var time = `${format(new Date(), "dd|MM|yyyy\tHH:mm:ss")}`;
    var logId = uuid();

    var alog = `${logId} \t ${time} \t ${message}\n`;

   await fsPromises.appendFile(path.join(__dirname, "logs", "logs.txt"), alog);

} catch (error) {
    console.log(error)
}
}

module.exports={logFunction}