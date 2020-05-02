from django.contrib import admin
from .Models import Demographics
from .Models import MedProviders
from .Models import CHCProviders
from .Models import BHProviders

# Registering of models
admin.site.register(Demographics)
admin.site.register(MedProviders)
admin.site.register(CHCProviders)
admin.site.register(BHProviders)
