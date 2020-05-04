from django.urls import path
from . import views

urlpatters = [
    path('', views.index),
    path('', views.MedProviderViewSet.as_view()),
    path('', views.CHCProviderViewSet.as_view()),
    path('', views.BHProviderViewSet.as_view()),
    path('', views.FormSubmissionsViewSet.as_view())
]