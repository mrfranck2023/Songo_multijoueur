# Generated by Django 4.0 on 2023-05-14 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songo', '0004_presence_nom'),
    ]

    operations = [
        migrations.AddField(
            model_name='points',
            name='scorej1',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='points',
            name='scorej2',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
