from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [

    path('admin_panel/', views.AdminPanelMain.as_view()),
    path('blog', views.BlogView.as_view()),
    path('blog/detail/<int:post_title>', views.BlogDetail.as_view()),
    path('', views.Index.as_view())

]

