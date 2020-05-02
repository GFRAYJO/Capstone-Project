from django.conf import settings
from django.db import models

# Demographics table Model
class Demographics(models.Model):
    id = models.IntegerField(primary_key=True)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=150)
    state = models.CharField(max_length=100)
    zip = models.IntegerField(blank=False, null=False)
    phone = models.IntegerField(blank=False, null=False)
    url = models.CharField(max_length=500)

    class Meta:
        db_table = 'demographics'

    def _int_(self):
        return self.id

    def _str_(self):
        return self.address

    def _str_(self):
        return self.city
    
    def _str_(self):
        return self.state

    def _int_(self):
        return self.zip
        
    def _int_(self):
        return self.phone
    
    def _str_(self):
        return self.url
        
    
# BHProvider Model
class BHProviders(models.Model):
    id = models.IntegerField(primary_key=True)
    facilityname = models.CharField(max_length=250)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    specialty = models.CharField(max_length=500)
    description = models.CharField(max_length=5000)
    demo = models.ForeignKey(Demographics,on_delete=models.DO_NOTHING)

    class Meta:
        db_table = 'bhprovider'

    def _int_(self):
        return self.id

    def _str_(self):
        return self.facilityname

    def _str_(self):
        return self.firstname

    def _str_(self):
        return self.lastname
    
    def _str_(self):
        return self.specialty

    def _str_(self):
        return self.description



