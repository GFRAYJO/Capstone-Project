from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'medprovider', views.MedProviderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

router = routers.DefaultRouter()
router.register(r'chcprovider', views.CHCProviderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

router = routers.DefaultRouter()
router.register(r'bhprovider', views.BHProviderViewSet)

# Wiring up of my API using automatic URL routing.

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]