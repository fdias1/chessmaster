# Generated by Django 3.2.7 on 2021-09-24 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210923_2254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chesspiece',
            name='type',
            field=models.CharField(choices=[('pawn', 'Pawn'), ('rook', 'Rook'), ('knight', 'Knight'), ('bishop', 'Bishop'), ('queen', 'Queen'), ('king', 'King')], max_length=10),
        ),
    ]