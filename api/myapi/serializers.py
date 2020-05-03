from rest_framework import serializers
from .models import Demographics, MedProvider, CHCProvider, BHProvider

class DemographicsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Demographics
        fields = ('id','address', 'city', 'state', 'zip', 'phone', 'url')

class MedProviderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MedProvider
        fields = ('firstname', 'lastname', 'specialty', 'description', 'demo_id')

class CHCProviderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CHCProvider
        fields = ('facilityname', 'specialty', 'description', 'demo_id')

class BHProviderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BHProvider
        fields = ('facilityname', 'firstname', 'lastname', 'specialty', 'description', 'demo_id')