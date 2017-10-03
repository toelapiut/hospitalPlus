import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD:app/models/patientdisp.js
  dob: DS.attr(),
  emergencyNo: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  phoneNo: DS.attr(),
  sex: DS.attr(),
  status: DS.attr(),
  location: DS.attr(),
  checkIntimethis: DS.attr(),
  examiner: DS.attr(),
  followUp: DS.attr()
=======
  checkIntime:DS.attr(),
   checkOuttime:DS.attr(),
   dob: DS.attr(),
   emergencyNo: DS.attr(),
   examiner:DS.attr(),
   firstName:DS.attr(),
   followUp:DS.attr(),
   lastName:DS.attr(),
   location:DS.attr(),
   patientsId: DS.attr(),
   phoneNo:DS.attr(),
   sex:DS.attr(),
   status: DS.attr()
>>>>>>> 483ad0e1e23bbc4fcdfa96ecd713cd190bafd070:app/models/patient-info.js
});
