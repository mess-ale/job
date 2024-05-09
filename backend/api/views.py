from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework import generics
from .models import User
from .serializers import UserSerializer, ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class CreateUsersViews(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserProfileAPIView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)  # Assuming you have a UserSerializer
        return Response(serializer.data)
    
class ContactAPIView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)