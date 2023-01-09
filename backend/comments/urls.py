from django.urls import path
from comments import views

urlpatterns = [
    path('<str:video_id>/', views.get_comments),
    path('', views.create_comment)
]