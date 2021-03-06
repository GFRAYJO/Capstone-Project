# Generated by Django 3.0.4 on 2020-05-03 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200502_1747'),
    ]

    operations = [
        migrations.CreateModel(
            name='FormSubmissions',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=150)),
                ('lastname', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=200, unique=True)),
                ('phone', models.IntegerField(max_length=15)),
                ('category', models.CharField(max_length=150)),
                ('details', models.CharField(blank=True, max_length=5000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'formsubmissions',
            },
        ),
    ]
