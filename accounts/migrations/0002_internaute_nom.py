# Generated by Django 4.0 on 2023-05-14 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='internaute',
            name='nom',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
