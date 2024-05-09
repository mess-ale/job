from .views import UserProfileAPIView
from django.urls import path

urlpatterns = [
    path('user/data/', UserProfileAPIView.as_view(), name='data' )
]
