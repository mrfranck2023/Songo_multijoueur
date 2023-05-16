# Generated by Django 4.0 on 2023-05-14 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songo', '0005_points_scorej1_points_scorej2'),
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scorej1', models.IntegerField()),
                ('scorej2', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='points',
            name='scorej1',
        ),
        migrations.RemoveField(
            model_name='points',
            name='scorej2',
        ),
    ]
