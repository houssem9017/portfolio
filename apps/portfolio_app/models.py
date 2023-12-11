from django.db import models


class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    github_link = models.URLField()
    creation_date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='portfolio_app/images', default='portfolio_app/images/default.png')
    images = models.JSONField(default=list)

    def __str__(self):
        return self.title
