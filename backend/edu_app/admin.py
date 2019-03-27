# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from django.contrib.auth.models import AbstractUser

from .models import EduUser

# Register your models here.
admin.site.register(EduUser)