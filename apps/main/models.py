from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=255)
    percentage = models.IntegerField(default=0)
