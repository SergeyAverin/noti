import { ClientOptions } from 'minio';

const minioS3Config: ClientOptions = {
    endPoint: process.env['MINIO_SERVER_ENDPOINT'] as string,
    port: 9000,
    useSSL: false,
    accessKey: process.env['MINIO_SERVER_ACCESS_KEY'] as string,
    secretKey: process.env['MINIO_SERVER_SECRET_KEY']  as string,
}

export default minioS3Config
