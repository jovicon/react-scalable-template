import { config, S3 } from 'aws-sdk';

const s3Config = config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
});

/**
 * @param Bucket
 * @param fileName
 */
export const GetDataFile = async (bucket, fileName) => {
    const s3 = new S3(s3Config);
    
    const bucketConfig = {
        Bucket: bucket,
        Key: fileName
    };

    const config = {
        Bucket: bucket,
        Key: fileName
    };

    try {
        const resultS3 = await s3.getObject(bucketConfig).promise();
        // const resultS3 = await new AWS.S3().getObject(config).promise();

        const parseJSON = JSON.parse(resultS3.Body.toString());
        return parseJSON;
    } catch (error) {
        console.log(error.message);
        throw new Error('ERROR_S3_GET_FILE', error.message, 404);
    }
};