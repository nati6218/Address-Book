//bussiness logic for AddressBook --------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}
AddressBook.prototype.addContact = function(contact){
  for (var i= 0; i< this.contacts.length; i++){
    if (this.contacts[i]){
      if (this.contacts[i].id == id){
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId;
}
AddressBook.prototype.findContact = function(id){
  for (var i= 0; i < this.contacts.length; i++){
    if(this.contacts[i].id == id){
      return this.contacts[i];
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id){
  for (var i = 0; i< this.contacts.length; i ++){
    if (this.contacts[i]){
      if (this.contacts[i].id == id){
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

///bussiness logic for Contacts --------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this. lastName = lastName;
  this.phoneNumber= phoneNumber;
}

Contact.prototype.fullName = function () {
 return this.firstName + " " + this.lastName;
};
