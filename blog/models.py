from django.db import models

from rest_framework import serializers
import datetime
import os

class BlogPost(models.Model):

    id = models.AutoField(primary_key=True)
    title = models.CharField( max_length=50 , blank=False, null=True)
    brieftext = models.TextField( max_length=5000 , blank=False, null=True)
    text = models.TextField( max_length=50000 , blank=False, null=True)
    date = models.DateField(default=datetime.date.today)
    tags = models.CharField( max_length=80 , blank=False, null=True)
    image = models.FileField(upload_to='uploads', blank=True, null=False)

    def get_fileurl(self):
        return self.image.url
