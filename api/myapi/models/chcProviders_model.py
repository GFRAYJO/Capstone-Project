from django.db import models

# CHC Provider Model
class CHCProviders(models.Model):
    id = models.IntegerField(primary_key=True)
    facilityname = models.CharField(max_length=250)
    specialty = models.CharField(max_length=500)
    description = models.CharField(max_length=5000)
    demo_id = models.ForeignKey(Demographics, on_clean=models.CASCADE)

    def _int_(self):
        return self.id
    
    def _str_(self):
        return self.facilityname
    
    def _str_(self):
        return self.specialty

    def _str_(self):
        return self.description

    def _int_(self):
        return self.demo_id