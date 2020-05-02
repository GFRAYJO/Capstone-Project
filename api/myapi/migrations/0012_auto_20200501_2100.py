# Generated by Django 3.0.4 on 2020-05-02 04:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0011_auto_20200501_2010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bhproviders',
            name='demo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='myapi.Demographics'),
        ),
        migrations.AlterField(
            model_name='chcproviders',
            name='demo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='myapi.Demographics'),
        ),
        migrations.AlterField(
            model_name='medproviders',
            name='demo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='myapi.Demographics'),
        ),
        migrations.AlterField(
            model_name='medproviders',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
