from django.db import models

# Medical Provider Model
class MedProviders(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    specialty = models.CharField(max_length=250)
    description = models.CharField(max_length=5000)
    demo_id = models.ForeignKey(Demographics, on_clean=models.CASCADE)

    def _int_(self):
        return self.id
    
    def _str_(self):
        return self.firstname

    def _str_(self):
        return self.lastname
    
    def _str_(self):
        return self.specialty

    def _str_(self):
        return self.description

    def _int_(self):
        return self.demo_id