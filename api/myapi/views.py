from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import response

# Create your views here.
class getMedProviders(APIView):
    def get(self, req):
        return Res('data')