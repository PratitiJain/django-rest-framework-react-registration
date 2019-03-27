from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login

from .models import EduUser


class UserSignUpForm(UserCreationForm):
    subject = forms.CharField(max_length=254, required=True)
    location = forms.CharField(max_length=254, required=True)

    class Meta:
        model = EduUser
        fields = ['username', 'first_name', 'last_name', 'password1', 'password2', 'email', 'subject', 'location']

    def save(self, commit=True):
        user = super(UserSignUpForm,self).save(commit=False)
        if commit:
            user.save()
        return user


