from rest_framework import serializers
from .models import User, Profile, ClassificationResult, SkinImage, SkinDisease

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","password","email"]
        extra_kwargs = {"password": {"write_only": True}}

    def Create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ClassificationResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassificationResult
        fields = '__all__'

class SkinImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinImage
        fields = '__all__'

class SkinDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinDisease
        fields = '__all__'