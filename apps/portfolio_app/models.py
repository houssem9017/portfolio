from django.db import models


class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=50, default="Freelance")
    description = models.TextField()
    github_link = models.URLField()
    creation_date = models.DateField(auto_now_add=True)
    images = models.JSONField(default=list)

    def __str__(self):
        return self.title
