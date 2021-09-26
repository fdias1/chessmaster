# Generated by Django 3.2.7 on 2021-09-24 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chesspiece',
            name='coordinates',
        ),
        migrations.AddField(
            model_name='chesspiece',
            name='color',
            field=models.CharField(choices=[('l', 'Light'), ('d', 'Dark')], default='l', max_length=1),
        ),
        migrations.AlterField(
            model_name='chesspiece',
            name='type',
            field=models.CharField(choices=[('pawn', 'Pawn'), ('rook', 'Rook'), ('bishop', 'Bishop'), ('queen', 'Queen'), ('king', 'King')], max_length=10),
        ),
    ]