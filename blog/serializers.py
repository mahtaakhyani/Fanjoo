from rest_framework import serializers
from blog.models import *


class RequestBlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

