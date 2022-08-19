from django.db import models
from django.contrib.auth.models import User , AbstractBaseUser 
from rest_framework import serializers
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError

from langdetect import detect


class CustomUser(AbstractUser):

	def validate_codemli(codemli):
		# print(1)
		if len(codemli) != 10 :
			print(len(codemli))
			raise ValidationError("Not Valid")

	def validate_phonenum(phonenum):
		if len(phonenum) != 11 :
			raise ValidationError("Not Valid")


	def validate_postalcode(postalcode):
		if len(str(postalcode)) not in range(0,11):
			raise ValidationError("Not Valid")

	def validate_namefa(name_fa):
		print(detect(name_fa))
		if detect(name_fa) not in ['ur' , 'fa' , 'ar']:
			raise ValidationError("Not Valid lang")
		if len(name_fa) > 30:
			raise ValidationError("length error")


	address = models.CharField(
		max_length=200 , blank=True,default = 'Blank' , null = True)

	file = models.FileField(upload_to='uploads', blank=True, null=False)

	name_fa = models.CharField(
		blank=False, max_length=100, null=True, validators=[validate_namefa])
	lastname_fa = models.CharField(
		blank=False, max_length=100, null=True, validators=[validate_namefa])
	email = models.EmailField(
		blank=False, max_length=100, null=True)
	name_en = models.CharField(
		max_length=100, null=True)
	lastname_en = models.CharField(
		blank=False, max_length=100, null=True)
	degree = models.CharField(
		blank=False, max_length=100, null=True)
	gender = models.CharField(
		blank=False, max_length=100, null=True)
	workplace_name = models.CharField(
		blank=True, max_length=100, unique=False, null=True)
	workplace_num = models.CharField(
		blank=True,max_length=100, unique=False, null=True , validators= [validate_phonenum])
	codemli = models.CharField(
		blank=True, max_length=100 , unique=True , null = True , validators= [validate_codemli])
	phonenum = models.CharField(
		blank=False, max_length=100 , unique=False , null = True , validators= [validate_phonenum])
	postalcode = models.CharField(
		blank=True, max_length=100 , unique=False , null = True , validators= [validate_postalcode])
	fday = models.BooleanField(default = False , null = True )
	sday = models.BooleanField(default = False , null = True)
	student_id = models.CharField(
		default='Not a student', blank=True, max_length=20, unique=False, null=True)



	activate = models.BooleanField(default = False , null = True)


class results(models.Model):
	email = models.EmailField(blank=False, max_length=100, null=True)
	news = models.BooleanField(default = False , null = True)
	totalscore = models.IntegerField(default=0 , null=True)





