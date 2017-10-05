import DS from 'ember-data';

export default DS.Model.extend({
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
});
