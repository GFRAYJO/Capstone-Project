from django.contrib import admin
from .models import medProviders_model
from .models import chcProviders_model
from .models import bhProviders_model

# Registering of models
admin.site.register(medProviders_model)
admin.site.register(chcProviders_model)
admin.site.register(bhProviders_model)
