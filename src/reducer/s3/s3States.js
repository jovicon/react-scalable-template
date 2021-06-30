import { GetDataFile } from '../../services/aws/s3';

const BUCKET = 'chernobyl-center';
const ROUTE_FILE = '/wellness/advance/poc';
const CAMPAIGNS_S3_QUERY_FILE = 'example.json';


const query_assign = async () => await GetDataFile(`${BUCKET}${ROUTE_FILE}`, CAMPAIGNS_S3_QUERY_FILE);


const defaultState = {
    status: 'ACTIVE',
    message: 'MESSAGE'
}

export const s3 = async (state = defaultState, action) => {
    const s3Status = await query_assign();

    console.log("s3Status: ", s3Status);

    const s3States = {
        ...s3Status
    }

    console.log(s3States, s3States[action.type], action.type);
    return s3States[action.type] ? s3States[action.type] : state;
};