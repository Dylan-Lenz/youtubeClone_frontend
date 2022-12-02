from django.urls import path
from comments import views

urlpatterns = [
    path('<str:video_id>/', views.video_comments),
    path('', views.add_comments)
]