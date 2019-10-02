# Project for the CREA Mont Blanc Lab 2019 - Escape Game

This project has been developed during the CREA Mont Blanc Lab 2019 for the Escape Game project (project 4).
This is a web application developed in Angular 8.
The purpose of this web app is to ask questions and to record the answers of the the Escape Game the Escape Game players.

For the Lab the web app was deployed in a public (read access) bucket in AWS S3.

In order to deploy this lab please follow the following steps:
- go to the front end directory:
```
cd front-end
```
- build the production package:
```
ng build --prod
```
- Create a bucket in AWS S3 (follow the steps described here: https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html)
- upload the content of the folder `dist/front-end` in the S3 bucket with read-only access permissions