from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'medprovider', views.MedProviderViewSet)
router.register(r'chcprovider', views.CHCProviderViewSet)
router.register(r'bhprovider', views.BHProviderViewSet)
router.register(r'formsubmissions', views.FormSubmissionsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]