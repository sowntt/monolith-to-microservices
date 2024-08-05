export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: "son-db.cwywa9aobcux.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: "sonbucket1807",
  url: "http://localhost:8100",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
