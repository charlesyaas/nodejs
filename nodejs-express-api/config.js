export default {
	app: {
		name: "infodatalulusan",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "9dd3748aa1a7e715de4499c4b808b1b1",
		language: "english",
		publicDir: "assets",
	},
	auth: {
		userTokenSecret: "3e2b54cA-1ax%W@d2563YY6Q!!0-23dc3678896397a14e0d",
		apiTokenSecret: "802541a8$Xax%W!66bcc9B#Q-!0771275a03bed736c0fcb2",
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"infodatalulusan",
		type: "mysql",
		host: "localhost",
		username: "root",
		password: "",
		port: "3306",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		secure: true,
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
		photo: {
			filenameType: "random",
			extensions: "jpg,png,gif,jpeg",
			limit: "1",
			maxFileSize: "3",
			returnFullpath: false,
			filenamePrefix: "",
			uploadDir: "uploads/files",
			imageResize:  [ 
				{name: "small", width: 100, height: 100, mode: "cover"}, 
				{name: "medium", width: 480, height: 480, mode: "inside"}, 
				{name: "large", width: 1024, height: 760, mode: "inside"}
			],

		},

	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "us-west-2",
		bucket: "",
	},
	
}