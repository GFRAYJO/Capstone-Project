from django.contrib import admin
from myapi.models import Demographics,MedProviders,CHCProviders,BHProviders

# Registering of models
admin.site.register(Demographics)
admin.site.register(MedProviders)
admin.site.register(CHCProviders)
admin.site.register(BHProviders)
