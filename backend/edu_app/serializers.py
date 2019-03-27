from rest_framework import serializers
from edu_app.models import EduUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = EduUser
        fields = ['username', 'email', 'first_name', 'last_name', 'subject', 'location']
