# Generated by Django 3.0.4 on 2020-05-02 01:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0002_auto_20200501_1812'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bhproviders',
            name='demo_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='myapi.Demographics'),
        ),
        migrations.AlterField(
            model_name='chcproviders',
            name='demo_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='myapi.Demographics'),
        ),
        migrations.AlterField(
            model_name='medproviders',
            name='demo_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='myapi.Demographics'),
        ),
    ]