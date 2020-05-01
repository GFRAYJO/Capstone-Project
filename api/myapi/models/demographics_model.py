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

    
