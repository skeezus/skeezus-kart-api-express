const express = require('express');
const router = express.Router();
const csv = require('csv-parser');
const stripBom = require('strip-bom-stream');
const fs = require('fs');

var multer = require('multer');
//var storage = multer.memoryStorage()
var upload = multer({ dest: __dirname + '/tmp' }).single('csv_file')
//var upload = multer().single('csv_file')

router.post('/', function(req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError || req.file.mimetype != 'text/csv') {
            res.status(400).json({
                error: 'File Upload Error',
                message: `Make sure to upload a csv file!`,
            });;
        } else if (err) {
            return res.status(500).json({
                error: 'Server Error',
                message: `There was an error with the server. Please try again or contact support.`,
            });;
        } else { // https://github.com/expressjs/multer; https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f
            //res.send('POST handler for /data/csv route.');
            let results = [];
            let filename = req.file.filename;

            /*
             * didn't use buffer because may not be performant to hold large files in memory
             * also javascript doesn't make it easy to ready files from buffer (they need to be saved to path first)
             * you can convert buffer to string: buffer.toString('utf-8')
             * alt method: var lines=csv.split("\n")
             */
            fs.createReadStream(__dirname + `/tmp/${filename}`)
                .pipe(stripBom()) // fixes encoding issues: https://en.wikipedia.org/wiki/Byte_order_mark
                .pipe(csv())
                .on('data', (row) => {
                    results.push(row)
                    //results.push(JSON.parse(row));
                })
                .on('end', () => {
                    fs.unlink(__dirname + `/tmp/${filename}`, function() { // delete file
                        // on delete callback
                    });
                    res.send(results);
                });
        }
    })
});

module.exports = router;
