from django.conf import settings
from django.db import models
from demographics import Demographics

# CHCProvider table Model
class CHCProviders(models.Model):
    id = models.IntegerField(primary_key=True)
    facilityname = models.CharField(max_length=250)
    specialty = models.CharField(max_length=500)
    description = models.CharField(max_length=5000)
    demo = models.ForeignKey(Demographics,on_delete=models.DO_NOTHING)

    class Meta:
        db_table = 'chcprovider'

    def _int_(self):
        return self.id
    
    def _str_(self):
        return self.facilityname
    
    def _str_(self):
        return self.specialty

    def _str_(self):
        return self.description