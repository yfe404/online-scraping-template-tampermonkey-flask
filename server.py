import os
import logging
from flask import Flask
from flask import request

DUMP_FILE = "./dump.txt"

app = Flask(__name__)
app.debug = True

logger = logging.getLogger(__name__)

@app.route('/', methods=['POST'])
def save_data():
    data = request.get_data()
    data = url.decode("utf-8") 

    with open(DUMP_FILE, 'a+') as f:
        f.write(data + "\n")
        
    return ""
