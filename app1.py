from flask import Flask, render_template, request, redirect, url_for, session
import pymysql

app = Flask(__name__)
app.secret_key = 'skibidisecretkey'

conn = pymysql.connect(
    host='10.2.3.90', 
    user='root', 
    password='magnum asinum', 
    database='mygamelistsdb')


    

