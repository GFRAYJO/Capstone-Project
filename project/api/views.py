from rest_framework import viewsets
from .serializers import DemographicsSerializer, MedProviderSerializer, CHCProviderSerializer, BHProviderSerializer, FormSubmissionsSerializer
from .models import Demographics, MedProvider, CHCProvider, BHProvider, FormSubmissions

# Demographics Viewset
class DemographicsViewSet(viewsets.ModelViewSet):
    queryset = Demographics.objects.all().order_by('id')
    serializer_class = DemographicsSerializer

# MedProvider Viewset
class MedProviderViewSet(viewsets.ModelViewSet):
    queryset = MedProvider.objects.all().order_by('lastname')
    serializer_class = MedProviderSerializer

# CHCProvider Viewset
class CHCProviderViewSet(viewsets.ModelViewSet):
    queryset = CHCProvider.objects.all().order_by('facilityname')
    serializer_class = CHCProviderSerializer

# BHProvider Viewset
class BHProviderViewSet(viewsets.ModelViewSet):
    queryset = BHProvider.objects.all().order_by('facilityname')
    serializer_class = BHProviderSerializer

# FormSubmission Viewset
class FormSubmissionsViewSet(viewsets.ModelViewSet):
    queryset = FormSubmissions.objects.all().order_by('lastname')
    serializer_class = FormSubmissionsSerializer