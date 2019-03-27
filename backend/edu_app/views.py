# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,redirect
from django.views.generic import CreateView
from django.contrib.auth import login
from django.http import Http404
from django.core.mail import EmailMessage
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from edu_app.models import EduUser
from edu_app.forms import UserSignUpForm
from edu_app.serializers import UserSerializer


class UserSignUpView(CreateView):
    model = EduUser
    form_class = UserSignUpForm
    template_name = './edu_app/student_signup_form.html'

    def get_context_data(self, **kwargs):
        return super(UserSignUpView,self).get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('admin')


class UserAPIList(APIView):
    def get(self, request):
        users = EduUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_email(serializer['email'])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def send_email(email):
    print(email)
    email = EmailMessage('Subject',"Body", settings.EMAIL_HOST_USER,to=[email, 'xxx@gmail.com'], reply_to=[email, ])
    email.send()

class UserAPIDetail(APIView):
    
    def get_object(self, pk):
        print(pk)
        try:
            return EduUser.objects.get(pk=pk)
        except EduUser.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        users = self.get_object(pk)
        serializer = UserSerializer(users)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        users = self.get_object(pk)
        serializer = UserSerializer(users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        users = self.get_object(pk)
        users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)