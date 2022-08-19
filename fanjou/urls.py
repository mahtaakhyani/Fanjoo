"""fanjou URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include,path
from django.views.generic import TemplateView
from fanjou import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
    path('', include('user.urls')),
    # path('admin_panel/', TemplateView.as_view(template_name='/root/bin/admin_panel/sample.html')),
    # path('blog/', TemplateView.as_view(template_name='../templates/Modified_files/blog.html')),
    # path('', TemplateView.as_view(template_name='../templates/Modified_files/index1.html')),
    path('panel/', login_required(TemplateView.as_view(template_name='../templates/Modified_files/panel.html'))),
    path('test/holland', TemplateView.as_view(template_name='../templates/Modified_files/test.html')),
    path('test/', TemplateView.as_view(template_name='../templates/Modified_files/choose_test.html')),
    path('about/', TemplateView.as_view(template_name='../templates/Modified_files/it_about.html')),

]
urlpatterns += staticfiles_urlpatterns()

