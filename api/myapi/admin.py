from django.contrib import admin
from .models import Demographics, MedProvider, CHCProvider, BHProvider

# Registering of models
admin.site.register(Demographics)
admin.site.register(MedProvider)
admin.site.register(CHCProvider)
admin.site.register(BHProvider)
