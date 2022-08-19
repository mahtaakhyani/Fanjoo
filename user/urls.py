from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
 
    path('account/<int:redirect_num>/', views.AccountMainLogin.as_view() ),
    path('account/', views.AccountMainLogin.as_view() ),
    path('account/<int:redirect_num>', views.AccountMainLogin.as_view() ),
    path('account', views.AccountMainLogin.as_view() ),  
    path('career/<int:num>', TemplateView.as_view(template_name='../templates/Modified_files/it_careerAndSkill.html')),
    path('career', TemplateView.as_view(template_name='../templates/Modified_files/career.html')),
    #path('account/accessdenied', TemplateView.as_view(template_name='../templates/Modified_files/login.html')), 
    #path('register/', views.AccountMainRegister.as_view() ),
    path('result/', views.TestResultClass.as_view() ),
    # path('registerForeign/', views.RegisterFieldsForeign.as_view() ),
    # path('successreg/', views.SuccessfulRegistration.as_view() ),

 ]
