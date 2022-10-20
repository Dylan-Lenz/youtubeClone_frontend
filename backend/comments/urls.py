from django.urls import path, include
from backend.comments.views import add_comments
from comments import views

urlpatterns = [
    path('<str:video_id>/', views.video_comments),
    path('', views.add_comments)
]