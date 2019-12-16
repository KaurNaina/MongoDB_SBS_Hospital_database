const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Simar:Sunny123gg@cluster0-xbxcz.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
client.connect(err => {
  /*const collection = client.db("SBS_Hospital").collection("Laboratory_Staff");
  
  var insertLab=[{Staff_ID:501,FullName:"Rajni Kant",Gender:"M",Position:"Lab Technician",SalaryPH:20,SSN:917899024,Email:"rjk910@sbshosp.com",Phone:9102907831},
				{Staff_ID:502,FullName:"Kartik Aryan",Gender:"M",Position:"Clinical Manager",SalaryPH:19.75,SSN:9182938054,Email:"karyan159@sbshosp.com",Phone:1009876492},
				{Staff_ID:503,FullName:"Sushant Rajput",Gender:"M",Position:"Lab Assistant",SalaryPH:15.50,SSN:998701928,Email:"ssr888@sbshosp.com",Phone:1093948010},
				{Staff_ID:504,FullName:"Alia Bhatt",Gender:"F",Position:"Blood Donor Recruiter",SalaryPH:23,SSN:910992009,Email:"bhatt0101@sbshosp.com",Phone:1953180101},
				{Staff_ID:505,FullName:"Johny Lever",Gender:"M",Position:"Blood Bank Manager",SalaryPH:30.25,SSN:999423654,Email:"ljo5278@sbshosp.com",Phone:1192526751}];
						
	collection.insertMany(insertLab,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Laboratory_Staff table..");
  */
  
  
	const collection = client.db("SBS_Hospital").collection("Disease");
	var insertDisease=[{Disease_ID:"15D",Disease_Name:"Eczema",Drug_ID:15001},
					{Disease_ID:"16D",Disease_Name:"Psoriasis",Drug_ID:15002},
					{Disease_ID:"17D",Disease_Name:"Agoraphobia",Drug_ID:15003},
					{Disease_ID:"18D",Disease_Name:"Dissociative Amnesia",Drug_ID:15004},
					{Disease_ID:"19D",Disease_Name:"Anemia",Drug_ID:15005}];
						
	collection.insertMany(insertDisease,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Disease table..");
  
  client.close();
});
});
