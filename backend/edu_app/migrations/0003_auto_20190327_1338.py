# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-03-27 13:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('edu_app', '0002_auto_20190219_1424'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eduuser',
            name='is_parent',
        ),
        migrations.RemoveField(
            model_name='eduuser',
            name='is_student',
        ),
        migrations.RemoveField(
            model_name='eduuser',
            name='is_tutor',
        ),
    ]
