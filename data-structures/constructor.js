function User(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
}

User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function(){
	return this.firstName.toLowerCase() + this.lastName.toLowerCase() + this.emailDomain;
};

const username = new User('Frank', 'H', 36, 'male');



function Session(date, day, session, details, notes){
	this.date = date;
	this.day = day;
	this.session = session;
	this.details = details;
	this.notes = notes;
}

const foo = new Session('08-Jan', 'Tues', 'track', 'these are the details', null);
