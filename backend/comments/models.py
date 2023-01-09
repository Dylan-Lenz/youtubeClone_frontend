from django.db import models
from authentication.models import User

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=11)
    text = models.CharField(max_length=144)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)