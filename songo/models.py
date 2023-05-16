from django.db import models



class points(models.Model):
    point1 = models.fields.IntegerField()
    point2 = models.fields.IntegerField()
    point3 = models.fields.IntegerField()
    point4 = models.fields.IntegerField()
    point5 = models.fields.IntegerField()
    point6 = models.fields.IntegerField()
    point7 = models.fields.IntegerField()
    point8 = models.fields.IntegerField()
    point9 = models.fields.IntegerField()
    point10 = models.fields.IntegerField()
    point11 = models.fields.IntegerField()
    point12 = models.fields.IntegerField()
    point13 = models.fields.IntegerField()
    point14 = models.fields.IntegerField()


class Score(models.Model):
    scorej1 = models.fields.IntegerField()
    scorej2 = models.fields.IntegerField()


class Presence(models.Model):
    presence = models.fields.IntegerField()
    nom = models.fields.CharField(max_length=50)

class Tour(models.Model):
    tourjoueur1 = models.fields.BooleanField()
    tourjoueur2 = models.fields.BooleanField()
    
