# Generated by Django 4.0 on 2023-05-14 07:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_internaute_nom'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='internaute',
            name='nom',
        ),
    ]