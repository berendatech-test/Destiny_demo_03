from django.db import models

# Create your models here.

class Blog(models.Model):
    image = models.TextField() 
    title = models.TextField()
    desc = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

