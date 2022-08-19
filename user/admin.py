from django.contrib import admin

# Register your models here.
from user.models import *

admin.site.register(CustomUser)
admin.site.register(results)