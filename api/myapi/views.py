from rest_framework import viewsets
from .serializers import DemographicsSerializer, MedProviderSerializer, CHCProviderSerializer, BHProviderSerializer
from .models import Demographics, MedProvider, CHCProvider, BHProvider

""" from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import response """

# My Views
class DemographicsViewSet(viewsets.ModelViewSet):
    queryset = Demographics.objects.all().order_by('id')
    serializer_class = DemographicsSerializer

class MedProviderViewSet(viewsets.ModelViewSet):
    queryset = MedProvider.objects.all().order_by('lastname')
    serializer_class = MedProviderSerializer

class CHCProviderViewSet(viewsets.ModelViewSet):
    queryset = CHCProvider.objects.all().order_by('facilityname')
    serializer_class = CHCProviderSerializer

class BHProviderViewSet(viewsets.ModelViewSet):
    queryset = BHProvider.objects.all().order_by('facilityname')
    serializer_class = BHProviderSerializer