from django.db import models

# Create your models here.
class medProviders(models.Model):
    id = models.Integer(primary_key=True)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    specialty = models.CharField(max_length=250)
    description = models.CharField(max_length=5000)
    demo_id = models.Integer(foreign_key=True)
