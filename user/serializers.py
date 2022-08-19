from django.contrib.auth.models import User
from user.models import *
# from upload.models import *
from rest_framework import serializers




class RequestRegisterSerializer(serializers.ModelSerializer):

	class Meta:
		model = CustomUser
		fields = ('id','name_fa' , 'lastname_fa', 'username' , 'password' , 'phonenum' ,
		'email','degree','gender')


class RequestRegisterSerializerIranStu(serializers.ModelSerializer):

	class Meta:
		model = CustomUser
		fields = ('id','name_fa' , 'lastname_fa', 'username' , 'name_en' , 'lastname_en' , 'codemli' , 'phonenum' ,
		'email' , 'student_id' , 'workplace_name' , 'address', 'fday' ,'sday' , 'postalcode' , 'activate')


class RequestRegisterSerializerForeign(serializers.ModelSerializer):

	class Meta:
		model = CustomUser
		fields = ('id', 'username' , 'name_en' , 'lastname_en', 'phonenum' ,
		'email' , 'workplace_name', 'activate')


class RequestResultSerializer(serializers.ModelSerializer):

	class Meta:
		model = results
		fields = ('email','news')


# class RequestUploadSerializer(serializers.ModelSerializer):
#
# 	class Meta:
# 		model = CustomUser
# 		fields = ('id','name_fa' , 'lastname_fa', 'username' , 'name_en' , 'lastname_en' , 'codemli' , 'phonenum' ,
# 		'email' , 'workplace_name' , 'address' , 'postalcode' , 'file' )



