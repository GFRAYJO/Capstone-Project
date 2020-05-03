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
        
# MedicalProvider table Model
class MedProvider(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    specialty = models.CharField(max_length=250)
    description = models.CharField(max_length=5000)
    demo = models.ForeignKey(Demographics, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'medprovider'

    def _str_(self):
        return self.firstname

    def _str_(self):
        return self.lastname
    
    def _str_(self):
        return self.specialty

    def _str_(self):
        return self.description

    def _int_(self):
        return self.demo


# CHCProvider table Model
class CHCProvider(models.Model):
    id = models.IntegerField(primary_key=True)
    facilityname = models.CharField(max_length=250)
    specialty = models.CharField(max_length=500)
    description = models.CharField(max_length=5000)
    demo = models.ForeignKey(Demographics,on_delete=models.CASCADE)

    class Meta:
        db_table = 'chcprovider'
    
    def _str_(self):
        return self.facilityname
    
    def _str_(self):
        return self.specialty

    def _str_(self):
        return self.description

    def _int_(self):
        return self.demo
    
# BHProvider Model
class BHProvider(models.Model):
    id = models.IntegerField(primary_key=True)
    facilityname = models.CharField(max_length=250)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    specialty = models.CharField(max_length=500)
    description = models.CharField(max_length=5000)
    demo = models.ForeignKey(Demographics,on_delete=models.CASCADE)

    class Meta:
        db_table = 'bhprovider'

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

    def _int_(self):
        return self.demo

# Form Submissions table Model
class FormSubmissions(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    email = models.EmailField(max_length=200, unique=True)
    phone = models.BigIntegerField(blank=True)
    category = models.CharField(max_length=150)
    details = models.CharField(max_length=5000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'formsubmissions'

    def _int_(self):
        return self.id

    def _str_(self):
        return self.firstname

    def _str_(self):
        return self.lastname
    
    def _str_(self):
        return self.email

    def _int_(self):
        return self.phone
        
    def _int_(self):
        return self.category

    def _str_(self):
        return self.details

    def _str_(self):
        return self.created_at
