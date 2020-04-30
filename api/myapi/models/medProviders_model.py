from django.db import models

# Demographics Model
class Demographics(models.Model):
    id = models.IntegerField(primary_key=True)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=150)
    state = models.CharField(max_length=100)
    zip = models.IntegerField(blank=False, null=False)
    phone = models.IntegerField(blank=False, null=False)
    url = models.CharField(max_length=500)

    class Meta:
        managed = True
        db_table = 'demographics'

# Medical Provider Model
class MedProviders(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    specialty = models.CharField(max_length=250)
    description = models.CharField(max_length=5000)
    demo_id = models.ForeignKey(Demographics, on_clean=models.CASCADE)

    class Meta:
        managed = True
        db_table = 'medprovider'